import React from 'react';

import {
  TextInputProps,
} from 'react-native';

import { Container, InputContent, InputLabel } from './styles';

type Props = TextInputProps & {
  label: string;
  group?: boolean;
}

export function Input({ 
  label,
  group = false,
  ...rest
}: Props){

  return (
    <Container group={group}>
      <InputLabel>{label}</InputLabel>
      <InputContent group={group} {...rest} />
    </Container>
  );
}