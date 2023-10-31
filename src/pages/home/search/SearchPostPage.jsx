import React, { useEffect, useState } from 'react';
import TempNavBar from '../../../components/home/search/searchpost/TempNavBar';
import UserPosts from '../../../components/home/search/searchpost/UserPosts';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import * as S from './searchPostPage.styled';
import { useNavigate } from 'react-router-dom';

export default function SearchPostPage() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <S.HomeLayout>
      <TempNavBar setParentContent={setSearchResults} />
      <UserPosts searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}

//SearchUserPage랑 같은모양으로 만들었음
