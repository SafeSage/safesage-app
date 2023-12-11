import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <StatusBar backgroundColor="#EBEFFA" barStyle="dark-content" />
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register_Patient');
                    }}
                    style={styles.button}>
                    <Text>Register as Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register_Guardian');
                    }}
                    style={styles.button}>
                    <Text>Register as Guardian</Text>
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
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        backgroundColor: '#D7DBE7',
        borderRadius: 15,
        marginVertical: 30,
        width: '98%',
        height: '32%'
    }
});

export default RegisterScreen;
