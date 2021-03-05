import React from 'react';
import {
  Flash,
  ParentLog,
  Dashboard,
  Attendance,
  calendarData,
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components';
const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <drawer.Screen name="Dashboard" component={Dashboard} />
    </drawer.Navigator>
  );
}

const Navigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flash"
        component={Flash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ParentLog"
        component={ParentLog}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="calendarData"
        component={calendarData}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
