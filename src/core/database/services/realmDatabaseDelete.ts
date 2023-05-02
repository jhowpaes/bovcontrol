import Realm from "realm";
import { DatabaseNameProps } from "./realmDatabaseInsert";
import { getObjectById } from "./realmDatabaseToView";

export function deleteObjectById(
  realmInstance: Realm,
  databaseName: DatabaseNameProps,
  objectId: string,
){
  const objectToDelete = getObjectById(realmInstance, objectId, databaseName);

  realmInstance.write(() => {
    realmInstance.delete(objectToDelete);
  })
}

export function deleteDatabaseRegister(realmInstance: Realm, databaseName: DatabaseNameProps) {
  realmInstance.write(() => {
    realmInstance.delete(realmInstance.objects(databaseName));
  })
};

export function deleteArrayDatabaseRegister(realmInstance: Realm, databaseName: Array<DatabaseNameProps>) {
  databaseName.forEach((name) => {
    realmInstance.write(() => {
      realmInstance.delete(realmInstance.objects(name));
    })
  })
};