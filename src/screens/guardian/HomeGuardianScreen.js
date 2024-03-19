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
import BottomSheet from '@gorhom/bottom-sheet';

import { BASE_URL, GET_EVENTS } from './../../utils/urls';
import NotificationCard from '../../components/NotificationCard';
import { RPH, RPW } from '../../utils/dimensions';

const HomeGuardianScreen = ({ navigation }) => {
    const [events, setEvents] = React.useState([]);

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handleOpenPress = () => bottomSheetRef.current.expand();

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

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('token');
            navigation.replace('Login');
        } catch {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getEvents();
    }, []);

    return (
        <SafeAreaView style={style.body}>
            <StatusBar backgroundColor="#fafafd" barStyle="dark-content" />

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}>
                <View>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>

            <View style={style.headerView}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={handleOpenPress}>
                    <Text style={style.patientNameText}>Idiotic Gandu</Text>
                    <MaterialIcons
                        name="expand-more"
                        size={27}
                        color={'#000'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.icon} onPress={logout}>
                    <MaterialIcons
                        name="account-circle"
                        size={35}
                        color={'#000'}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.patientDetails}>
                <Text style={style.patientDetailsText}>
                    Name: Idiotic Gandu
                </Text>
                <Text style={style.patientDetailsText}>Sex: Sissy</Text>
                <Text style={style.patientDetailsText}>Age: 69</Text>
                <Text style={style.patientDetailsText}>Height: 4'2</Text>
                <Text style={style.patientDetailsText}>Weight: 69</Text>
                <Text style={style.patientDetailsText}>
                    Address: Chutiya Galli
                </Text>
            </TouchableOpacity>

            <View style={style.featuresView}>
                <View style={style.featuresHeadingView}>
                    <Text style={style.featuresHeadingText}>
                        FEATURES FOR YOU
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            height: 0.5,
                            backgroundColor: 'black'
                        }}
                    />
                </View>

                <View style={style.featureButtonsView}>
                    <TouchableOpacity style={style.featureOneButton}>
                        <Image
                            style={style.featureIconOneImage}
                            source={require('./../../assets/imgs/pills.png')}
                        />

                        <View style={style.featureTextView}>
                            <Text style={style.featureOneText}>Medicine</Text>
                            <Text style={style.featureOneText}>Dispenser</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.featureTwoButton}>
                        <Image
                            style={style.featureIconTwoImage}
                            source={require('./../../assets/imgs/camera.png')}
                        />
                        <View style={style.featureTextView}>
                            <Text style={style.featureTwoText}>Live</Text>
                            <Text style={style.featureTwoText}>Feed</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.featuresView}>
                <View style={style.featuresHeadingView}>
                    <Text style={style.featuresHeadingText}>NOTIFICATIONS</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 0.5,
                            backgroundColor: 'black'
                        }}
                    />
                </View>

                {events.length ? (
                    events.length < 4 ? (
                        <FlatList data={events} renderItem={NotificationCard} />
                    ) : (
                        <View>
                            <NotificationCard event={events[0]} />
                            <NotificationCard event={events[1]} />
                            <NotificationCard event={events[2]} />
                            <NotificationCard event={events[3]} />
                        </View>
                    )
                ) : (
                    <Text>No notifications available</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fafafd',
        paddingHorizontal: RPW(5),
        width: RPW(100)
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    patientNameText: {
        marginRight: RPW(1),
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    patientDetails: {
        marginTop: RPH(2),
        paddingHorizontal: RPW(5),
        height: RPH(24),
        borderRadius: 15,
        backgroundColor: '#B1B2FF',
        elevation: 15,
        shadowColor: '#000',
        justifyContent: 'center'
    },
    patientDetailsText: {
        marginBottom: RPH(1),
        color: '#000',
        fontSize: 15,
        fontWeight: '300'
    },
    featuresView: {
        marginTop: RPH(2)
    },
    featuresHeadingView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    featuresHeadingText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '400',
        marginRight: RPW(2)
    },
    featureButtonsView: {
        marginTop: RPH(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    featureOneButton: {
        flexDirection: 'row',
        width: RPW(44),
        height: '100%',
        marginRight: RPW(2),
        paddingHorizontal: RPW(2),
        paddingVertical: RPH(2),
        borderRadius: 15,
        backgroundColor: '#fbeaf4',
        justifyContent: 'center'
    },
    featureIconOneImage: {
        width: 60,
        height: 62,
        marginRight: '5%'
    },
    featureTextView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    featureOneText: {
        color: '#dc3289',
        fontSize: 15,
        fontWeight: '900'
    },
    featureTwoButton: {
        flexDirection: 'row',
        width: RPW(44),
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 15,
        backgroundColor: '#ecf7f3',
        justifyContent: 'center'
    },
    featureIconTwoImage: {
        width: 60,
        height: 49,
        marginRight: '10%'
    },
    featureTwoText: {
        color: '#1ea675',
        fontSize: 15,
        fontWeight: '900'
    }
});

export default HomeGuardianScreen;
