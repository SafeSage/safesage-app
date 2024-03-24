import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { navigationRef } from './utils/root-navigation';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterPatientScreen from './screens/auth/RegisterPatientScreen';
import RegisterGuardianScreen from './screens/auth/RegisterGuardianScreen';
import HomePatientScreen from './screens/patient/HomePatientScreen';
import HomeGuardianScreen from './screens/guardian/HomeGuardianScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import OtpScreen from './screens/auth/OtpScreen';
import ConnectionPatientScreen from './screens/patient/ConnectionPatientScreen';
import AdditionalDetailsPatientScreen from './screens/patient/AdditionalDetailsPatientScreen';
import NotificationScreen from './screens/NotificationScreen';
import ScheduleScreen from './screens/medicine dispenser/ScheduleScreen';
import NameScreen from './screens/medicine dispenser/add medicine/NameScreen';
import DayScreen from './screens/medicine dispenser/add medicine/DayScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register_Patient"
                        component={RegisterPatientScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register_Guardian"
                        component={RegisterGuardianScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Otp"
                        component={OtpScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Additional_Info"
                        component={AdditionalDetailsPatientScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Connection"
                        component={ConnectionPatientScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home_Patient"
                        component={HomePatientScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home_Guardian"
                        component={HomeGuardianScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Medicine_Dispenser"
                        component={ScheduleScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Notification"
                        component={NotificationScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Medicine_Name"
                        component={NameScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Medicine_Day"
                        component={DayScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default App;
