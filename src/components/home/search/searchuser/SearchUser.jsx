import React from 'react';
import * as S from './userProfile.styled';
import SearchUserProfile from './SearchUserProfile';
export default function Search({ searchResults }) {
  return (
    <S.SearchLayout>
      {searchResults
        .filter((profile) => String(profile.intro).split('🈳')[0] === 'ms7-3')
        .map((profile, index) => (
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
