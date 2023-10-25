import React from 'react';
import * as S from './userProfile.styled';
import UserProfile from './UserProfile';

export default function Search({ searchResults }) {
  const displayData = searchResults.length ? searchResults : searchResults;

  return (
    <S.SearchLayout>
      {displayData.map((profile, index) => (
        <UserProfile
          key={index}
          src={profile.image}
          alt='profile'
          userName={profile.username}
          handle={profile.accountname}
        />
      ))}
    </S.SearchLayout>
  );
}
