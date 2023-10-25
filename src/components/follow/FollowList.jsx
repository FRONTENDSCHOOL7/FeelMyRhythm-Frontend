import React from 'react';
import * as S from './FollowList.styled';
import basicProfile from '../../assets/images/profile/basic-profile-img.svg';

export default function PostFollowers() {
  return (
    <S.ProfileFollowersLayout>
      <S.FollowerRowBox>
        <S.FollowerBox>
          <S.FollowerImgBox>
            <img src={basicProfile} alt='' />
          </S.FollowerImgBox>
          <S.FollowerTextBox>
            <S.FollowerTitleContent>애월읍 한라봉 최고 맛집</S.FollowerTitleContent>
            <S.FollowerIntroContent>정성을 다해 농사짓는 한라봉</S.FollowerIntroContent>
          </S.FollowerTextBox>
          <S.FollowerButton>팔로우</S.FollowerButton>
        </S.FollowerBox>
        <S.FollowerBox>
          <S.FollowerImgBox>
            <img src={basicProfile} alt='' />
          </S.FollowerImgBox>
          <S.FollowerTextBox>
            <S.FollowerTitleContent>애월읍 한라봉 최고 맛집</S.FollowerTitleContent>
            <S.FollowerIntroContent>정성을 다해 농사짓는 한라봉</S.FollowerIntroContent>
          </S.FollowerTextBox>
          <S.FollowerPauseButton>취소</S.FollowerPauseButton>
        </S.FollowerBox>
      </S.FollowerRowBox>
    </S.ProfileFollowersLayout>
  );
}
