import React, { useState } from 'react';
import * as S from './ProfilePostList.styled';
import PostListBento from './PostListBento';
import PostListHam from './PostListHam';

export default function ProfilePlaylist() {
  const [flag, setFlag] = useState(true);
  return (
    <S.ProfilePostListLayout>
      <S.PostListHeader>
        <S.HamButton value={flag} onClick={() => setFlag(true)} $flag={flag}>
          <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
            <path d='M22.75 3.25H3.25V7.58333H22.75V3.25Z' fill='#DBDBDB' stroke='#DBDBDB' strokeLinecap='round' />
            <path
              d='M22.75 10.8333H3.25V15.1667H22.75V10.8333Z'
              fill='#DBDBDB'
              stroke='#DBDBDB'
              strokeLinecap='round'
            />
            <path d='M22.75 18.4167H3.25V22.75H22.75V18.4167Z' fill='#DBDBDB' stroke='#DBDBDB' strokeLinecap='round' />
          </svg>
        </S.HamButton>
        <S.BentoButton value={flag} onClick={() => setFlag(false)} $flag={flag}>
          <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
            <path d='M10.8333 3.25H3.25V10.8333H10.8333V3.25Z' fill='#DBDBDB' stroke='#DBDBDB' strokeLinecap='round' />
            <path d='M22.75 3.25H15.1666V10.8333H22.75V3.25Z' fill='#DBDBDB' stroke='#DBDBDB' strokeLinecap='round' />
            <path
              d='M22.75 15.1667H15.1666V22.75H22.75V15.1667Z'
              fill='#DBDBDB'
              stroke='#DBDBDB'
              strokeLinecap='round'
            />
            <path
              d='M10.8333 15.1667H3.25V22.75H10.8333V15.1667Z'
              fill='#DBDBDB'
              stroke='#DBDBDB'
              strokeLinecap='round'
            />
          </svg>
        </S.BentoButton>
      </S.PostListHeader>
      {flag ? <PostListHam /> : <PostListBento />}
    </S.ProfilePostListLayout>
  );
}
