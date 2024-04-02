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
  group: TGroups;
  input: InputEvents;
};

export type GroupActionTypes = {
  groupDetails: () => void;
  inputEvents: () => InputEvents;
  setErrorMessage: (message: string) => void;
  resetState: () => void;
  setGroups: (groups: TGroups) => void;
  setInputTitle: (title: string) => void;
  setInputDescription: (description: string) => void;
};

export type GroupStoreContext = TInitialGroupsState & GroupActionTypes;
