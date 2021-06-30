import { createContext, useState } from "react";

const FavrotiesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavrotiesContextProvider(props) {
  const [userFavorities, setUserFavorities] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorities((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorities((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorities.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorities,
    totalFavorites: userFavorities.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavrotiesContext.Provider value={context}>
      {props.children}
    </FavrotiesContext.Provider>
  );
}

export default FavrotiesContext;
