import Realm from "realm";

import { ChecklistSchema, FarmerSchema, PersonSchema } from "./models/Checklist";

export const getRealm = async () => await Realm.open({
  path: "checklist-app",
  schema: [
    ChecklistSchema,
    FarmerSchema,
    PersonSchema,
  ],
  schemaVersion: 3
});