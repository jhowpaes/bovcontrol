import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { Header } from '@modules/shared/components/Header';
import { Button } from '@modules/shared/components/Button';
import { InputForm } from '@modules/shared/components/Form/InputForm';
import { ChecklistTypeButton } from '@modules/shared/components/Form/ChecklistTypeButton';
import { ChecklistTypes } from '@modules/shared/models/ChecklistTypes';
import { Checkbox } from '@modules/shared/components/Form/Checkbox';
import { CheckListProps } from '@modules/checklist/models/CheckListProps';
import { ChecklistDetails } from '@modules/checklist/components/ChecklistDetails';
import { getRealm } from '@core/database/realm';

import { Container, Form, ChecklistTypeGroup, InputGroup } from './styles';
import { CreateChecklistDatabase, UpdateChecklistDatabase } from '@modules/checklist/services/database';

type ParamList = {
  checklist?: CheckListProps;
};

type FormProps = {
  farmerName: string,
  farmName: string;
  farmCity: string;
  supervisor: string;
  amountOfMilkProduced: string;
  numberOfCowsHead: string;
};

export function CreateAndUpdateChecklistScreen(){
  const checklist = useRoute<RouteProp<ParamList>>()?.params?.checklist;
  const navigation = useNavigation();
  const [typeButtonSelected, setTypeButtonSelected] = useState<ChecklistTypes>(checklist?.type);
  const [checked, setChecked] = useState<boolean>(
    checklist?.had_supervision !== undefined ? checklist?.had_supervision :false
  );
  const [updateChecklist, setUpdateChecklist] = useState<boolean>(false);
  console.log(checklist);
  

  const pageTitle = checklist ? 'Atualizar Checklist' : 'Novo Checklist';

  const { control, handleSubmit } = useForm();

  function handleChecklistType(type : ChecklistTypes) {
    setTypeButtonSelected(type);
  }

  async function handleChecklist(form: FormProps) {
    const realm = await getRealm();
    try {
      const formData: CheckListProps = {
        _id: uuid.v4().toString(),
        type: typeButtonSelected,
        amount_of_milk_produced: form.amountOfMilkProduced,
        number_of_cows_head: form.numberOfCowsHead,
        had_supervision: checked,
        farmer: {
          name: form.farmName,
          city: form.farmCity
        },
        from: {
          name: form.supervisor
        },
        to: {
          name: form.farmerName
        },
        created_at: new Date(),
        updated_at: new Date(),
      };

      if (!checklist) {
        const data = { "checklists": [formData]};

        CreateChecklistDatabase(realm, formData);
      }

      if (checklist) {
        const fieldsToIgnore = ['_id', 'created_at'];
        UpdateChecklistDatabase(realm, checklist._id, formData, fieldsToIgnore);
      }
    } catch (error) {
      Alert.alert('Ops...', 'Tivemos um erro na tentativa de criar um checklist.')
      console.log(error);
    } finally {
      navigation.goBack();
      realm.close();
    }
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