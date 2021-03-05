import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default class Flash extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ParentLog')}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 350, height: 200}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
