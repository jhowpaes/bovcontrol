import Realm from "realm";
import { DatabaseNameProps } from "./realmDatabaseInsert";

export function getDatabaseTable<T>(realmInstance: Realm, databaseName: DatabaseNameProps) {
  return realmInstance.objects<T>(databaseName);
}

export function getObjectByParam(
  realmInstance: Realm, 
  objectParamName: string, 
  objectParamValue: any,
  logicalOperators: '==' | '!=' | '<' | '>',
  databaseName: DatabaseNameProps
) {
  return realmInstance.objects(databaseName).filtered(`${objectParamName} ${logicalOperators} $0`, objectParamValue);
}

export function getObjectById(realmInstance: Realm, objectId: string, databaseName: DatabaseNameProps){
  return realmInstance.objectForPrimaryKey(databaseName, objectId);
};