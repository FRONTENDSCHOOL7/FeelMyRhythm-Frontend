import React, { useState } from 'react';
import * as S from './ProfilePostList.styled';
import { ReactComponent as IconHam } from '../../../assets/images/profile/icon-ham.svg';
import { ReactComponent as IconBento } from '../../../assets/images/profile/icon-bento.svg';
import PostItem from './PostItem';

export default function ProfilePlaylist() {
  const [flag, setFlag] = useState(true);

  return (
    <S.ProfilePostListLayout>
      <S.PostListHeader>
        <S.HamButton value={flag} onClick={() => setFlag(true)} $flag={flag}>
          <IconHam />
        </S.HamButton>
        <S.BentoButton value={flag} onClick={() => setFlag(false)} $flag={flag}>
          <IconBento />
        </S.BentoButton>
      </S.PostListHeader>
      <S.PostListBox $flag={flag}>
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
        <PostItem flag={flag} />
      </S.PostListBox>
    </S.ProfilePostListLayout>
  );
}
