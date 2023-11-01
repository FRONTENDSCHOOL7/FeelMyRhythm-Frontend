import React from 'react';
import * as S from './userProfile.styled';
import SearchUserProfile from './SearchUserProfile';

export default function Search({ searchResults }) {
  const accountname = searchResults.map((profile) => profile.accountname);
  return (
    <S.SearchLayout>
      {searchResults.map((profile, index) => (
        <SearchUserProfile
          key={index}
          src={profile.image}
          alt='profile'
          username={profile.username}
          accountname={profile.accountname}
        />
      ))}
    </S.SearchLayout>
  );
}
