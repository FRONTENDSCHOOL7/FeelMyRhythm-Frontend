import React from 'react';
import * as S from './tempNavBar.styled';
import arrow from '../../assets/images/home/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import Emoji from './toggleandemoji/emoji/Emoji';

export default function TempNavBar() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <S.SearchHeaderLayout>
      <S.BackArrowButton onClick={handleBackClick}>
        <img src={arrow} alt='Navigate home' />
      </S.BackArrowButton>
      <S.SearchBox placeholder='게시글 검색' />
      <Emoji />
    </S.SearchHeaderLayout>
  );
}
