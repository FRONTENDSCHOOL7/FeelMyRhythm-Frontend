import React from 'react';
import * as S from './userProfile.styled';

function UserProfile({ src, alt, userName, handle, color }) {
  return (
    <S.AboutUserBox>
      <S.StyledProfileImg src={src} alt={alt} />
      <S.UserInfoBox>
        <S.H2 color={color}>{userName}</S.H2>
        <S.H3>{handle}</S.H3>
      </S.UserInfoBox>
    </S.AboutUserBox>
  );
}

export default UserProfile;
