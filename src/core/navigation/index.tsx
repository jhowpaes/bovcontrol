import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { MainStack } from './stack.routes';

export function MainNavigation(){
  const { COLORS } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLUE_100,
      }}
    >  
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}