import React from 'react';
import Footer from '../../../components/common/Footer/Footer';
import SearchHeader from '../../../components/home/search/SearchHeader';
import Search from '../../../components/home/search/Search';
import * as S from './searchPage.styled';

export default function SearchPage() {
  return (
    <S.HomeLayout>
      <SearchHeader />
      <Search />
      <Footer />
    </S.HomeLayout>
  );
}
