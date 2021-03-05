import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
import {Calendar} from 'react-native-calendars';

export default function calendarData({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    let showSearchBool = showSearch;
    showSearchBool = !showSearchBool;
    setShowSearch(showSearchBool);
  };
  return (
    <ScrollView>
      <Card
        style={{
          width: '100%',
          borderRadius: 25,
          height: 200,
          marginBottom: 20,
        }}>
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
        <View style={{flexDirection: 'row', padding: 10}}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 4,
              borderColor: '#FE3B56',
              marginTop: 5,
            }}></View>
          <View
            style={{
              paddingHorizontal: 40,
              marginTop: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#343434',
                fontWeight: 'bold',
                fontFamily: 'Cochin',
              }}>
              Joe Milind
            </Text>
            <Text style={{fontSize: 14, color: '#9F9F9F', fontWeight: 'bold'}}>
              Stud_ID
            </Text>
          </View>
        </View>
      </Card>
      <Calendar
        markedDates={{
          '2021-03-16': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-01': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-02': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-03': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-04': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-05': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-06': {
            selected: true,
            selectedColor: '#28B4BE',
          },

          '2021-03-08': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-09': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-10': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-11': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-12': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-13': {
            selected: true,
            selectedColor: '#43C154',
          },

          '2021-03-15': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-16': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-17': {
            selected: true,
            selectedColor: '#43C154',
          },
          '2021-03-18': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-19': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-20': {
            selected: true,
            selectedColor: '#28B4BE',
          },

          '2021-03-22': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-23': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-24': {
            selected: true,
            selectedColor: '#C23232',
          },
          '2021-03-25': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-26': {
            selected: true,
            selectedColor: '#C23232',
          },
          '2021-03-27': {
            selected: true,
            selectedColor: '#C23232',
          },

          '2021-03-29': {
            selected: true,
            selectedColor: '#C23232',
          },
          '2021-03-30': {
            selected: true,
            selectedColor: '#28B4BE',
          },
          '2021-03-31': {
            selected: true,
            selectedColor: '#28B4BE',
          },
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Text style={styles.date}>06</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Sat
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Text style={styles.date}>12</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Mon
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Text style={styles.date}>15</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Mon
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Text style={styles.date}>18</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Mon
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Medical Emergency r sit amet,
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                consectetur adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Text style={styles.date}>19</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Mon
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Medical Emergency r sit amet,
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                consectetur adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.content}>
          <Text style={styles.date}>06</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Mon
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.content}>
          <Text style={styles.date}>06</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Sat
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.content}>
          <Text style={styles.date}>06</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Sat
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.content}>
          <Text style={styles.date}>06</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Sat
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontSize: 12, color: '#343434'}}>
            Lorem ipsum dolor sit amet, consectetur
            <Text />
            <View>
              <Text style={{fontSize: 12, color: '#343434'}}>
                adipiscing elit, sed do e
              </Text>
            </View>
          </Text>
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
                  alignSelf: 'flex-end',
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
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 100 / 2,
          borderWidth: 10,
          borderColor: '#FE3B56',
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 0,
          right: 30,
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    left: 10,
    backgroundColor: '#28B4BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: 15,
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 1,
    marginRight: 15,
    borderBottomColor: '#00000021',
  },
  date: {color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'},
  content: {
    width: 60,
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    left: 10,
    backgroundColor: '#C23232',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 550,
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
});
