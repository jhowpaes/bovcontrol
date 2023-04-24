import Realm from "realm";

export interface IChecklist {
	_id: string,
  checklist_id?: number;
  type: string;
  amount_of_milk_produced: string;
  number_of_cows_head: string;
  had_supervision: boolean;
  farmer: IFarmer;
  from: IPerson;
  to: IPerson;
  created_at: Date;
  updated_at: Date;
}
export type IChecklistObject = IChecklist & Realm.Object;

export interface IFarmer {
	name: string;
  city: string;
}
export type IFarmerObject = IFarmer & Realm.Object;

export interface IPerson {
	name: string;
}
export type IPersonObject = IPerson & Realm.Object;