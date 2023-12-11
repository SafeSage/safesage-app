import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import illustration from '../assets/illustration.png'
// import { BASE_URL, LOGIN_PATH } from '../utils/config';

const HomePatientScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        //     try {
        //         const url = `${BASE_URL}/${LOGIN_PATH}`;
        //         const res = await axios.post(url, {
        //             email: email,
        //             password: password
        //         });
        //         if (
        //             res.status == 200 &&
        //             res.data.data.token !== 'undefined' &&
        //             res.data.data.user !== 'undefined'
        //         ) {
        //             await AsyncStorage.setItem('token', res.data.data.token);
        //             await AsyncStorage.setItem(
        //                 'user',
        //                 JSON.stringify(res.data.data.user)
        //             );
        //             navigation.replace('Drawer');
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
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
                    placeholder="Email Address"
                    placeholderTextColor="#353A48"
                    enterKeyHint="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(value) => setEmail(value)}
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10
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
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10
                    }}
                />
                <MaterialIcons name="password" size={22} color={'#353A48'} />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.loginButtonView}
                    onPress={login}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerButtonView}>
                <Text style={{ color: '#353A48' }}>Already Registered? </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register');
                    }}>
                    <Text style={styles.registerButton}>Login</Text>
                </TouchableOpacity>
            </View>
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

export default HomePatientScreen;
