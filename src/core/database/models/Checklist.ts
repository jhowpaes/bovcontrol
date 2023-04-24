import { ObjectSchema } from "realm";

export const ChecklistSchema: ObjectSchema = {
	name: 'Checklists',
	properties: {
		_id: 'string',
		checklist_id: 'int?',
		type: 'string',
		amount_of_milk_produced: 'string',
		number_of_cows_head: 'string',
		had_supervision: 'bool',
		farmer: {
      type: 'object',
      objectType: 'Farmer',
    },
		from: {
      type: 'object',
      objectType: 'Person',
    },
		to: {
      type: 'object',
      objectType: 'Person',
    },
    created_at: 'date',
    updated_at: 'date',
	},
	primaryKey: '_id',
};

export const FarmerSchema: ObjectSchema = {
	name: 'Farmer',
	embedded: true,
	properties: {
    name: 'string',
    city: 'string',
  },
};

export const PersonSchema: ObjectSchema = {
	name: 'Person',
	embedded: true,
	properties: {
    name: 'string',
  },
};