import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  admin: null,
};

export const userLogin = createAction('USER_LOGIN');
export const userLogOut = createAction('USER_LOGOUT');

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => (state={
    id: action.payload.id,
  email: action.payload.email,
  admin: action.payload.admin,
  }),
  /* [userLogout]:(state, action)=>(state={
    id: null,
    email: null,
    admin: null
  }) */
});

export default userReducer;
