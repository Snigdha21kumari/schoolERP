import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {ScreenStackHeaderRightView} from 'react-native-screens';

export default function CustomDrawer(props) {
  return (
    <View style={{backgroundColor: '#FE3B56', flex: 1}}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => props.navigation.closeDrawer()}>
        <Text
          style={{
            fontSize: 30,
            color: '#FE3B56',
            textAlign: 'center',
            fontWeight: '600',
          }}>
          x
        </Text>
      </TouchableOpacity>
      <View style={styles.imgCircle}>
        <Image
          source={require('../assets/images/notes.png')}
          style={{height: 20, width: 20}}
        />
      </View>
      <Text style={styles.name}>Snigdha Kumari</Text>
      <Text style={styles.stud}>Stud_ID</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>9411004494</Text>
        <Text style={styles.text}>Class: XII-B</Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 50,
          backgroundColor: '#FFFFFF',
          paddingVertical: 10,
          maxWidth: '50%',
          marginLeft: 60,
          marginTop: 40,
          marginBottom: 15,
        }}>
        <Text style={{textAlign: 'center', color: '#FE3B56'}}>
          View Profile
        </Text>
      </TouchableOpacity>
      <View style={{paddingVertical: 2, backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#FE3B56',
            borderColor: 'white',
            marginVertical: 5,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/graduation-hat.png')}
            style={{margin: 10}}></Image>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '600',
              margin: 10,
            }}>
            About School
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#FE3B56',
            borderColor: 'white',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/phone-call.png')}
            style={{margin: 10}}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '600',
              margin: 10,
            }}>
            Contact Us
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#FE3B56',
            borderColor: 'white',
            marginVertical: 5,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/insurance.png')}
            style={{margin: 10}}></Image>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '600',
              margin: 10,
            }}>
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#FE3B56',
            borderColor: 'white',
            marginVertical: 2,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/settings.png')}
            style={{margin: 10}}></Image>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '600',
              margin: 10,
            }}>
            Settings
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', flex: 0.999}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#AEAAAA',
            marginTop: 223,

            padding: 15,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/enter.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={{color: '#FFFFFF', fontSize: 14, paddingHorizontal: 30}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    marginVertical: 39,
    marginHorizontal: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
  },
  stud: {
    color: '#BBBBBB',
    fontSize: 14,
    textAlign: 'center',
  },
  imgCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
