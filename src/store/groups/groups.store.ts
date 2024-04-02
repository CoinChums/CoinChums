import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { GroupStoreContext, TInitialGroupsState } from './groups.types';

const initialStateData: TInitialGroupsState = {
  screenState: SCREEN_STATE.NONE,
  errorMessage: '',
  groups: {
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

export const useAuth = create<GroupStoreContext>((set, get) => ({
  ...initialStateData,
  groupDetails: () => get().groups,
}));
