import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Dashboard({navigation}) {
  return (
    <View>
      <Card style={{height: 150, width: '100%', borderRadius: 25}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 30,
            marginHorizontal: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/bell.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, color: '#FE3B56', fontWeight: '500'}}>
            Dashboard
          </Text>
        </View>
      </Card>
      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Attendance')}>
          <View style={styles.box}>
            <Text style={styles.text}>Attendance</Text>
            <Image
              source={require('../assets/images/checking-attendance.png')}
              style={{
                width: 40,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        {/* 2 */}
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('calendarData')}>
          <View style={styles.box}>
            <Text style={styles.text}>Calendar</Text>
            <Image
              source={require('../assets/images/calendar.png')}
              style={{
                width: 60,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </TouchableOpacity>
        {/* 3 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Fee Structure</Text>
            <Image
              source={require('../assets/images/credit-card.png')}
              style={{
                width: 70,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </View>
      {/* 4 */}
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Circulars</Text>
            <Image
              source={require('../assets/images/newspaper.png')}
              style={{
                width: 60,
                height: 60,
                marginTop: 10,
              }}
            />
          </View>
        </View>
        {/* 5 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Marks</Text>
            <Image
              source={require('../assets/images/test.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
        {/* 6 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Assignments</Text>
            <Image
              source={require('../assets/images/pile-of-paper.png')}
              style={{
                width: 60,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </View>
      {/* 7 */}
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Daily Board</Text>
            <Image
              source={require('../assets/images/blackboard.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
        {/* 8 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Time-Table</Text>
            <Image
              source={require('../assets/images/schedule.png')}
              style={{
                width: 60,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
        {/* 9 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Leave Management</Text>
            <Image
              source={require('../assets/images/enter.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </View>
      {/* 10 */}
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Wins & Rewards</Text>
            <Image
              source={require('../assets/images/trophy.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
        {/* 5 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>News & Events</Text>
            <Image
              source={require('../assets/images/notes.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
              }}
            />
          </View>
        </View>
        {/* 6 */}
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Code & Conduct</Text>
            <Image
              source={require('../assets/images/amonestation.png')}
              style={{
                width: 60,
                height: 50,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </View>
      <Card
        style={{
          height: 90,
          width: '100%',
          borderRadius: 15,
          marginTop: 40,
          justifyContent: 'center',
          shadowOpacity: 9,
        }}>
        <Text
          style={{
            color: 'hsla(0, 0%, 62%, 1)',
            textAlign: 'center',
          }}>
          urbanHat Acedemics
        </Text>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 93,
    height: 107,
    backgroundColor: '#FE3B56',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    alignContent: 'space-between',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
  },
  text: {color: 'hsla(0, 0%, 100%, 1)', fontSize: 12, textAlign: 'center'},
});
