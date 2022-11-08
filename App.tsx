import React, {type PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Maps from './src/components/Maps';
import Home from './src/components/Home';
import MyTabs from './src/components/Tab';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
