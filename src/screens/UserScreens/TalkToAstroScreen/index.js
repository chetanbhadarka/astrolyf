import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SegmentedControl from "rn-segmented-control";

import { CustomHeader } from '../../../components'
import { Icons } from '../../../assets'

export default function index(props) {

    const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const favData = ['A', 'B']
    const [tabIndex, setTabIndex] = useState(0)

    renderItems = ({ item, index }) => {
        return (
            <View
                key={index}
                style={{
                    flexDirection: "row",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                    backgroundColor: '#FFF',
                    elevation: 5,
                }}>
                <Image source={{ uri: 'https://i.pravatar.cc/50' }} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10, }} />
                <View style={{ flex: 1 }}>
                    <Text>Mr. XYZ</Text>
                    <Text>English/Hindi</Text>
                    <Text>Exp: 5 Years</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate('UserCallAstroScreen')}>
                        <Image source={Icons.PhoneCall} style={{ height: 34, width: 34 }} />
                    </TouchableOpacity>
                    <Text>Rs 20/min</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1 }}>

                {/* Search Bar */}
                <View style={{ alignItems: 'center', marginVertical: 16, flexDirection: 'row' }}>
                    <Entypo name='chevron-left' size={34} color='#E1B87A' onPress={() => props.navigation.goBack()} style={{ marginHorizontal: 10 }} />
                    <View style={{ backgroundColor: '#FFF', height: 40, borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between', elevation: 5, width: '80%' }}>
                        <TextInput placeholder='Search Astrologer' />
                        <FontAwesome name='search' color='#000' size={20} />
                    </View>
                </View>

                <SegmentedControl
                    tabs={["All", "Favourite"]}
                    containerStyle={{
                        alignSelf: 'center',
                    }}
                    textStyle={{
                        fontSize: 16,
                    }}
                    paddingVertical={8}
                    activeTextColor='#00F'
                    currentIndex={tabIndex}
                    onChange={setTabIndex}
                />

                {/* Render View */}
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={tabIndex === 0 ? data : favData}
                        extraData={tabIndex === 0 ? data : favData}
                        contentContainerStyle={{
                            padding: 20,
                        }}
                        renderItem={({ item, index }) => renderItems({ item, index })}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{ marginVertical: 6 }} />
                            )
                        }}
                    />
                </View>

            </View>
        </View>
    )
}