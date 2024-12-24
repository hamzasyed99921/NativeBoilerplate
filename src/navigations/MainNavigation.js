import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator  screenOptions={{
              headerStyle: {
                backgroundColor: '#39D98A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
