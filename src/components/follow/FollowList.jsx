import React from 'react';
import * as S from './FollowList.styled';
import basicProfile from '../../images/profile/basic-profile-img.svg';

export default function PostFollowers() {
  return (
    <S.ProfileFollowersLayout>
      <S.ProfileHeaderLayout>
        <S.NavButton>
          <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
            <path d='M17.4167 11H4.58337' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M11 17.4167L4.58337 11L11 4.58334'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </S.NavButton>
        <S.NavContent>Followers</S.NavContent>
      </S.ProfileHeaderLayout>
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
