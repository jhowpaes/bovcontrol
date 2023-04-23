import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { ChecklistCard } from '@modules/shared/components/ChecklistCard';

import { Header } from '@modules/shared/components/Header';
import { ListEmpty } from '@modules/shared/components/ListEmpty';
import { CheckListProps } from '@modules/checklist/models/CheckListProps';
import { HomeFooter } from '@modules/home/components/HomeFooter';

import { Container } from './styles';

export function HomeScreen(){
  const navigation = useNavigation();
  const [checklists, setChecklists] = useState<CheckListProps[]>([
    {
      _id: 1,
      type: 'BPA',
      amount_of_milk_produced: '20',
      number_of_cows_head: '200',
      had_supervision: false,
      farmer: {
        name: 'Fazenda São Rock',
        city: 'São Rock',
      },
      from: {
        name: 'Luciano Camargo',
      },
      to: {
        name: 'Marcos Silva',
      },
      created_at: new Date('2022-02-01T10:10:21.748Z'),
      updated_at: new Date('2022-02-01T10:10:21.748Z'),
    }
  ]);

  return (
    <Container>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          checklists.length === 0 && { flex: 1 },
          {
            paddingHorizontal: 20,
            paddingBottom: 20,
          }
        ]}
        data={checklists}
        keyExtractor={item => item._id.toString()}
        renderItem={
          ({ item }) => <ChecklistCard
              onPress={
                () => navigation.navigate(
                  'mainChecklist',
                  { 
                    screen: 'createAndUpdateChecklist',
                    params: item
                })
              }
              checklistItem={item}
            />
        }
        ListEmptyComponent={() => (
            <ListEmpty 
              message='Nenhum checklist encontrado.'
            />
          )
        }
      />

    <HomeFooter />
    </Container>
  );
}