import React from 'react';
import { ReactComponent as GamgulLogo } from '../../../assets/images/home/symbol-logo-gray.svg';
import * as S from './iFollowButNoPosts.styled';

export default function IFollowButNoPosts() {
  return (
    <S.DefaultLayout>
      <S.StyledGamgulLogo>
        <GamgulLogo />
      </S.StyledGamgulLogo>
      <S.WordBox>당신이 팔로우 하는 유저의 게시물이 아직 존재하지 않습니다.</S.WordBox>
    </S.DefaultLayout>
  );
}
