import React from 'react';

import { Container } from './styles';
import { Header } from '@modules/shared/components/Header';
import { useRoute } from '@react-navigation/native';

export function UpdateChecklistScreen(){
  const { id } = useRoute().params;

  console.log(id);
  

  return (
    <Container>
        <Header showBackButton title="Atualizar checklist" showHeaderLogo={false} />
        
    </Container>
  );
}