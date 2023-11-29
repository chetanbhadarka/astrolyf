import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ position: 'absolute', top: 50, opacity: 0.2, fontSize: 24, fontWeight: '700' }}>Kundali Api Screen</Text>
                <View style={{ backgroundColor: '#6EC1CB', height: 100, width: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Ionicons name='document-text-outline' color='#FFF' size={50} />
                </View>
            </View>
        </View>
    )
}