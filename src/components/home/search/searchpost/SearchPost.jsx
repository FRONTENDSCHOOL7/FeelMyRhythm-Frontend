import React from 'react';
import * as S from './searchPost.styled';
import UserPosts from '../searchpost/UserPosts';

export default function SearchPost({ searchResults = [] }) {
  const contents = searchResults.map((post) => post.content);

  return (
    <S.SearchLayout>
      <UserPosts searchResults={contents} />
    </S.SearchLayout>
  );
}
//연결은 된 상태임 background-color로 확인
