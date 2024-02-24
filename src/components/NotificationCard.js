import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationCard = (event) => {
    // const events = () => {
    //     console.log(event);
    // };
    // React.useEffect(() => {
    //     events();
    // }, []);
    return (
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
                        {event?.event?.title}
                    </Text>
                    <Text style={{ color: '#000000' }}>
                        {moment(event?.event?.createdAt).format(
                            'Do MMM, hh:mm'
                        )}
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
    );
};

const style = StyleSheet.create({
    notificationView: {
        marginVertical: 9,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        width: '100%',
        height: '16%',
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

export default NotificationCard;
