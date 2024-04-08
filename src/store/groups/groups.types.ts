import { SCREEN_STATE } from '../../constants/enums';

export type ResponseStatusDetails = {
  screenState: SCREEN_STATE;
};

export type Group = {
  createdBy: string;
  category: string;
  groupState: string;
  members: string[];
  title: string;
  description: string;
  transactionIds: string[];
  _id: string;
  created_at: string;
  updated_at: string;
};

export type Input = {
  title: string;
  description: string;
  createdBy: string;
  members: string[];
  category: string;
};

export type GroupDetails = ResponseStatusDetails & {
  group: Group;
};

export type GroupList = {
  responseState: SCREEN_STATE;
  groups: Group[];
};

export type InitialGroupsState = {
  errorMessage: string;
  groupDetails: GroupDetails;
  groupList: GroupList;
  input: Input;
};

export type GroupActionTypes = {
  getGroupDetails: () => GroupDetails;
  getGroupList: () => GroupList;
  inputEvents: () => Input;
  setErrorMessage: (message: string) => void;
  resetState: () => void;
  setGroups: (groups: Group) => void;
  setGroupList: (groups: Group[]) => void;
  setInputTitle: (title: string) => void;
  setInputDescription: (description: string) => void;
};

export type GroupStoreContext = InitialGroupsState & GroupActionTypes;
