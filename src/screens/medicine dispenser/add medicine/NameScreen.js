import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RPH, RPW } from '../../../utils/dimensions';

const NameScreen = ({ navigation }) => {
    const medicineObj = {
        tube: '',
        drugName: '',
        brandName: '',
        form: '',
        dosageStrength: '',
        days: {
            SUN: false,
            MON: false,
            TUE: false,
            WED: false,
            THU: false,
            FRI: false,
            SAT: false
        },
        frequency: 0,
        times: [],
        startDate: '',
        endDate: '',
        timestamps: [],
        pillsLoaded: 0,
        pillsLeft: 0,
        instructions: '',
        sideEffects: '',
        medicineDispenser: true,
        inventoryManagement: false,
        pillsInStrip: 0,
        noOfStrips: 0,
        totalPills: 0,
        dailyFrequency: 0,
        stockReminder: {
            daysLeft: 0
        },
        patientId: ''
    };

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="medication" size={35} color={'#fff'} />
                <Text style={style.headerText}>
                    What med would you like to add?
                </Text>
            </View>

            <View style={style.bodyTwo}>
                <TextInput
                    placeholder="Enter medicine"
                    placeholderTextColor={'#000'}
                    cursorColor={'#263f9b'}
                    onChangeText={(value) => {
                        medicineObj.tube = value;
                        medicineObj.drugName = value;
                        medicineObj.brandName = value;
                        medicineObj.form = 'tablet';
                    }}
                    style={style.enterMedicineInput}
                />

                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() =>
                        navigation.navigate('Medicine_Day', { medicineObj })
                    }>
                    <MaterialIcons
                        name="arrow-forward"
                        size={35}
                        color={'#fff'}
                    />
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
        paddingVertical: RPH(2)
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

export default NameScreen;
