import React from 'react'
import { View, Text, Image } from 'react-native'

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={{ height: 150, width: 150, borderRadius: 75, marginVertical: 50, backgroundColor: "#FFF" }} />
                <Text style={{ textAlign: "center", color: '#E1B87A' }}>You Will receive the call{'\n'}once astrologer is available</Text>
                <Text style={{ marginTop: 200, color: '#61646A' }}>Your request has{'\n'}been submitted ✓</Text>
            </View>
        </View>
    )
}