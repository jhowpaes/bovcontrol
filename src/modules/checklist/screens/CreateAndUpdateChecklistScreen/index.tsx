import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Header } from '@modules/shared/components/Header';
import { Button } from '@modules/shared/components/Button';
import { InputForm } from '@modules/shared/components/Form/InputForm';
import { ChecklistTypeButton } from '@modules/shared/components/Form/ChecklistTypeButton';
import { ChecklistTypes } from '@modules/shared/models/ChecklistTypes';
import { Checkbox } from '@modules/shared/components/Form/Checkbox';
import { CheckListProps } from '@modules/checklist/models/CheckListProps';
import { ChecklistDetails } from '@modules/checklist/components/ChecklistDetails';

import { Container, Form, ChecklistTypeGroup, InputGroup } from './styles';

type ParamList = {
  checklist: CheckListProps;
};

type FormProps = {
  farmerName: string,
  farmName: string;
  farmCity: string;
  supervisor: string;
  amountOfMilkProduced: number;
  numberOfCowsHead: number;
};

export function CreateAndUpdateChecklistScreen(){
  const checklist = useRoute<RouteProp<ParamList>>().params;
  const [typeButtonSelected, setTypeButtonSelected] = useState<ChecklistTypes>(checklist?.type);
  const [checked, setChecked] = useState<boolean>(checklist?.had_supervision);
  const [updateChecklist, setUpdateChecklist] = useState<boolean>(false);

  const pageTitle = checklist ? 'Atualizar Checklist' : 'Novo Checklist';

  const { control, handleSubmit } = useForm();

  function handleChecklistType(type : ChecklistTypes) {
    setTypeButtonSelected(type);
  }

  function handleChecklist(form: FormProps) {
    const data = { "checklists": [{
      "type": typeButtonSelected,
      "amount_of_milk_produced": form.amountOfMilkProduced,
      "number_of_cows_head": form.numberOfCowsHead,
      "had_supervision": checked,
      "farmer": {
        "name": form.farmName,
        "city": form.farmCity
      },
      "from": {
        "name": form.supervisor
      },
      "to": {
        "name": form.farmerName
      },
      "created_at": new Date(),
      "updated_at": new Date()
    }]};
    console.log(data);
  }

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <Container>
      <Header showBackButton showHeaderLogo={false} title={checklist && updateChecklist ? pageTitle : 'Detalhe do checklist'} />
      {!checklist || updateChecklist ? <Form>
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
          onChangeBoolean={handleCheck}
        />
        <Button
          label='Criar'
          onPress={handleSubmit(handleChecklist)}
        />
      </Form> : (
        <ChecklistDetails 
          checklist={checklist}
          updateChecklist={updateChecklist}
          setUpdateChecklist={() => setUpdateChecklist(!updateChecklist)}
        />
      )} 
    </Container>
  );
}