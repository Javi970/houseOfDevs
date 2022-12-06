import { createAction, createReducer } from '@reduxjs/toolkit'


const initialState = {
  id: null,
  email: null,
  admin: null,
  name: null,
  favorites: [],
}

export const userLogin = createAction('USER_LOGIN')
export const userLogOut = createAction('USER_LOGOUT')
export const addToFavorites = createAction('ADD_TO_FAVORITES')
export const removeFromFavorites = createAction('REMOVE_FROM_FAVORITES')

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => ({...action.payload,favorites:[]}),
  [userLogOut]: (state, action) => (state = {}),
  [addToFavorites]: (state, action) => {
   
    /* if (!state.favorites.find((fav) => fav.id === action.payload.id)) {
       message.error('Property already in favorites')
       return state
    } */
    /* message.succes("Property added to favorites") */
    
    state.favorites.push(action.payload)
  },
})

export default userReducer
