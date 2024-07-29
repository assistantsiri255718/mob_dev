import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  user: null,
  favourites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_FAVOURITE':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FAVOURITE':
      return { ...state, favourites: state.favourites.filter(item => item !== action.payload) };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
