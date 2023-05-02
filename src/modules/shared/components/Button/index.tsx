import React from 'react';

import { 
  TouchableOpacityProps,
} from 'react-native';
import { ButtonTypeStyleProps } from '@modules/shared/models/ButtonTypeStyleProps';

import { Container, LabelButton } from './styles';

type Props = TouchableOpacityProps & {
  label: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ label, type= 'PRIMARY', ...rest }: Props){
  return (
    <Container
      type={type}
      {...rest}
    >
      <LabelButton>{label}</LabelButton>
    </Container>
  );
}