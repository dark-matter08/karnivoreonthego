import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {View} from 'react-native';

import {LocationContext} from '../../../services/location/location.context';
import {theme} from '../../../infrastructure/theme';

const SearchContainer = styled(View, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="magnify"
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
