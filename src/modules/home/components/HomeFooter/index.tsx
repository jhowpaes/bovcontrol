import React from 'react';

import { Button } from '@modules/shared/components/Button';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export function HomeFooter(){
  const navigation = useNavigation();

  return (
    <Container>
      <Button
        label='Adicionar'
        onPress={() => navigation.navigate('mainChecklist', { screen: 'createAndUpdateChecklist' })}
      />
    </Container>
  );
}