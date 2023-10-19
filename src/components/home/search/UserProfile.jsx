import React from 'react';
import * as S from './userProfile.styled';

function UserProfile({ src, alt, userName, handle }) {
  return (
    <S.AboutUserBox>
      <S.StyledProfileImg src={src} alt={alt} />
      <S.UserInfoBox>
        <S.H2>{userName}</S.H2>
        <S.H3>{handle}</S.H3>
      </S.UserInfoBox>
    </S.AboutUserBox>
  );
}

export default UserProfile;
