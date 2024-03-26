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
import { Picker } from '@react-native-picker/picker';

import { RPH, RPW } from '../../../utils/dimensions';

const StockScreen = ({ route, navigation }) => {
    const { medicineObj } = route.params;
    const [number, setNumber] = React.useState('1');

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="medication" size={35} color={'#fff'} />
                <Text style={style.headerText}>
                    How many meds did you fill up in the dispenser?
                </Text>
            </View>

            <View style={style.bodyTwo}>
                <Picker
                    selectedValue={number}
                    onValueChange={(itemValue, itemIndex) =>
                        setNumber(itemValue)
                    }>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="13" value="13" />
                    <Picker.Item label="14" value="14" />
                    <Picker.Item label="15" value="15" />
                </Picker>

                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() => {
                        medicineObj.pillsLoaded = parseInt(number);
                        medicineObj.pillsLeft = number;
                        console.log(medicineObj);
                        navigation.navigate('Medicine_Additional', {
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

export default StockScreen;
