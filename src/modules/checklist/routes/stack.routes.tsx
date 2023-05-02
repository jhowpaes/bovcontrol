import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CreateAndUpdateChecklistScreen } from '../screens/CreateAndUpdateChecklistScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function ChecklistStack(){
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name="createAndUpdateChecklist" component={CreateAndUpdateChecklistScreen} />
    </Navigator>
  );
}