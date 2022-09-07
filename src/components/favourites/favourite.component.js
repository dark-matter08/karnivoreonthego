import React, {useContext} from 'react';
import {FavouritesContext} from '../../services/favourites/favourites.context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as AllSolid from '@fortawesome/free-solid-svg-icons';
import * as AllRegular from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View} from 'react-native';

export const Favourite = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);

  return (
    <View style={styles.favButton}>
      <TouchableOpacity
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }>
        <FontAwesomeIcon
          icon={isFavourite ? AllSolid.faHeart : AllRegular.faHeart}
          size={30}
          color={isFavourite ? 'red' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  favButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 9,
  },
});
