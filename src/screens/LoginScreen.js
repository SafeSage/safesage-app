import React from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Snackbar } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import illustration from '../assets/illustration.png'
import { BASE_URL, LOGIN_PATH } from '../utils/urls';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const login = async () => {
        try {
            setIsLoading(true);
            const url = `${BASE_URL}/${LOGIN_PATH}`;

            const res = await axios.post(url, {
                email: email,
                password: password
            });

            if (
                res.status == 200 &&
                res.data.data.token !== 'undefined' &&
                res.data.data.user !== 'undefined'
            ) {
                await AsyncStorage.setItem('token', res.data.data.token);
                await AsyncStorage.setItem(
                    'user',
                    JSON.stringify(res.data.data.user)
                );
                console.log(res.data.data.user);

                if (res.data.data.user.userType == 'PATIENT') {
                    navigation.replace('Home_Patient');
                } else if (res.data.data.user.userType == 'GUARDIAN') {
                    navigation.replace('Home_Guardian');
                }

                setIsLoading(false);
            }
        } catch (error) {
            if (error.response.status === 404) {
                setError('Invalid email or password!');
                onToggleSnackBar();
            } else {
                setError('Something went wrong');
                onToggleSnackBar();
            }

            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar backgroundColor="#F4E1E7" barStyle="dark-content" />

            {/* <View
                style={{
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image style={styles.image} source={brandLogo} />
            </View> */}

            <Text style={styles.loginText}>Welcome Back!</Text>

            <View style={styles.input}>
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#353A48"
                    enterKeyHint="next"
                    keyboardType="email-address"
                    autoComplete="email"
                    autoCapitalize="none"
                    onChangeText={(value) => setEmail(value)}
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons
                    name="alternate-email"
                    size={22}
                    color={'#353A48'}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#353A48"
                    enterKeyHint="done"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons name="password" size={22} color={'#353A48'} />
            </View>

            <View style={styles.forgortPasswordView}>
                <TouchableOpacity>
                    <Text style={styles.forgortPasswordText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.loginButtonView}
                    onPress={login}>
                    {isLoading ? (
                        <ActivityIndicator color="#353A48" />
                    ) : (
                        <Text style={styles.loginButtonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.registerButtonView}>
                <Text style={{ color: '#353A48' }}>New to the app? </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register');
                    }}>
                    <Text style={styles.registerButton}>Register</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Ok',
                        onPress: () => {
                            onDismissSnackBar;
                        }
                    }}>
                    {error}
                </Snackbar>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F4E1E7',
        padding: 25,
        width: '100%'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    loginText: {
        // fontWeight: 'bold',
        fontSize: 70,
        color: '#DCC2CA'
    },
    input: {
        color: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#353A48',
        marginTop: 28,
        paddingRight: 10
    },
    forgortPasswordView: {
        alignItems: 'flex-end',
        marginBottom: 20,
        marginTop: 10
    },
    forgortPasswordText: {
        // fontWeight: 'bold',
        color: '#353A48'
    },
    loginButtonView: {
        marginVertical: 15,
        marginHorizontal: 8,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353A48',
        borderRadius: 5
    },
    loginButtonText: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    registerButtonView: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'center'
    },
    registerButton: {
        color: '#353A48',
        fontWeight: 'bold'
    }
});

export default LoginScreen;
