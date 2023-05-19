import Realm from "realm";

import { ChecklistSchema, FarmerSchema, LocationSchema, PersonSchema } from "./models/Checklist";

export const getRealm = async () => await Realm.open({
  path: "checklist-app",
  schema: [
    ChecklistSchema,
    FarmerSchema,
    PersonSchema,
    LocationSchema,
  ],
  schemaVersion: 4
});