import React, { useState } from 'react';
import TempNavBar from '../../../components/home/TempNavBar';
import UserPosts from '../../../components/home/search/searchpost/UserPosts';
import SearchPost from '../../../components/home/search/searchpost/SearchPost';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import * as S from './searchPostPage.styled';

export default function SearchPostPage() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <S.HomeLayout>
      <TempNavBar setParentContent={setSearchResults} />
      <UserPosts searchResults={searchResults} />
      <TabMenu />
    </S.HomeLayout>
  );
}

//SearchUserPage랑 같은모양으로 만들었음
