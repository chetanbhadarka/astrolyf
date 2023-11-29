import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OTPTextView from 'react-native-otp-textinput';
import Spinner from 'react-native-spinkit'
import { useDispatch } from 'react-redux'

import { userActions } from '../../redux/actions'

export default function index(props) {

    const dispatch = useDispatch()

    const [SpinnerVisible, setSpinnerVisible] = React.useState(false)
    const [otpText, setOtpText] = React.useState('')
    const [apiOTP, setApiOTP] = React.useState('1234')
    const [uprVerificationMessage, setUprVerificationMessage] = React.useState(false)
    const [subHeaderText, setSubHeaderText] = React.useState("Enter the 4 digit OTP")

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingLeft: 10, marginVertical: 10, alignItems: 'center' }}>
                <Ionicons name='arrow-back' color='#000' size={24} onPress={() => props.navigation.goBack()} style={{ padding: 5, }} />
                <Text
                    style={{ fontSize: 12, fontWeight: '700', textTransform: 'capitalize' }}
                    onPress={() => props.navigation.goBack()}>Edit Phone Number</Text>
            </View>
            <View>
                <View style={{ alignItems: 'center', marginVertical: 50 }}>
                    {!uprVerificationMessage ? (
                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.2)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8, }}>Don't Share Your</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8, }}>OTP</Text>
                        </View>
                    ) : (
                        <Text style={{ fontSize: 24, fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8, }}>Verification Done!</Text>
                    )}
                </View>
                <View style={{ backgroundColor: '#FFF', alignItems: 'center', marginHorizontal: 30, paddingVertical: 30, borderRadius: 10, elevation: 4 }}>
                    <Text style={{ color: subHeaderText === 'Enter the 4 digit OTP' ? '#B49168' : '#FF0A0A', fontWeight: subHeaderText === 'Enter the 4 digit OTP' ? 'normal' : 'bold' }}>{subHeaderText}</Text>
                    <OTPTextView
                        handleTextChange={setOtpText}
                        containerStyle={{ marginVertical: 30 }}
                        textInputStyle={{ borderRadius: 10, borderWidth: 4, borderWidth: 1 }}
                        editable={!SpinnerVisible && !uprVerificationMessage}
                    />
                    {SpinnerVisible ? (
                        <Spinner isVisible={SpinnerVisible} type='ThreeBounce' color='red' />
                    ) : (!uprVerificationMessage ? (
                        < TouchableOpacity
                            activeOpacity={0.7}
                            style={{ alignItems: 'center' }}
                            onPress={() => alert('Resend OTP!!')}
                        >
                            <Text style={{ fontWeight: '700' }}>Didn't get the OTP?</Text>
                            <Text style={{ fontWeight: '700' }}>Resend OTP</Text>
                        </TouchableOpacity>
                    ) : null
                    )}
                    <TouchableOpacity
                        style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 21, width: 200, elevation: 2, alignSelf: 'center', marginTop: 50, alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={0.8}
                        onPress={() => {

                            uprVerificationMessage ?
                                dispatch(userActions.login('jhon', 'abc@123', 'user'))
                                : (otpText.length === 4) ? (
                                    setSpinnerVisible(true),
                                    otpText === apiOTP ?
                                        (
                                            setTimeout(() => {
                                                setSpinnerVisible(false),
                                                    setUprVerificationMessage(true),
                                                    setSubHeaderText("Verified")
                                            }, 3000)
                                        ) : (
                                            setTimeout(() => {
                                                setSpinnerVisible(false),
                                                    setUprVerificationMessage(false),
                                                    setSubHeaderText("Incorrect OTP")
                                            }, 3000)
                                        )
                                ) : null
                        }}
                    >
                        <Text style={{ textTransform: 'capitalize', color: '#FFF', fontSize: 16, fontWeight: '700', letterSpacing: 1 }}>{uprVerificationMessage ? 'Next' : 'Verify'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}