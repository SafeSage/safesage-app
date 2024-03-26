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

const TimeScreen = ({ route, navigation }) => {
    const { medicineObj } = route.params;
    const [times, setTimes] = React.useState([]);
    const [views, setViews] = React.useState([]);

    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

    const showTimePicker = () => {
        setOpen(true);
    };

    const hideTimePicker = () => {
        setOpen(false);
    };

    const handleConfirm = (date) => {
        medicineObj.times?.push(date);
        const time = times;
        time.push(
            date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        );
        setTimes(time);
        setDate(date);
        timeView();
        hideTimePicker(false);
    };

    const timeView = () => {
        let view = [];
        for (let i = 0; i < medicineObj.frequency; i++) {
            view.push(
                <View key={i}>
                    <TouchableOpacity onPress={showTimePicker}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: '5%',
                                borderBottomWidth: 1
                            }}>
                            <MaterialIcons
                                name="alarm"
                                size={30}
                                color={'#000'}
                            />

                            <Text
                                style={{
                                    marginHorizontal: '5%',
                                    color: '#000',
                                    fontSize: 30,
                                    fontWeight: '500'
                                }}>
                                {times[i] ? times[i] : '00:00 PM'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
        setViews(view);
    };

    React.useEffect(() => {
        timeView();
    }, []);

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#263f9b" barStyle="light-content" />

            <View style={style.headerView}>
                <MaterialIcons name="alarm" size={35} color={'#fff'} />
                <Text style={style.headerText}>
                    What time do you take the med?
                </Text>
            </View>

            <DatePicker
                modal
                mode={'time'}
                open={open}
                date={date}
                onConfirm={(date) => {
                    handleConfirm(date);
                }}
                onCancel={() => {
                    hideTimePicker();
                }}
            />

            <View style={style.bodyTwo}>
                {views}
                <TouchableOpacity
                    style={style.sosButton}
                    onPress={() => {
                        navigation.navigate('Medicine_Period', {
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

export default TimeScreen;
