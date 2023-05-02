import React from 'react';

import { Container, EmptyMessage } from './styles';

type Props = {
  message: string;
};

export function ListEmpty({ message } : Props){
  return (
    <Container>
        <EmptyMessage>{message}</EmptyMessage>
    </Container>
  );
}