import { ChecklistTypes } from "@modules/shared/models/ChecklistTypes";

export type CheckListProps = {
  _id: number;
  type: ChecklistTypes;
  amount_of_milk_produced: string;
  number_of_cows_head: string;
  had_supervision: boolean;
  farmer: {
    name: string;
    city: string;
  },
  from: {
    name: string;
  },
  to: {
    name: string;
  },
  created_at: Date;
  updated_at: Date;
}