import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavrotiesContext from "../store/favorites-context";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavrotiesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites > 0 ? (
        <MeetupList data={favoritesCtx.favorites}></MeetupList>
      ) : (
        <div>No Favorites added</div>
      )}
    </section>
  );
}
