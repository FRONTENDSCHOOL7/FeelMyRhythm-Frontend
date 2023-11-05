import React, { useState } from 'react';
import * as S from './SearchHeader.styled.js';
import { useNavigate } from 'react-router-dom';
import { searchUser } from '../../../../apis/searchUser/searchUser.js';
import { useQuery } from '@tanstack/react-query';

export default function SearchHeader({ setSearchResults }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const { data, error } = useQuery({
    queryFn: () =>
      searchUser(keyword).then((result) => {
        if (keyword.trim() === '') return;
        setSearchResults(result);
        return result;
      }),
    queryKey: [keyword, 'searchUser']
  });

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <S.SearchHeaderLayout>
      <S.ArrowLeftImg onClick={handleBackClick}></S.ArrowLeftImg>
      <S.SearchBox placeholder='계정 검색' value={keyword} onChange={handleInputChange} />
    </S.SearchHeaderLayout>
  );
}
