import React from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RPH, RPW } from '../utils/dimensions';

const NotificationScreen = ({ route, navigation }) => {
    const { event } = route.params;

    return (
        <SafeAreaView style={style.bodyOne}>
            <StatusBar backgroundColor="#e8504f" barStyle="dark-content" />

            <View style={style.headerView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <MaterialIcons
                        name="chevron-left"
                        size={35}
                        color={'#fff'}
                    />
                </TouchableOpacity>

                <Text style={style.headerText}>{event?.title}</Text>
            </View>

            <View style={style.bodyTwo}>
                <Image
                    style={style.image}
                    source={{
                        uri: 'http://res.cloudinary.com/sihblackwing/raw/upload/v1702315563/safesage/fall-detection/65770ff58e2e4e0a51683763/file-1702315555612-v-fall.jpg'
                    }}
                />
                <View style={style.descriptonView}>
                    <Text style={style.descriptionText}>
                        {event?.description}
                    </Text>
                </View>
                <TouchableOpacity style={style.sosButton}>
                    <MaterialIcons name="sos" size={35} color={'#fff'} />
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
        paddingVertical: RPH(3),
        paddingHorizontal: RPW(5)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e8504f',
        paddingVertical: RPH(2),
        paddingHorizontal: 10
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: '2%'
    },
    image: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    descriptonView: {
        backgroundColor: '#e8504f',
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15
    },
    descriptionText: {
        color: '#fff',
        marginHorizontal: 15,
        marginVertical: 15
    },
    sosButton: {
        backgroundColor: '#d3242b',
        position: 'absolute',
        top: '150%',
        left: '90%',
        padding: 15,
        borderRadius: 50
    }
});

export default NotificationScreen;
