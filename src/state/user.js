import { createAction, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const userLogin = createAction("USER_LOGIN");
export const userLogOut = createAction("USER_LOGOUT");
export const addToFavorites = createAction("ADD_TO_FAVORITES");
export const removeFromFavorites = createAction("REMOVE_FROM_FAVORITES");

const initialState = {
  id: null,
  email: null,
  admin: null,
  name: null,
  favorites: [],
};

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => action.payload,
  [userLogOut]: (state, action) => (state = {}),
  [addToFavorites]: (state, action) => {
    if (state.favorites.find((fav) => fav.id === action.payload.id)) {
      message.error("error:this property was already added to favorites");
      return state;
    }

    message.success("Property added to favorites");
    return state.favorites.push(action.payload);
  },
  [removeFromFavorites]: (state, action) => {
    message.success(`Property removed from favorites`);
    return {
      ...state,
      properties: state.favorites.filter((fav) => fav.id !== action.payload.id),
    };
  },
});

export default userReducer;
