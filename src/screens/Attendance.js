import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {NavigationContainer} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

export default function Attendance({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    let showSearchBool = showSearch;
    showSearchBool = !showSearchBool;
    setShowSearch(showSearchBool);
  };

  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <Card style={{width: '100%', borderRadius: 25, height: 250}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <Image
            source={require('../assets/images/icon.png')}
            style={{margin: 10}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,

                alignItems: 'center',
                elevation: 5,
              }}>
              {showSearch ? (
                <TextInput
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 5,
                    backgroundColor: '#00000029',
                    borderRadius: 25,
                    width: 100,
                    height: 40,
                  }}
                />
              ) : null}
              <TouchableOpacity
                onPress={handleSearch}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={{height: 25, width: 20, padding: 10}}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require('../assets/images/bell.png')}
              style={{height: 30, width: 30, margin: 10}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 4,
              borderColor: '#FE3B56',
              marginTop: 20,
              elevation: 10,
            }}></View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text
              style={{
                fontSize: 24,
                color: '#343434',
                fontWeight: 'bold',
                fontFamily: 'Cochin',
              }}>
              Joe Milind
            </Text>
            <Text style={{fontSize: 14, color: '#9F9F9F'}}>Stud_ID</Text>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#565555',
                  fontWeight: '400',
                  borderColor: '#F9F9F9',
                  padding: 25,
                }}>
                Class:XII-B
              </Text>
              <Text
                style={{
                  color: '#565555',
                  padding: 25,
                  fontWeight: '400',
                }}>
                Roll No:52
              </Text>
            </View>
          </View>
        </View>
      </Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginRight: 10,
          marginLeft: 10,
        }}>
        <View
          style={{
            marginTop: 15,
            height: 80,
            width: 110,
            backgroundColor: '#43C154',
            borderBottomEndRadius: 25,
            borderBottomLeftRadius: 25,
          }}>
          <Text style={styles.present}>PRESENT</Text>
          <Text style={styles.numbers}>92</Text>
        </View>
        <View
          style={{
            marginTop: 15,
            height: 80,
            width: 110,
            backgroundColor: '#28B4BE',
            borderBottomEndRadius: 25,
            borderBottomLeftRadius: 25,
          }}>
          <Text style={styles.present}>LEAVE</Text>
          <Text style={styles.numbers}>15</Text>
        </View>
        <View
          style={{
            marginTop: 15,
            height: 80,
            width: 110,
            backgroundColor: '#C23232',
            borderBottomEndRadius: 25,
            borderBottomLeftRadius: 25,
          }}>
          <Text style={styles.present}>ABSENT</Text>
          <Text style={styles.numbers}>04</Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => setModalVisible(!modalVisible)}>
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#43C154',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                Present
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#C23232',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                Absent
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#EFDA21',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                Late
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#FC3485',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                On Bank
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#28B4BE',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                On Leave
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#C406A4',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                On Task
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  backgroundColor: '#2374FF',
                  marginBottom: 10,
                }}
              />
              <Text style={{padding: 10, fontSize: 18, color: '#343434'}}>
                Restricted/ Gazette Holiday
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Calendar
        style={{
          marginTop: 8,
          padding: 10,
          height: 400,
        }}
        markedDates={{
          '2021-03-16': {
            selected: true,
            selectedColor: '#43C154',
          },
        }}
      />
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 100 / 2,
          borderWidth: 10,
          borderColor: '#FE3B56',
          alignSelf: 'flex-end',
          bottom: 1,
        }}
        onPress={() => setModalVisible(true)}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: '#FE3B56',
            fontWeight: 'bold',
          }}>
          i
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  present: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    padding: 5,
  },
  numbers: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 500,
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'right',
  },
  circle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
