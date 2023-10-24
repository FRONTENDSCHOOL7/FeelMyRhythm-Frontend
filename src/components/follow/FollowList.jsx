import React, { useState } from 'react';
import * as S from './FollowList.styled';
import { useNavigate } from 'react-router-dom';
import basicProfile from '../../assets/images/profile/basic-profile-img.svg';

export default function PostFollowers() {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  return (
    <S.ProfileFollowersLayout>
      {/* nav bar 추가 */}
      <S.FollowerRowBox>
        <S.FollowerBox>
          <S.FollowerImgBox onClick={() => navigate('/profile')}>
            <img src={basicProfile} alt='' />
          </S.FollowerImgBox>
          <S.FollowerTextBox onClick={() => navigate('/profile')}>
            <S.FollowerTitleContent>애월읍 한라봉 최고 맛집</S.FollowerTitleContent>
            <S.FollowerIntroContent>정성을 다해 농사짓는 한라봉</S.FollowerIntroContent>
          </S.FollowerTextBox>
          {flag ? (
            <S.FollowerButton onClick={() => setFlag(!flag)}>팔로우</S.FollowerButton>
          ) : (
            <S.FollowerPauseButton onClick={() => setFlag(!flag)}>취소</S.FollowerPauseButton>
          )}
        </S.FollowerBox>
      </S.FollowerRowBox>
    </S.ProfileFollowersLayout>
  );
}
