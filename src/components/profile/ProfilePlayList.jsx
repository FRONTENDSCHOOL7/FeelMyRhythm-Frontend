import React from 'react';
import * as S from './ProfilePlayList.styled';
import test_img from '../../images/profile/basic-profile-img.svg';

export default function ProfilePlaylist() {
  return (
    <S.ProfilePlayListLayout>
      <S.TitleContent>판매 중인 상품</S.TitleContent>
      <S.PLContainerBox>
        <S.PLBox>
          <S.PLImg src={test_img} />
          <S.PLTitleContent>애월읍 노지 감귤</S.PLTitleContent>
          <S.PLContent>35,000원</S.PLContent>
        </S.PLBox>
        <S.PLBox>
          <S.PLImg src={test_img} />
          <S.PLTitleContent>애월읍 노지 감귤은 얼마나 맛있을까</S.PLTitleContent>
          <S.PLContent>35,000원</S.PLContent>
        </S.PLBox>
        <S.PLBox>
          <S.PLImg src={test_img} />
          <S.PLTitleContent>애월읍 노지 감귤</S.PLTitleContent>
          <S.PLContent>35,000원</S.PLContent>
        </S.PLBox>
      </S.PLContainerBox>
    </S.ProfilePlayListLayout>
  );
}
