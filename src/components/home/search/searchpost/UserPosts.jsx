import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../../../apis/home/entirePosts';
import UserProfile from '../../UserProfile';
import * as S from './userPosts.styled';

export default function EntirePosts({ searchResults, emojiState }) {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  const lowerCaseSearchResults = typeof searchResults === 'string' ? searchResults.toLowerCase() : searchResults;

  return (
    <S.DefaultLayout>
      {data?.posts
        .filter(
          (post) =>
            lowerCaseSearchResults.length > 0 &&
            ((typeof post.content === 'string' && post.content.toLowerCase().includes(lowerCaseSearchResults)) ||
              (typeof post.image === 'string' &&
                String(post.image).split('🈳')[2]?.toLowerCase().includes(lowerCaseSearchResults)))
        )
        .map(
          (post, i) =>
            String(post.image).split('🈳')[0] === 'ms7-3' &&
            (emojiState === '전체' || emojiState === '선택' || String(post.image).split('🈳')[4] === emojiState) && (
              <UserProfile key={i} {...post} />
            )
        )}
    </S.DefaultLayout>
  );
}
