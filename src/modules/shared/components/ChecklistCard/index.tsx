import React from 'react';

import { DateFormat } from '@modules/shared/utils/date';

import {
  Container,
  SyncStatus,
  Content,
  FarmerContent,
  FarmerName,
  Farm,
  FarmNameLabel,
  FarmNameContent,
  FarmCityLabel,
  FarmCityContent,
  FarmName,
  FarmCity,
  CreatedAt,
} from './styles';
import { User } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';

type Props = TouchableOpacityProps & {
  checklistItem: IChecklist
};

export function ChecklistCard({ checklistItem, ...rest }: Props){
  const createdAt = DateFormat(checklistItem?.created_at);

  return (
    <Container
      activeOpacity={0.8}
      {...rest}
    >
      <SyncStatus />
      <Content>
        <FarmerContent>
          <User size={15} />
          <FarmerName>{checklistItem?.to?.name}</FarmerName>
        </FarmerContent>
        <Farm>
          <FarmNameContent>
            <FarmNameLabel>Fazenda:</FarmNameLabel>
            <FarmName>{checklistItem?.farmer?.name}</FarmName>
          </FarmNameContent>
          <FarmCityContent>
            <FarmCityLabel>Local:</FarmCityLabel>
            <FarmCity>{checklistItem?.farmer?.city}</FarmCity>
          </FarmCityContent>
        </Farm>
        <CreatedAt>{createdAt}</CreatedAt>
      </Content>
    </Container>
  );
}