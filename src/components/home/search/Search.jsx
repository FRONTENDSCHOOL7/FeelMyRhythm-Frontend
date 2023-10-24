// Search.js
import React from 'react';
import * as S from './userProfile.styled';
import UserProfile from './UserProfile';
import ProfileImage1 from '../../../assets/images/home/basic-profile.png';
import ProfileImage2 from '../../../assets/images/home/profile-image2.png';
import ProfileImage3 from '../../../assets/images/home/profile-image3.png';

export default function Search() {
  const userData = [
    {
      src: ProfileImage1,
      alt: 'profile',
      userName: '애월읍 위니브 감귤농장',
      handle: '@weniv_Mandarin'
    },
    {
      src: ProfileImage2,
      alt: 'profile',
      userName: '애월읍 한라봉 최고 맛집',
      handle: '@hanlabong'
    },
    {
      src: ProfileImage3,
      alt: 'profile',
      userName: '감귤의 품격-애월읍',
      handle: '@mandarin_king'
    }
  ];

  return (
    <S.SearchLayout>
      {userData.map((profile, index) => (
        <UserProfile
          key={index}
          src={profile.src}
          alt={profile.alt}
          userName={profile.userName}
          handle={profile.handle}
        />
      ))}
    </S.SearchLayout>
  );
}
