import Realm from "realm";
import { removeUndefinedPropertiesAndIgnoreFields } from "@modules/shared/utils/removeUndefinedPropertiesAndIgnoreFields";
import { DatabaseNameProps } from "./realmDatabaseInsert";
import { getObjectById } from "./realmDatabaseToView";

export function updateObject<T extends Record<string, any>>(
  realmInstance: Realm,
  objectId: string,
  databaseName: DatabaseNameProps,
  newObject: T,
  ignoreFields?: string[]
) {
  const existingDatabaseObject = getObjectById(realmInstance, objectId, databaseName);

  if (!existingDatabaseObject) {
    console.error(`Object with ID ${objectId} does not exist`);
    return;
  };

  const cleanedObjects = removeUndefinedPropertiesAndIgnoreFields(
    newObject, 
    ignoreFields!
  );

  realmInstance.write(() => {
    Object.assign(existingDatabaseObject, cleanedObjects);
  })
};

export function updateArrayObjects<T extends Record<string, any>>(
  realmInstance: Realm,
  newObjectsToUpdate: T[],
  databaseName: DatabaseNameProps,
  ignoreFields: string[],
) {
  newObjectsToUpdate.forEach((newObj) => {
    updateObject(
      realmInstance,
      newObj?._id.toString(), 
      databaseName, 
      newObj,
      ignoreFields,
    );
  })
};
