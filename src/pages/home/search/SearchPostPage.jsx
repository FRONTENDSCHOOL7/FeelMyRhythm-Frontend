import React, { useState } from 'react';
import TempNavBar from '../../../components/home/TempNavBar';
import TabMenu from '../../../components/common/TabMenu/TabMenu';

import Search from '../../../components/home/search/Search';
import * as S from './searchPostPage.styled';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <S.HomeLayout>
      <TempNavBar />
      <Search searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}
