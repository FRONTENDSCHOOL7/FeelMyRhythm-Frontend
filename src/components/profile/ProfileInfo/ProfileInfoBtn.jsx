import React, { useEffect, useState } from 'react';
import * as S from './ProfileInfo.styled';
import { followUser } from '../../../apis/profile/followAPI';
import { unfollowUser } from '../../../apis/profile/unfollowAPI';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function ProfileInfoBtn({ profile }) {
  const [follow, setFollow] = useState(profile.isfollow);

  useEffect(() => {
    setFollow(profile.isfollow);
  }, [profile.isfollow]);

  const followMutation = useMutation({
    mutationFn: followUser,
    onSuccess: (res) => {
      setFollow(!follow);
    },
    onError: (err) => {}
  });
  const unfollowMutation = useMutation({
    mutationFn: unfollowUser,
    onSuccess: (res) => {
      setFollow(!follow);
    },
    onError: (err) => {}
  });

  return (
    <>
      {!follow ? (
        <S.FollowButton
          $follow='true'
          onClick={() => {
            followMutation.mutate(profile.accountname);
          }}>
          팔로우
        </S.FollowButton>
      ) : (
        <S.FollowButton
          $follow=''
          onClick={() => {
            unfollowMutation.mutate(profile.accountname);
          }}>
          언팔로우
        </S.FollowButton>
      )}
    </>
  );
}
