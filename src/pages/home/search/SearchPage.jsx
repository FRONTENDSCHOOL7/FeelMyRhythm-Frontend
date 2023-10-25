import React, { useState } from 'react';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import SearchHeader from '../../../components/home/search/SearchHeader';
import Search from '../../../components/home/search/Search';
import * as S from './searchPage.styled';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <S.HomeLayout>
      <SearchHeader setSearchResults={setSearchResults} />
      <Search searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}
