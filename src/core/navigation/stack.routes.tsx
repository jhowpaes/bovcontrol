import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeRoutes } from '@modules/home/routes';
import { ChecklistRoutes } from '@modules/checklist/routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function MainStack(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="mainHome" component={HomeRoutes} />
      <Screen name="mainChecklist" component={ChecklistRoutes} />
    </Navigator>
  );
}