import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { Group, GroupStoreContext, InitialGroupsState } from './groups.types';

const initialStateData: InitialGroupsState = {
  errorMessage: '',
  groupDetails: {
    screenState: SCREEN_STATE.NONE,
    group: {
      createdBy: '',
      category: '',
      groupState: '',
      members: [],
      title: '',
      description: '',
      transactionIds: [],
      _id: '',
      created_at: '',
      updated_at: '',
    },
  },
  groupList: {
    groups: [],
  },
  input: {
    title: '',
    description: '',
    createdBy: '',
    members: [],
    category: '',
  },
};

export const useGroups = create<GroupStoreContext>((set, get) => ({
  ...initialStateData,
  getGroupDetails: () => get().groupDetails,

  getGroupList: () => get().groupList,

  inputEvents: () => get().input,

  setErrorMessage: (message: string) => set(state => ({ ...state, errorMessage: message })),

  resetState: () => set(initialStateData),

  setGroups: (groups: Group) => set(state => ({ ...state, groups, input: initialStateData.input })),

  setGroupList: (groups: Group[]) => set(state => ({ ...state, groupList: { groups } })),

  setInputTitle: (title: string) =>
    set(state => ({ ...state, errorMessage: '', input: { ...state.input, title } })),

  setInputDescription: (description: string) =>
    set(state => ({
      ...state,
      errorMessage: '',
      input: { ...state.input, description },
    })),
}));
