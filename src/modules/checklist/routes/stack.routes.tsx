import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateChecklistScreen } from '../screens/CreateChecklistScreen';
import { UpdateChecklistScreen } from '../screens/UpdateChecklistScreen';
import { DetailsChecklistScreen } from '../screens/DetailsChecklistScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function ChecklistStack(){
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name="createChecklist" component={CreateChecklistScreen} />
      <Screen name="updateChecklist" component={UpdateChecklistScreen} />
      <Screen name="detailsChecklist" component={DetailsChecklistScreen} />
    </Navigator>
  );
}