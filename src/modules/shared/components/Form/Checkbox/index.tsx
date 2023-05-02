import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Check } from 'phosphor-react-native';

import { Container, CheckLabel, CheckedArea } from './styles';

type Props = TouchableOpacityProps & {
  label: string;
  checked: boolean;
  onChangeBoolean: (value: boolean) => void;
};

export function Checkbox({ checked, label, onChangeBoolean, ...rest }: Props){
  const { COLORS } = useTheme();

  return (
    <Container>
      <CheckLabel>{label}</CheckLabel>
      <CheckedArea
        checked={checked}
        onPress={() => onChangeBoolean(!checked)}
        {...rest}
      >
        {checked && <Check size={35} color={COLORS.GREEN_600} />}
      </CheckedArea>
    </Container>
  );
}