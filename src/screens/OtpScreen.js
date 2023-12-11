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
import { useRoute } from '@react-navigation/native';

// import illustration from '../assets/illustration.png'
import { BASE_URL, OTP_PATH } from '../utils/urls';

const OtpScreen = ({ navigation }) => {
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const [otp6, setOtp6] = useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const verifyOtp = async () => {
        try {
            const route = useRoute();
            setIsLoading(true);

            const url = `${BASE_URL}/${OTP_PATH}`;
            const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
            const authEmailId = await AsyncStorage.getItem('authEmailId');
            const token = await AsyncStorage.getItem('token');

            const res = await axios.post(
                url,
                {
                    authEmailId: authEmailId,
                    emailOtp: otp
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

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
                navigation.replace(route.params?.screen);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error.response);
            if (error.response.status === 400) {
                setError('Incorrect OTP!');
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
            <StatusBar backgroundColor="#EBEFFA" barStyle="dark-content" />

            {/* <View
                style={{
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image style={styles.image} source={brandLogo} />
            </View> */}

            <Text style={styles.loginText}>OTP Verification</Text>

            <View style={styles.inputView}>
                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    autoComplete="sms-otp"
                    autoFocus={true}
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    ref={(input) => {
                        this.firstTextInput = input;
                    }}
                    onChangeText={(value) => {
                        setOtp1(value);
                        this.secondTextInput.focus();
                    }}
                    style={styles.input}
                />

                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    onChangeText={(value) => {
                        setOtp2(value);
                        this.thirdTextInput.focus();
                    }}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={styles.input}
                />

                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    onChangeText={(value) => {
                        setOtp3(value);
                        this.fourthTextInput.focus();
                    }}
                    ref={(input) => {
                        this.thirdTextInput = input;
                    }}
                    style={styles.input}
                />

                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    onChangeText={(value) => {
                        setOtp4(value);
                        this.fifthTextInput.focus();
                    }}
                    ref={(input) => {
                        this.fourthTextInput = input;
                    }}
                    style={styles.input}
                />

                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    onChangeText={(value) => {
                        setOtp5(value);
                        this.sixthTextInput.focus();
                    }}
                    ref={(input) => {
                        this.fifthTextInput = input;
                    }}
                    style={styles.input}
                />

                <TextInput
                    placeholder=""
                    enterKeyHint="next"
                    keyboardType="numeric"
                    caretHidden={true}
                    textAlign={'center'}
                    maxLength={1}
                    onChangeText={(value) => {
                        setOtp6(value);
                    }}
                    ref={(input) => {
                        this.sixthTextInput = input;
                    }}
                    style={styles.input}
                />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.loginButtonView}
                    onPress={verifyOtp}>
                    {isLoading ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Verify</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.registerButtonView}>
                <Text style={{ color: '#353A48' }}>Didn't get the OTP? </Text>

                <TouchableOpacity
                // onPress={() => {
                //     navigation.navigate('Register');
                // }}
                >
                    <Text style={styles.registerButton}>Resend Email</Text>
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
    inputView: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'center'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#353A48',
        marginBottom: 28,
        paddingRight: 10,
        marginHorizontal: 10,
        color: '#353A48',
        fontSize: 20
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

export default OtpScreen;
