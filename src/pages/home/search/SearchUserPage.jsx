import React, { useEffect, useState } from 'react';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import SearchHeader from '../../../components/home/search/searchuser/SearchHeader';
import Search from '../../../components/home/search/searchuser/SearchUser';
import * as S from './searchUserPage.styled';
import { useNavigate } from 'react-router-dom';

export default function SearchUserPage() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <S.HomeLayout>
      <SearchHeader setSearchResults={setSearchResults} />
      <Search searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}
