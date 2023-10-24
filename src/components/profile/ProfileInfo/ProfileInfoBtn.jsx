import React, { useState } from 'react';
import * as S from './ProfileInfo.styled';

export default function ProfileInfoBtn() {
  const [follow, setFollow] = useState(true);

  return (
    <>
      {/* <S.IconButton></S.IconButton> */}
      {follow ? (
        <S.FollowButton $follow='true' onClick={() => setFollow(!follow)}>
          팔로우
        </S.FollowButton>
      ) : (
        <S.FollowButton $follow='' onClick={() => setFollow(!follow)}>
          언팔로우
        </S.FollowButton>
      )}
      {/* <S.IconButton></S.IconButton> */}
    </>
  );
}
