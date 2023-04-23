import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type: 'BPA' | 'Antibiótico' | 'BPF';
  isActive: boolean;
};

export function ChecklistTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props){

  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Title isActive={isActive} >
        {title}
      </Title>
    </Container>
  );
}