import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>
            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <ScrollView
                style={{ paddingHorizontal: 26 }}
                contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginHorizontal: 4 }}>
                    <Text style={{ color: '#060E25', fontWeight: '700', fontSize: 12, letterSpacing: 0.50 }}>Your Wallet</Text>

                    <Text style={{ color: '#000', fontSize: 22, fontWeight: '700', marginTop: 10, }}>Rs 6,800</Text>
                </View>

                <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 4,
                    borderRadius: 10,
                    backgroundColor: "#FFF",
                    elevation: 4,
                    marginTop: 20,
                }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: '#224A56', marginBottom: 5, }}>Last Paid:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#595959' }}>ABC</Text>
                        <Text style={{ color: '#595959' }}>Rs 500/-</Text>
                    </View>
                    <Text style={{ color: "#224A56", fontSize: 14, fontWeight: '700', alignSelf: 'center', marginTop: 20, }}>View More</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginTop: 20,
                    marginHorizontal: 4,
                    backgroundColor: "#FFF",
                    elevation: 4,
                }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Credit Card</Text>
                    <FontAwesome name='plus' color='#000' size={20} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginTop: 20,
                    marginHorizontal: 4,
                    backgroundColor: "#FFF",
                    elevation: 4,
                }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Debit Card</Text>
                    <FontAwesome name='plus' color='#000' size={20} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginTop: 20,
                    marginHorizontal: 4,
                    backgroundColor: "#FFF",
                    elevation: 4,
                }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Online Banking</Text>
                    <FontAwesome name='plus' color='#000' size={20} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginTop: 20,
                    marginHorizontal: 4,
                    backgroundColor: "#FFF",
                    elevation: 4,
                }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>UPI Payment</Text>
                    <FontAwesome name='plus' color='#000' size={20} />
                </View>

            </ScrollView>
        </View>
    )
}