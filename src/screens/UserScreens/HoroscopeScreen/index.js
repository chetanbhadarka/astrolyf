import React from 'react';
import { View, Text, Image } from 'react-native';

import { CustomHeader } from '../../../components'
import { Images } from '../../../assets'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={Images.AriesImage} style={{}} />
                <Text style={{ position: 'absolute', top: 50, opacity: 0.2, fontSize: 24, fontWeight: '700' }}>Horoscope Api Screen</Text>
            </View>
        </View>
    )
}