import React from 'react';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import SearchHeader from '../../../components/home/search/SearchHeader';
import Search from '../../../components/home/search/Search';
import * as S from './searchPage.styled';

export default function SearchPage() {
  return (
    <S.HomeLayout>
      <SearchHeader />
      <Search />
      <TabMenu />
    </S.HomeLayout>
  );
}
