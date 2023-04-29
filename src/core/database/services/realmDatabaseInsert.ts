import uuid from 'react-native-uuid';

export type DatabaseNameProps = 'Checklists';

export function insertObject<T>(realmInstance: Realm, newObject: T, databaseName: DatabaseNameProps) {
  const object = {...newObject, _id: uuid.v4().toString()};
  realmInstance.write(() => {
    realmInstance.create(databaseName, object);
  })
};

export function insertArraysObjects<T>(
  realmInstance: Realm,
  newObjects: T[],
  databaseName: DatabaseNameProps,
) {
  newObjects.forEach((newObj) => {
    const object = {...newObj, _id: uuid.v4().toString()};
    insertObject(realmInstance, object, databaseName);
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
          const object = {...item, _id: uuid.v4().toString()};
          ObjectParentUpdate[propertyName].push(object);
        });
      } else {
        const object = {...newObject, _id: uuid.v4().toString()};
        ObjectParentUpdate[propertyName] = object;
      }
    } else {
      console.warn(`Journey with id ${objectId} not found or property ${propertyName.toString()} does not exist.`);
    }
  })
}