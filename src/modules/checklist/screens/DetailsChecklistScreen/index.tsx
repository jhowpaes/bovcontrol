import React from 'react';
import { Pen } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@modules/shared/components/Header';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';

import { Container, Text, ChecklistTextItem, Label, DetailsContent, UpdateButton, Content } from './styles';

type ParamList = {
  checklist: IChecklist;
};

type ItemDetailProps = {
  label: string;
  checklistText?: string;
}

export function DetailsChecklistScreen(){
  const checklist = useRoute<RouteProp<ParamList>>()?.params?.checklist;
  const navigation = useNavigation();
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
      <Header showBackButton showHeaderLogo={false} title="Detalhes Checklist" />
      <Content>
        <UpdateButton onPress={() => navigation.navigate('updateChecklist', { checklist: checklist } )}>
          <Pen size={30} color={COLORS.BLUE_700} />
        </UpdateButton>
        <DetailsContent>
          <RenderChecklistTextItem label="Tipo do checklist:" checklistText={checklist?.type} />
          <RenderChecklistTextItem label="Nome do fazendeiro:" checklistText={checklist?.from?.name} />
          <RenderChecklistTextItem label="Nome da fazenda:" checklistText={checklist?.farmer?.name} />
          <RenderChecklistTextItem label="Cidade da fazenda:" checklistText={checklist?.farmer?.city} />
          <RenderChecklistTextItem label="Supervisor:" checklistText={checklist?.to?.name} />
          <RenderChecklistTextItem label="Quantidade de leite produzida no mês:" checklistText={checklist?.amount_of_milk_produced} />
          <RenderChecklistTextItem label="Quantidade de cabeça de gado:" checklistText={checklist?.number_of_cows_head} />
          <RenderChecklistTextItem
            label="Teve supervisão no mês em curso:"
            checklistText={checklist?.had_supervision ? 'Sim' : 'Não'}
          />
        </DetailsContent>
      </Content>
    </Container>
  );
}