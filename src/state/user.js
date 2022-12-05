import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  admin: null,
  name: null,
  
}

export const userLogin = createAction('USER_LOGIN')
export const userLogOut = createAction('USER_LOGOUT')

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => action.payload,
  [userLogOut]: (state, action) => (state = {}),
})

export default userReducer
