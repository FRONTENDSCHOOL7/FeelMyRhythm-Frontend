import React from 'react';
import * as S from './userProfile.styled';
import UserProfile from './SearchUserProfile';

export default function Search({ searchResults }) {
  const usernames = searchResults.map((profile) => profile.username);
  return (
    <S.SearchLayout>
      {searchResults.map((profile, index) => (
        <UserProfile
          key={index}
          src={profile.image}
          alt='profile'
          userName={profile.username}
          handle={profile.accountname}
          color={usernames.includes(profile.username) ? 'orange' : '#000'}
        />
      ))}
    </S.SearchLayout>
  );
}
