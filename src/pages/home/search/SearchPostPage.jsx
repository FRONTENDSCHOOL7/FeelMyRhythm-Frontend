import React, { useEffect, useState } from 'react';
import TempNavBar from '../../../components/home/search/searchpost/TempNavBar';
import UserPosts from '../../../components/home/search/searchpost/UserPosts';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import * as S from './searchPostPage.styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { atomEmotionState } from '../../../store/store';

export default function SearchPostPage() {
  const navigate = useNavigate();
  const [emojiState, setEmojiState] = useRecoilState(atomEmotionState);
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  return (
    <S.HomeLayout>
      <TempNavBar setParentContent={setSearchResults} setEmojiState={setEmojiState} />
      <UserPosts searchResults={searchResults} emojiState={emojiState} />
      <TabMenu />
    </S.HomeLayout>
  );
}
