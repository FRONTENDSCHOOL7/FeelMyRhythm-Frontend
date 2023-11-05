import React, { useState, useEffect } from 'react';
import * as S from './FollowList.styled';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { followUser } from '../../apis/profile/followAPI';
import { unfollowUser } from '../../apis/profile/unfollowAPI';
import basicProfile from '../../assets/images/common/basic-profile.svg';

export default function FollowList({ data }) {
  const [follow, setFollow] = useState(data.isfollow);
  const navigate = useNavigate();

  const followMutation = useMutation({
    mutationFn: followUser,
    onSuccess: (res) => {
      setFollow(true);
    },
    onError: (err) => {}
  });
  const unfollowMutation = useMutation({
    mutationFn: unfollowUser,
    onSuccess: (res) => {
      setFollow(false);
    },
    onError: (err) => {}
  });

  useEffect(() => {
    setFollow(data.isfollow);
    console.log(String(data.intro).split('ms7-3🈳'));
  }, [data.isfollow, data.intro]);

  return (
    <S.ProfileFollowersLayout>
      <S.FollowerRowBox>
        <S.FollowerBox>
          <S.FollowerImgBox onClick={() => navigate('/profile/' + data.accountname)}>
            <img src={String(data.image).includes('Ellipse.png') ? basicProfile : data.image} alt='' />
          </S.FollowerImgBox>
          <S.FollowerTextBox onClick={() => navigate('/profile/' + data.accountname)}>
            <S.FollowerTitleContent>{data.username}</S.FollowerTitleContent>
            <S.FollowerIntroContent>{String(data.intro).split('ms7-3🈳')[1]}</S.FollowerIntroContent>
          </S.FollowerTextBox>
          {!follow ? (
            <S.FollowerButton onClick={() => followMutation.mutate(data.accountname)}>팔로우</S.FollowerButton>
          ) : (
            <S.FollowerPauseButton onClick={() => unfollowMutation.mutate(data.accountname)}>
              취소
            </S.FollowerPauseButton>
          )}
        </S.FollowerBox>
      </S.FollowerRowBox>
    </S.ProfileFollowersLayout>
  );
}
