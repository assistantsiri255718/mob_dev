// FavouritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (product) => {
    setFavourites((prevFavourites) => [...prevFavourites, product]);
  };

  const removeFavourite = (productId) => {
    setFavourites((prevFavourites) => prevFavourites.filter((item) => item.id !== productId));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
