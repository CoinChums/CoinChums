import {
  EXPENSE_SPLIT_OPTION,
  EXPENSE_STATUS,
  GROUP_STATUS,
  LANGUAGE,
  STATUS,
} from '../constants/enums';

export type Member = {
  name: string;
  user_id: string;
  email: string;
  image_url: string;
  verified: boolean;
  phone: string;
  account_creation_date: string;
  last_updated: string;
  account_status: STATUS;
  access_token: string;
  preferred_language: LANGUAGE;
  entitlement: string;
};

export type TGroupListTile = {
  icon: string;
  title: string;
  group_members: Array<Member>;
  created_at: string;
  group_id: string;
  updated_at: string;
  group_status: GROUP_STATUS;
};

export type TExpense = {
  groups: Array<TGroupListTile>;
  expenses: Record<string, TGroupExpense>;
};

export type TGroupExpense = {
  group_balances: Record<
    string,
    Record<string, { name: string; amount: number; status: 'owes' | 'debt' }>
  >;
  expense_list: Array<TExpenseItem>;
};

export type TExpenseItem = {
  icon: string;
  paid_by: string;
  title: string;
  amount: number;
  paid_for: Array<{ user_id: string; share: number }>;
  split_option: EXPENSE_SPLIT_OPTION;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  expense_status: EXPENSE_STATUS;
};
