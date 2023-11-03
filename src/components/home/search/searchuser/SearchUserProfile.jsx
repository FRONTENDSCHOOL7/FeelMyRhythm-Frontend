import React from 'react';
import * as S from './userProfile.styled';
import { useNavigate } from 'react-router-dom';

function SearchUserProfile({ src, alt, username, accountname }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <S.AboutUserBox onClick={handleProfileClick}>
      <S.StyledProfileImg src={src} alt={alt} />
      <S.UserInfoBox>
        <S.H2>{username}</S.H2>
        <S.H3>{accountname}</S.H3>
      </S.UserInfoBox>
    </S.AboutUserBox>
  );
}

export default SearchUserProfile;
