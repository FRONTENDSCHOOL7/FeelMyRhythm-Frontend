import React from 'react';
import * as S from './SearchHeader.styled.js';
import arrow from '../../../images/home/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/home');
  };
  return (
    <S.SearchHeaderLayout>
      <S.BackArrowButton onClick={handleSearchClick}>
        <img src={arrow} alt='back' />
      </S.BackArrowButton>
      <S.SearchBox placeholder='계정 검색'></S.SearchBox>
    </S.SearchHeaderLayout>
  );
}
