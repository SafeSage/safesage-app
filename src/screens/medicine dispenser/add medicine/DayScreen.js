import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { RPH, RPW } from '../../../utils/dimensions';

const DayScreen = ({ route, navigation }) => {
    const { medicineObj } = route.params;

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="calendar-month" size={35} color={'#fff'} />
                <Text style={style.headerText}>
                    Which days do you take the med?
                </Text>
            </View>

            <View style={style.bodyTwo}>
                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Sunday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.SUN = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Monday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.MON = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Tuesday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.TUE = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Wednesday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.WED = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Thursday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.THU = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Friday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.FRI = isChecked;
                        }}
                    />
                </View>

                <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#263f9b"
                        unfillColor="#FFFFFF"
                        text="Saturday"
                        textStyle={{
                            textDecorationLine: 'none'
                        }}
                        iconStyle={{ borderColor: '#263f9b' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            medicineObj.days.SAT = isChecked;
                        }}
                    />
                </View>

                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() => {
                        navigation.navigate('Medicine_Frequency', {
                            medicineObj
                        });
                    }}>
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

export default DayScreen;
