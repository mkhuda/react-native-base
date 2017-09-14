import status from './status';
import member from './member';
import do_valid from './do_valid';
import { StatusBar, Platform } from 'react-native';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
};
