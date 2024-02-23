import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterPatientScreen from './screens/patient/RegisterPatientScreen';
import RegisterGuardianScreen from './screens/guardian/RegisterGuardianScreen';
import HomePatientScreen from './screens/patient/HomePatientScreen';
import HomeGuardianScreen from './screens/guardian/HomeGuardianScreen';
import RegisterScreen from './screens/RegisterScreen';
import OtpScreen from './screens/OtpScreen';
import ConnectionPatientScreen from './screens/patient/ConnectionPatientScreen';
import AdditionalDetailsPatientScreen from './screens/patient/AdditionalDetailsPatientScreen';

const Stack = createStackNavigator();

function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //             name="Login"
        //             component={LoginScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Register"
        //             component={RegisterScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Register_Patient"
        //             component={RegisterPatientScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Register_Guardian"
        //             component={RegisterGuardianScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Otp"
        //             component={OtpScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Additional_Info"
        //             component={AdditionalDetailsPatientScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Connection"
        //             component={ConnectionPatientScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Home_Patient"
        //             component={HomePatientScreen}
        //             options={{ headerShown: false }}
        //         />
        //         <Stack.Screen
        //             name="Home_Guardian"
        //             component={HomeGuardianScreen}
        //             options={{ headerShown: false }}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <HomeGuardianScreen />
    );
}

export default App;
