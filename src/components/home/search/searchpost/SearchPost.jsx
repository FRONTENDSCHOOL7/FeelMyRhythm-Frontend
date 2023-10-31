import React from 'react';
import * as S from './searchPost.styled';
import UserPosts from '../searchpost/UserPosts';

export default function SearchPost({ searchResults = [] }) {
  const contents = searchResults.map((post) => post.content || String(post.image).split('🈳')[2]);

  return (
    <S.SearchLayout>
      <UserPosts searchResults={contents} />
    </S.SearchLayout>
  );
}
