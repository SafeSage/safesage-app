import React, { useMemo, useRef } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_URL, GET_EVENTS } from '../../utils/urls';
import { RPH, RPW } from '../../utils/dimensions';

const ScheduleScreen = ({ navigation }) => {
    const [events, setEvents] = React.useState([]);

    const getEvents = async () => {
        try {
            const url = `${BASE_URL}/${GET_EVENTS}`;
            const token = await AsyncStorage.getItem('token');

            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEvents(res.data.data.events.reverse());
        } catch (error) {
            console.log(error.response);
        }
    };

    React.useEffect(() => {
        getEvents();
    }, []);

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace('Home_Guardian');
                    }}>
                    <MaterialIcons
                        name="chevron-left"
                        size={35}
                        color={'#fafafd'}
                    />
                </TouchableOpacity>

                <Text style={style.headerText}>Medicine Dispenser</Text>
            </View>

            <View style={style.bodyTwo}>
                <TouchableOpacity
                    style={style.addMedicineButton}
                    onPress={() => navigation.navigate('Medicine_Name')}>
                    <Text style={style.addMedicineButtonText}>
                        Add medicine to slot 1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.addMedicineButton}>
                    <Text style={style.addMedicineButtonText}>
                        Add medicine to slot 2
                    </Text>
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
        paddingHorizontal: RPW(6)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#263f9b',
        paddingVertical: RPH(2),
        paddingHorizontal: RPW(3)
    },
    headerText: {
        color: '#fafafd',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: '2%'
    },
    addMedicineButton: {
        marginTop: RPH(4),
        height: RPH(30),
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#263f9b',
        borderTopColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    addMedicineButtonText: {
        color: '#000',
        fontWeight: '800',
        fontSize: 20
    }
});

export default ScheduleScreen;
