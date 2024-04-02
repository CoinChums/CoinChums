import { SCREEN_STATE } from '../../constants/enums';

export type Group = {
  title: string;
  description: string;
  createdBy: string;
  members: Array<string>;
  category: string;
};

export type TGroups = Group & {
  groupState: string;
  transactionIds: Array<string>;
  _id: string;
};

export type InputEvents = Group;

export type TInitialGroupsState = {
  screenState: SCREEN_STATE;
  errorMessage: string;
  groups: TGroups;
  input: InputEvents;
};

export type GroupActionTypes = {
  groupDetails: () => void;
};

export type GroupStoreContext = TInitialGroupsState & GroupActionTypes;
