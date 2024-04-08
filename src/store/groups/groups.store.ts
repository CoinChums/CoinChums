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
    responseState: SCREEN_STATE.NONE,
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

  setGroups: groups =>
    set(state => ({
      ...state,
      groupDetails: {
        ...state.groupDetails,
        group: {
          ...groups,
        },
      },
    })),

  setGroupListState: (responseState: SCREEN_STATE) =>
    set(state => ({ ...state, groupList: { ...state.groupList, responseState } })),

  setGroupList: (groups: Group[]) =>
    set(state => ({ ...state, groupList: { ...state.groupList, groups } })),

  setInputTitle: (title: string) =>
    set(state => ({ ...state, errorMessage: '', input: { ...state.input, title } })),

  setInputDescription: (description: string) =>
    set(state => ({
      ...state,
      errorMessage: '',
      input: { ...state.input, description },
    })),
}));
