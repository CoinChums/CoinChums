import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { GroupStoreContext, TInitialGroupsState } from './groups.types';

const initialStateData: TInitialGroupsState = {
  screenState: SCREEN_STATE.NONE,
  errorMessage: '',
  group: {
    createdBy: '',
    category: '',
    groupState: '',
    members: [],
    title: '',
    description: '',
    transactionIds: [],
    _id: '',
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
  groupDetails: () => get().group,

  inputEvents: () => get().input,

  setErrorMessage: (message: string) => set(state => ({ ...state, errorMessage: message })),

  resetState: () => set(initialStateData),

  setGroups: (groups: TInitialGroupsState['group']) =>
    set(state => ({ ...state, groups, input: initialStateData.input })),

  setInputTitle: (title: string) =>
    set(state => ({ ...state, errorMessage: '', input: { ...state.input, title } })),

  setInputDescription: (description: string) =>
    set(state => ({ ...state, errorMessage: '', input: { ...state.input, description } })),
}));
