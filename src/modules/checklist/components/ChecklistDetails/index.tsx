import React from 'react';
import { useTheme } from 'styled-components/native';
import { Pen } from 'phosphor-react-native';

import { CheckListProps } from '@modules/checklist/models/CheckListProps';

import { Container, Text, ChecklistTextItem, Label, DetailsContent, UpdateButton } from './styles';

type Props = {
  checklist?: CheckListProps;
  updateChecklist: boolean;
  setUpdateChecklist: (value: boolean) => void;
}

type ItemDetailProps = {
  label: string;
  checklistText?: string;
}

export function ChecklistDetails({ checklist, setUpdateChecklist, updateChecklist }: Props){
  const { COLORS } = useTheme();

  function RenderChecklistTextItem({ label, checklistText }: ItemDetailProps) {
    return (
      <ChecklistTextItem>
        <Label>{label}</Label> 
        <Text>{checklistText}</Text>
      </ChecklistTextItem>
    )
  };

  return (
    <Container>
      <UpdateButton onPress={() => setUpdateChecklist(!updateChecklist)}>
        <Pen size={30} color={COLORS.BLUE_700} />
      </UpdateButton>
      <DetailsContent>
        <RenderChecklistTextItem label="Tipo do checklist:" checklistText={checklist?.type} />
        <RenderChecklistTextItem label="Nome do fazendeiro:" checklistText={checklist?.from?.name} />
        <RenderChecklistTextItem label="Nome da fazenda:" checklistText={checklist?.farmer.name} />
        <RenderChecklistTextItem label="Cidade da fazenda:" checklistText={checklist?.farmer.city} />
        <RenderChecklistTextItem label="Supervisor:" checklistText={checklist?.to?.name} />
        <RenderChecklistTextItem label="Quantidade de leite produzida no mês:" checklistText={checklist?.amount_of_milk_produced} />
        <RenderChecklistTextItem label="Quantidade de cabeça de gado:" checklistText={checklist?.number_of_cows_head} />
        <RenderChecklistTextItem
          label="Teve supervisão no mês em curso:"
          checklistText={checklist?.had_supervision ? 'Sim' : 'Não'}
        />
      </DetailsContent>
    </Container>
  );
}