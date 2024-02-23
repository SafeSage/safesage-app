import React, { useState } from 'react';
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
import { BASE_URL, REGISTER_PATH } from '../../utils/urls';

const RegisterGuardianScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const register = async () => {
        try {
            setIsLoading(true);
            const url = `${BASE_URL}/${REGISTER_PATH}`;

            const res = await axios.post(url, {
                name: name,
                email: email,
                phone: phone,
                password: password,
                address: address,
                userType: 'GUARDIAN'
            });

            if (
                res.status == 201 &&
                res.data.data.token !== 'undefined' &&
                res.data.data.user !== 'undefined'
            ) {
                await AsyncStorage.setItem('token', res.data.data.token);
                await AsyncStorage.setItem(
                    'user',
                    JSON.stringify(res.data.data.user)
                );
                await AsyncStorage.setItem(
                    'authEmailId',
                    res.data.data.authEmailId
                );

                console.log(res.data.data);
                navigation.navigate('Otp', { screen: 'Home_Guardian' });
            }
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError('Something went wrong');
            onToggleSnackBar();
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar backgroundColor="#EBEFFA" barStyle="dark-content" />

            {/* <View
                style={{
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image style={styles.image} source={brandLogo} />
            </View> */}

            <Text style={styles.loginText}>Let's Start</Text>

            <View style={styles.input}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#353A48"
                    enterKeyHint="next"
                    autoComplete="name"
                    onChangeText={(value) => setName(value)}
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons name="person" size={22} color={'#353A48'} />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#353A48"
                    enterKeyHint="next"
                    keyboardType="email-address"
                    autoComplete="email"
                    onChangeText={(value) => setEmail(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    onSubmitEditing={() => {
                        this.thirdTextInput.focus();
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
                    placeholder="Phone number"
                    placeholderTextColor="#353A48"
                    enterKeyHint="next"
                    keyboardType="numeric"
                    onChangeText={(value) => setPhone(value)}
                    ref={(input) => {
                        this.thirdTextInput = input;
                    }}
                    onSubmitEditing={() => {
                        this.fourthTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons
                    name="phone-in-talk"
                    size={22}
                    color={'#353A48'}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#353A48"
                    autoCapitalize="none"
                    autoComplete="password"
                    enterKeyHint="next"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    ref={(input) => {
                        this.fourthTextInput = input;
                    }}
                    onSubmitEditing={() => {
                        this.fifthTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons name="password" size={22} color={'#353A48'} />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder="Address"
                    placeholderTextColor="#353A48"
                    autoCapitalize="none"
                    enterKeyHint="done"
                    autoComplete="postal-address"
                    onChangeText={(value) => setAddress(value)}
                    ref={(input) => {
                        this.fifthTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10,
                        color: '#353A48'
                    }}
                />
                <MaterialIcons name="home" size={22} color={'#353A48'} />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.loginButtonView}
                    onPress={register}>
                    {isLoading ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Register</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.registerButtonView}>
                <Text style={{ color: '#353A48' }}>Already Registered? </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.replace('Login');
                    }}>
                    <Text style={styles.registerButton}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'ok',
                        onPress: () => {
                            onDismissSnackBar;
                        }
                    }}>
                    {error}
                </Snackbar>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EBEFFA',
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
        color: '#D7DBE7',
        marginBottom: 30
    },
    input: {
        color: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#353A48',
        marginBottom: 28,
        paddingRight: 10
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

export default RegisterGuardianScreen;
