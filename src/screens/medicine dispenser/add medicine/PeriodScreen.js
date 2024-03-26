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
import DatePicker from 'react-native-date-picker';

import { RPH, RPW } from '../../../utils/dimensions';

const PeriodScreen = ({ route, navigation }) => {
    const { medicineObj } = route.params;
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="edit-calendar" size={35} color={'#fff'} />
                <Text style={style.headerText}>
                    What is the period in which you have to take the med?
                </Text>
            </View>

            <View style={style.bodyTwo}>
                <View style={style.dateView}>
                    <Text style={style.dateText}>Start Date</Text>
                    <DatePicker
                        mode={'date'}
                        date={startDate}
                        onDateChange={setStartDate}
                    />
                </View>

                <View style={style.dateView}>
                    <Text style={style.dateText}>End Date</Text>
                    <DatePicker
                        mode={'date'}
                        date={endDate}
                        onDateChange={setEndDate}
                    />
                </View>

                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() => {
                        medicineObj.startDate = startDate;
                        medicineObj.endDate = endDate;
                        navigation.navigate('Medicine_Stock', { medicineObj });
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

export default PeriodScreen;
