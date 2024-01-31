export * from './context';

export type ActionCreator = keyof typeof actionCreator;

export const actionCreator = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  SET_AUTH: 'SET_AUTH',
  DELETE_AUTH: 'DELETE_AUTH',
  //   SNACKBAR: 'SNACKBAR',
  //   IS_PROCESSING: 'IS_PROCESSING',
  //   STOP_PROCESSING: 'STOP_PROCESSING',
};
