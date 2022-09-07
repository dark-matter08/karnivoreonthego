import React, {useContext, useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {View} from 'react-native';

import {LocationContext} from '../../../services/location/location.context';
import {theme} from '../../../infrastructure/theme';

const SearchContainer = styled(View, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={{
          uri: isFavouritesToggled
            ? 'https://cdn-icons-png.flaticon.com/512/3048/3048844.png'
            : 'https://cdn-icons-png.flaticon.com/512/2724/2724657.png',
        }}
        onIconPress={onFavouritesToggle}
        clearIcon={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2732/2732657.png',
        }}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
