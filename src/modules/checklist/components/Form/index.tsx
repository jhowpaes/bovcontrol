import React from 'react';

import { Button } from '@modules/shared/components/Button';

import { Container, ChecklistTypeGroup, InputGroup  } from './styles';
import { ChecklistTypeButton } from '@modules/shared/components/Form/ChecklistTypeButton';
import { InputForm } from '@modules/shared/components/Form/InputForm';
import { Checkbox } from '@modules/shared/components/Form/Checkbox';
import { ChecklistTypes } from '@modules/shared/types/ChecklistTypes';
import { Control } from 'react-hook-form';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';

interface FormProps {
  typeButtonSelected: ChecklistTypes;
  handleChecklistType: (value: ChecklistTypes) => void;
  onPress: () => void;
  control: Control;
  checklist?: IChecklist,
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export function Form({
  typeButtonSelected,
  handleChecklistType,
  onPress,
  control,
  checklist,
  checked,
  setChecked,
}: FormProps){

  return (
    <Container>
      <ChecklistTypeGroup>
        <ChecklistTypeButton
          type='BPA'
          title='BPA'
          onPress={() => handleChecklistType('BPA')}
          isActive={typeButtonSelected === 'BPA'}
        />
        <ChecklistTypeButton
          type='Antibiótico'
          title='Antibiótico'
          onPress={() => handleChecklistType('Antibiótico')}
          isActive={typeButtonSelected === 'Antibiótico'}
        />
        <ChecklistTypeButton
          type='BPF'
          title='BPF'
          onPress={() => handleChecklistType('BPF')}
          isActive={typeButtonSelected === 'BPF'}
        />
      </ChecklistTypeGroup>
      <InputForm
        name="farmerName"
        control={control}
        defaultValue={checklist?.to?.name}
        autoCorrect={false}
        label="Nome do fazendeiro:"
      />
      <InputForm
        name="farmName"
        control={control}
        defaultValue={checklist?.farmer?.name}
        autoCorrect={false}
        label="Nome da fazenda:"
      />
      <InputForm
        name="farmCity"
        control={control}
        defaultValue={checklist?.farmer?.city}
        autoCorrect={false}
        label="Cidade que esta localizada a fazenda:"
      />
      <InputForm
        name="supervisor"
        control={control}
        defaultValue={checklist?.from?.name}
        autoCorrect={false}
        label="Nome do supervisor:"
      />
      <InputGroup>
        <InputForm
          name="amountOfMilkProduced"
          control={control}
          defaultValue={checklist?.amount_of_milk_produced}
          autoCorrect={false}
          inputMode='numeric'
          keyboardType='numeric'
          label="Quantidade de leite:"
          group
        />
        <InputForm
          name="numberOfCowsHead"
          control={control}
          defaultValue={checklist?.number_of_cows_head}
          autoCorrect={false}
          inputMode='numeric'
          keyboardType='numeric'
          label="Cabeça de gado:"
        />
      </InputGroup>
      <Checkbox
        label="Teve supervisão"
        checked={checked}
        onChangeBoolean={setChecked}
      />
      <Button
        label='Criar'
        onPress={onPress}
      />
    </Container>
  );
}