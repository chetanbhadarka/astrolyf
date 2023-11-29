import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {CustomHeader} from '../../../components';

export default function index(props) {
  console.log('PROPS', props.route.params.link);
  return (
    <View style={{flex: 1}}>
      <CustomHeader {...props} />

      <WebView source={{uri: props.route.params.link}} />
    </View>
  );
}
