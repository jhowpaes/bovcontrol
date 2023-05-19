import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styles';
import { Form } from '@modules/checklist/components/Form';
import { ChecklistTypes } from '@modules/shared/types/ChecklistTypes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';
import { Header } from '@modules/shared/components/Header';
import { useInternet } from '@core/context/InternetContext';
import { updateChecklist } from '@modules/checklist/services/ChecklistService';
import { updateObject } from '@core/database/services/realmDatabaseUpdate';
import { getRealm } from '@core/database/realm';

type ParamList = {
  checklist: IChecklist;
};

export function UpdateChecklistScreen(){
  const { isInternetActive } = useInternet();
  const checklist = useRoute<RouteProp<ParamList>>()?.params?.checklist;
  const [typeButtonSelected, setTypeButtonSelected] = useState<ChecklistTypes>(checklist?.type);
  const [checked, setChecked] = useState<boolean>(
    checklist?.had_supervision !== undefined ? checklist?.had_supervision :false
  );

  const {
    control,
    handleSubmit,
  } = useForm();

  async function handleChecklist(form) {
    const realm = await getRealm();
    const apiSyncUpdate = await updateChecklist(checklist._id, form);

    if (!apiSyncUpdate && !isInternetActive) {
      updateObject(realm, checklist._id, 'Checklists', {...form, synced: false });
    }
    updateObject(realm, checklist._id, 'Checklists', form);

  }

  function handleCheck() {
    setChecked(!checked);
  }

  function handleChecklistType(type : ChecklistTypes) {
    setTypeButtonSelected(type);
  }
  
  return (
    <Container>
      <Header showBackButton showHeaderLogo={false} title="Atualizar Checklist" />
      <Form
        checklist={checklist}
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