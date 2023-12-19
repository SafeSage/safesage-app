import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { BASE_URL, GET_EVENTS } from '../utils/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeGuardianScreen = ({ navigation }) => {
    // const [events, setEvents] = React.useState([]);

    // const getEvents = async () => {
    //     try {
    //         const url = `${BASE_URL}/${GET_EVENTS}`;
    //         const token = await AsyncStorage.getItem('token');

    //         const res = await axios.post(url, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         setEvents(res.data.data.events);
    //         console.log(events);
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // };

    // React.useEffect(() => getEvents(), []);

    return (
        <SafeAreaView style={style.body}>
            <StatusBar backgroundColor="#fafafd" barStyle="dark-content" />
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Text
                    style={{
                        color: '#1c2b8a',
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>
                    Notifications
                </Text>
            </View>

            <View style={style.notificationView}>
                <View style={style.iconView}>
                    <MaterialCommunityIcons
                        name="handball"
                        size={25}
                        color={'#353A48'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#1c2b8a', fontWeight: 'bold' }}>
                            Fall Detected
                        </Text>
                        <Text style={{ color: '#000000' }}>
                            Dec 11, 1:28 pm
                        </Text>
                    </View>
                    <View style={{ marginLeft: 90 }}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                            color={'#1c2b8a'}
                        />
                    </View>
                </View>
            </View>

            <View style={style.notificationView}>
                <View style={style.iconView}>
                    <MaterialCommunityIcons
                        name="handball"
                        size={25}
                        color={'#353A48'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#1c2b8a', fontWeight: 'bold' }}>
                            Fall Detected
                        </Text>
                        <Text style={{ color: '#000000' }}>
                            Dec 11, 7:06 pm
                        </Text>
                    </View>
                    <View style={{ marginLeft: 90 }}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                            color={'#1c2b8a'}
                        />
                    </View>
                </View>
            </View>

            <View style={style.notificationView}>
                <View style={style.iconView}>
                    <MaterialCommunityIcons
                        name="handball"
                        size={25}
                        color={'#353A48'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#1c2b8a', fontWeight: 'bold' }}>
                            Fall Detected
                        </Text>
                        <Text style={{ color: '#000000' }}>
                            Dec 11, 7:07 pm
                        </Text>
                    </View>
                    <View style={{ marginLeft: 90 }}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                            color={'#1c2b8a'}
                        />
                    </View>
                </View>
            </View>

            <View style={style.notificationView}>
                <View style={style.iconView}>
                    <MaterialCommunityIcons
                        name="handball"
                        size={25}
                        color={'#353A48'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#1c2b8a', fontWeight: 'bold' }}>
                            Fall Detected
                        </Text>
                        <Text style={{ color: '#000000' }}>
                            Dec 11, 11:03 pm
                        </Text>
                    </View>
                    <View style={{ marginLeft: 90 }}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                            color={'#1c2b8a'}
                        />
                    </View>
                </View>
            </View>

            <View style={style.notificationView}>
                <View style={style.iconView}>
                    <MaterialCommunityIcons
                        name="handball"
                        size={25}
                        color={'#353A48'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#1c2b8a', fontWeight: 'bold' }}>
                            Fall Detected
                        </Text>
                        <Text style={{ color: '#000000' }}>
                            Dec 11, 11:03 pm
                        </Text>
                    </View>
                    <View style={{ marginLeft: 90 }}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                            color={'#1c2b8a'}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fafafd',
        padding: 25,
        width: '100%'
    },
    notificationView: {
        marginVertical: 15,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        width: '100%',
        height: '10%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    iconView: {
        backgroundColor: '#f9dbf8',
        height: '65%',
        width: '15%',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeGuardianScreen;
