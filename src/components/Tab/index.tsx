import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Maps from '../Maps';
import Home from '../Home';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        }}>
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesomeIcon
                icon={faLocationDot}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        />
      </Tab.Navigator>
    );
};

export default MyTabs;
