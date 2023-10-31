import React, { useState } from 'react';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import SearchHeader from '../../../components/home/search/searchuser/SearchHeader';
import Search from '../../../components/home/search/searchuser/SearchUser';
import * as S from './searchUserPage.styled';

export default function SearchUserPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <S.HomeLayout>
      <SearchHeader setSearchResults={setSearchResults} />
      <Search searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}
