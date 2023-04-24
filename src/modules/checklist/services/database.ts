import Realm from "realm";
import { removeUndefinedPropertiesAndIgnoreFields } from "@modules/shared/utils/removeUndefinedPropertiesAndIgnoreFields";
import { CheckListProps } from "../models/CheckListProps";

export const CreateChecklistDatabase = async (realmInstance: Realm, checklist: CheckListProps) => {
  realmInstance.write(() => {
    realmInstance.create('Checklists', checklist);
  });

  realmInstance.close();
};

function getChecklistById(realmInstance: Realm, objectId: string) {
  return realmInstance.objectForPrimaryKey('Checklists', objectId);
}

export const UpdateChecklistDatabase = async (
  realmInstance: Realm, 
  checklistId: string, 
  checklistData: CheckListProps,
  ignoreFields: string[]
) => {
  const existingChecklist =  getChecklistById(realmInstance, checklistId);
  
  if (!existingChecklist) {
    console.error(`Object with ID ${checklistId} not found.`);
    return;
  };

  const cleanedChecks = removeUndefinedPropertiesAndIgnoreFields(checklistData, ignoreFields);

  realmInstance.write(() => {
    Object.assign(existingChecklist, cleanedChecks);
  })
};