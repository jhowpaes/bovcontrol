import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@modules/shared/components/Header';
import { ChecklistTypes } from '@modules/shared/types/ChecklistTypes';
import { getRealm } from '@core/database/realm';

import { Container} from './styles';
import { insertObject } from '@core/database/services/realmDatabaseInsert';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';
import { useInternet } from '@core/context/InternetContext';
import { createChecklist } from '@modules/checklist/services/ChecklistService';
import { Form } from '@modules/checklist/components/Form';

export function CreateChecklistScreen(){
  const navigation = useNavigation();
  const { isInternetActive } = useInternet();
  const [typeButtonSelected, setTypeButtonSelected] = useState<ChecklistTypes>('BPA');
  const [checked, setChecked] = useState<boolean>(false);

  const { control, handleSubmit } = useForm();

  function handleChecklistType(type : ChecklistTypes) {
    setTypeButtonSelected(type);
  }

  async function handleChecklist(form) {
    const realm = await getRealm();
    try {
      const formData: IChecklist = {
        _id: `${Math.floor(Math.random() * 1000) + 1}` ,
        type: typeButtonSelected,
        amount_of_milk_produced: Number(form.amountOfMilkProduced),
        number_of_cows_head: Number(form.numberOfCowsHead),
        had_supervision: checked,
        farmer: {
          name: form.farmName,
          city: form.farmCity,
        },
        from: {
          name: form.supervisor,
        },
        to: {
          name: form.farmerName,
        },
        location:{
					latitude:-23.5,
					longitude:-46.6
			 },
        created_at: new Date(),
        updated_at: new Date(),
      };
      
      const apiSyncChecklistCreated = await createChecklist(formData);

      if (!apiSyncChecklistCreated && !isInternetActive) {
        insertObject(realm, 'Checklists', { ...formData, synced: false });
        return;
      }
      insertObject(realm, 'Checklists', formData);
    
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
      <Header showBackButton showHeaderLogo={false} title="Adicionar Checklist" />
      <Form
        control={control}
        handleChecklistType={handleChecklistType}
        typeButtonSelected={typeButtonSelected}
        onPress={handleSubmit(handleChecklist)}
        setChecked={handleCheck}
        checked={checked}
      />
    </Container>
  );
}