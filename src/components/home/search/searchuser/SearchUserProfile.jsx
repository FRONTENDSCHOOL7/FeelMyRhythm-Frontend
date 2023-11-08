import React from 'react';
import * as S from './userProfile.styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as StandardProfileImg } from '../../../../../src/assets/images/common/basic-profile.svg';
function SearchUserProfile({ src, alt, username, accountname }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${accountname}`);
  };

  // 기본 이미지로 대체하기 위한 조건
  const ProfileImage = src === 'http://146.56.183.55:5050/Ellipse.png' ? StandardProfileImg : 'img';

  return (
    <S.AboutUserBox onClick={handleProfileClick}>
      {src === 'http://146.56.183.55:5050/Ellipse.png' ? (
        <S.SvgContainer>
          <StandardProfileImg alt={alt} />
        </S.SvgContainer>
      ) : (
        <S.StyledProfileImg src={src} alt={alt} />
      )}
      <S.UserInfoBox>
        <S.H2>{username}</S.H2>
        <S.H3>{accountname}</S.H3>
      </S.UserInfoBox>
    </S.AboutUserBox>
  );
}

export default SearchUserProfile;
