import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@modules/home/screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeStack(){
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='home' component={HomeScreen} />
    </Navigator>
  );
}