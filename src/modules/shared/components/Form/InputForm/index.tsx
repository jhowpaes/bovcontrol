import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

type Props = TextInputProps & {
  control: Control;
  name: string;
  label: string;
  group?: boolean;
}

export function InputForm({
  control,
  name,
  label,
  group = false,
  ...rest
}: Props){
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value }}) => (
        <Input
          label={label}
          group={group}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  );
}