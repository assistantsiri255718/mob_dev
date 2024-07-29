import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (product) => {
    setFavourites((prevFavourites) => [...prevFavourites, product]);
  };

  const removeFavourite = (id) => {
    setFavourites((prevFavourites) => prevFavourites.filter((item) => item.id !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
