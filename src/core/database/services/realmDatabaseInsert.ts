import Realm from "realm";
export type DatabaseNameProps = 'Checklists';

export function insertObject<T extends Realm.Object>(realmInstance: Realm, databaseName: DatabaseNameProps, newObject: T) {
  realmInstance.write(() => {
    realmInstance.create(databaseName, newObject);
  })
};

export function insertArraysObjects<T extends Realm.Object>(
  realmInstance: Realm,
  databaseName: DatabaseNameProps,
  newObjects: T[],
) {
  newObjects.forEach((newObj) => {
    insertObject(realmInstance, databaseName, newObj);
  })
}

export function insertParentObject<T, U>(
  realmInstance: Realm, 
  objectId: string, 
  databaseName: DatabaseNameProps,
  propertyName: keyof T,
  newObject: T | U,
) {
  realmInstance.write(() => {
    const ObjectParentUpdate = realmInstance.objectForPrimaryKey<any>(databaseName, objectId);

    if (!ObjectParentUpdate) {
      console.error(`Object with ID ${objectId} does not exist`);
      return;
    };

    if (ObjectParentUpdate && propertyName in ObjectParentUpdate) {
      if (Array.isArray(ObjectParentUpdate[propertyName])) {
        ObjectParentUpdate.forEach((item: any) => {
          ObjectParentUpdate[propertyName].push(item);
        });
      } else {
        ObjectParentUpdate[propertyName] = newObject;
      }
    } else {
      console.warn(`Journey with id ${objectId} not found or property ${propertyName.toString()} does not exist.`);
    }
  })
}