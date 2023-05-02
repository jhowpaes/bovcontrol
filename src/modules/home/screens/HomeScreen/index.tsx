import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { getRealm } from '@core/database/realm';
import { Header } from '@modules/shared/components/Header';
import { ListEmpty } from '@modules/shared/components/ListEmpty';
import { HomeFooter } from '@modules/home/components/HomeFooter';
import { ChecklistCard } from '@modules/shared/components/ChecklistCard';
import { getDatabaseTable } from '@core/database/services/realmDatabaseToView';

import { Container } from './styles';
import { IChecklist } from '@modules/checklist/interfaces/IChecklist';

export function HomeScreen(){
  const navigation = useNavigation();
  const [checklists, setChecklists] = useState<IChecklist[]>([] as IChecklist[]);


  async function loadChecklist() {
    try {
      const realm = await getRealm();
      const data = getDatabaseTable<IChecklist>(realm, 'Checklists');
      
      setChecklists(Array.from(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadChecklist();
  }, []);

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
        keyExtractor={item => item?._id!}
        renderItem={
          ({ item }) => <ChecklistCard
              onPress={
                () => navigation.navigate(
                  'mainChecklist',
                  { 
                    screen: 'createAndUpdateChecklist',
                    params: { checklist: item } 
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