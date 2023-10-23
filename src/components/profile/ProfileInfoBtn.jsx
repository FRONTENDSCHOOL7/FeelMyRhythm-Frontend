import React, {useState} from 'react';
import * as S from './ProfileInfo.styled';
import iconChat from '../../images/profile/icon-chat.svg';
import iconShare from '../../images/profile/icon-share.svg';

export default function ProfileInfoBtn() {
  const [follow, setFollow] = useState(true);

  return (
    <>
      <S.IconButton>
        <img src={iconChat}></img>
      </S.IconButton>
      {follow ? (
        <S.FollowButton $follow='true' onClick={() => setFollow(!follow)}>
          팔로우
        </S.FollowButton>
      ) : (
        <S.FollowButton $follow='' onClick={() => setFollow(!follow)}>
          언팔로우
        </S.FollowButton>
      )}
      <S.IconButton>
        <img src={iconShare}></img>
      </S.IconButton>
    </>
  );
}
