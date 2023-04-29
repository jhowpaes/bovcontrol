import BackgroundFetch from 'react-native-background-fetch';
import { client } from '@core/services/api';
import { getRealm } from '../realm';

const MAX_RETRIES = 3;

type UnsyncedData<T> = T & {
  synced: boolean;
};

type SyncConfig = {
  model: string;
  tableName: string;
};

async function sendDataToApi<T>(model: string, data: UnsyncedData<T>) {
  const syncSend = ({ model, data }: { model: string; data: UnsyncedData<T> }) =>
  client.post(`/v1/sync/${model}`, { resources: [data] });
  await syncSend({ model, data });
}


async function syncTables<T>(
  tablesToSync: SyncConfig[],
  sendDataToApi: (model: string, data: UnsyncedData<T>) => Promise<void>,
) {
  const realmInstance = await getRealm();

  for (const { tableName, model } of tablesToSync) {
    const unsyncedData = realmInstance.objects<UnsyncedData<T>>(tableName).filtered('synced == false');

    for (const data of unsyncedData) {
      let retries = 0;

      while (retries < MAX_RETRIES) {
        try {
          await sendDataToApi(model, data);
          realmInstance.write(() => {
            data.synced = true;
          });
          break;
        } catch (error) {
          console.error(`Error syncing data for table ${tableName}:`, error);
          retries++;
        }
      }
    }
  }
}

export async function syncOfflineData() {
  const tableGroup = [
    { model: 'checklist', tableName: 'Checklists' },
  ];

  await syncTables(tableGroup, sendDataToApi);
}

export async function backgroundSync() {
  console.log('[BackgroundFetch] start');

  await syncOfflineData();

  BackgroundFetch.finish();
};

