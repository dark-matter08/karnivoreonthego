import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {View} from 'react-native';

import {LocationContext} from '../../../services/location/location.context';
import {theme} from '../../../infrastructure/theme';

const SearchContainer = styled(View, {
  padding: theme.spacing.sm,
  position: 'absolute',
  zIndex: 999,
  top: 10,
  width: '100%',
});

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location on the map"
        icon={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2901/2901609.png',
        }}
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
