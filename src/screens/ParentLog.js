import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default class ParentLog extends Component {
  constructor() {
    super();
    this.state = {
      activeStatus: 1,
    };
  }
  render() {
    return (
      <View>
        <View>
          <Card style={{width: '100%', alignItems: 'center', borderRadius: 25}}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.images}
            />
            <Text style={{fontSize: 20, fontWeight: '400', marginBottom: 20}}>
              LOGIN
            </Text>
          </Card>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 40,
          }}>
          <TouchableOpacity
            onPress={() => this.setState({activeStatus: 1})}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              borderColor: '#EBEBEB',
              backgroundColor:
                this.state.activeStatus === 1 ? '#FE3B56' : 'grey',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 16, color: '#FFFFFF'}}>Parent's Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({activeStatus: 2})}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor:
                this.state.activeStatus === 2 ? '#FE3B56' : 'grey',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 16, color: '#FFFFFF'}}>
              Student's Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 15,
            marginTop: 10,
          }}>
          <Card style={{marginVertical: 10, borderRadius: 40}}>
            <TextInput
              style={{fontSize: 14, padding: 20}}
              placeholder={"Mobile Number / Parent's ID"}
            />
          </Card>
          <Card style={{marginVertical: 10, borderRadius: 40, marginTop: 10}}>
            <TextInput
              style={{fontSize: 14, padding: 20}}
              placeholder={'Password'}
            />
          </Card>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
              }}
              onPress={() => this.props.navigation.navigate('Dashboard')}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#9F9F9F',
              alignSelf: 'flex-end',
              marginRight: 30,
            }}>
            Need help?
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  images: {
    width: 350,
    height: 220,
    backgroundColor: '#F9F9F9',
    marginTop: 50,
  },

  first: {
    borderWidth: 1,
    fontSize: 16,
    padding: 15,
    borderRadius: 40,
    backgroundColor: '#FE3B56',
    borderColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#FE3B56',
    borderWidth: 1,
    padding: 20,
    borderRadius: 40,
    borderColor: '#F9F9F9',
    alignItems: 'center',
    margin: 15,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'pink',
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
