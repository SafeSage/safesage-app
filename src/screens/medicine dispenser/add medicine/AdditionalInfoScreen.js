import React from 'react';
import {
    ActivityIndicator,
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

import { RPH, RPW } from '../../../utils/dimensions';
import { BASE_URL, POST_MEDICINE } from '../../../utils/urls';

const AdditionalInfoScreen = ({ route, navigation }) => {
    const { medicineObj } = route.params;
    const [isLoading, setIsLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const postMedicine = async () => {
        try {
            setIsLoading(true);

            const days = [];
            if (medicineObj.days.SUN) days.push(0);
            if (medicineObj.days.MON) days.push(1);
            if (medicineObj.days.TUE) days.push(2);
            if (medicineObj.days.WED) days.push(3);
            if (medicineObj.days.THU) days.push(4);
            if (medicineObj.days.FRI) days.push(5);
            if (medicineObj.days.SAT) days.push(6);

            const startDate = new Date(medicineObj.startDate);
            const endDate = new Date(medicineObj.endDate);

            const tempDates = [];
            medicineObj.times.forEach((time) => {
                const tempDate = new Date(
                    startDate.getFullYear(),
                    startDate.getMonth(),
                    startDate.getDate(),
                    time.getHours(),
                    time.getMinutes()
                );
                tempDates.push(tempDate);
            });

            const timestamps = [];
            while (tempDates[0] <= endDate) {
                for (let i = 0; i < tempDates.length; i++) {
                    if (days.includes(tempDates[i].getDay())) {
                        timestamps.push(new Date(tempDates[i]));
                    }
                    tempDates[i].setDate(tempDates[i].getDate() + 1);
                }
            }

            medicineObj.patientId = JSON.parse(
                await AsyncStorage.getItem('patient')
            )._id;
            medicineObj.days = days;
            medicineObj.timestamps = timestamps;

            const url = `${BASE_URL}/${POST_MEDICINE}`;
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            const token = await AsyncStorage.getItem('token');

            const res = await axios.post(url, medicineObj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status == 201) {
                if (user.userType == 'PATIENT') {
                    navigation.replace('Home_Patient');
                } else if (user.userType == 'GUARDIAN') {
                    navigation.replace('Home_Guardian');
                }
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            onToggleSnackBar();
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="info" size={35} color={'#fff'} />
                <Text style={style.headerText}>Additional Information</Text>
            </View>

            <View style={style.bodyTwo}>
                <TextInput
                    placeholder="Instructions"
                    placeholderTextColor={'#000'}
                    cursorColor={'#263f9b'}
                    onChangeText={(value) => {
                        medicineObj.instructions = value;
                    }}
                    style={style.enterMedicineInput}
                />

                <TextInput
                    placeholder="Side Effects"
                    placeholderTextColor={'#000'}
                    cursorColor={'#263f9b'}
                    onChangeText={(value) => {
                        medicineObj.sideEffects = value;
                    }}
                    style={style.enterMedicineInput}
                />

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
                        Something went wrong
                    </Snackbar>
                </View>

                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() => {
                        postMedicine();
                    }}>
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <MaterialIcons
                            name="arrow-forward"
                            size={35}
                            color={'#fff'}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    bodyOne: {
        flex: 1,
        backgroundColor: '#fafafd',
        width: RPW(100)
    },
    bodyTwo: {
        flex: 1,
        paddingHorizontal: RPW(6),
        paddingVertical: RPH(4)
    },
    headerView: {
        justifyContent: 'center',
        backgroundColor: '#263f9b',
        paddingVertical: RPH(2),
        paddingHorizontal: RPW(6),
        height: RPH(25)
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20
    },
    headerText: {
        color: '#fafafd',
        fontSize: 22,
        fontWeight: '600',
        marginTop: RPH(3)
    },
    enterMedicineInput: {
        color: '#000',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: RPW(3),
        paddingVertical: RPH(2),
        marginBottom: RPH(4)
    },
    dateView: {
        borderBottomWidth: 1,
        marginBottom: '5%'
    },
    dateText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    sosButton: {
        backgroundColor: '#263f9b',
        position: 'absolute',
        top: '95%',
        left: '90%',
        padding: 15,
        borderRadius: 50
    }
});

export default AdditionalInfoScreen;
