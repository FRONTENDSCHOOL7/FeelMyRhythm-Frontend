import React from 'react';
import { ReactComponent as FeelMyRhythmLogo } from '../../../assets/images/home/feelmyrhythmlogo.svg';
import * as S from './iFollowButNoPosts.styled';

export default function IFollowButNoPosts() {
  return (
    <S.DefaultLayout>
      <S.StyledLogo>
        <FeelMyRhythmLogo />
      </S.StyledLogo>
      <S.WordBox>
        <S.P>당신이 팔로우 하는 유저의 게시물이</S.P>
        <S.P>아직 존재하지 않습니다.</S.P>
      </S.WordBox>
    </S.DefaultLayout>
  );
}
