import React, { useState } from 'react';
import * as S from './tempNavBar.styled';
import arrow from '../../assets/images/home/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import Emoji from './toggleandemoji/emoji/Emoji';

export default function TempNavBar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <S.SearchHeaderLayout>
      <S.BackArrowButton onClick={handleBackClick}>
        <img src={arrow} alt='back' />
      </S.BackArrowButton>
      <S.SearchBox placeholder='게시글 검색' value={keyword} onChange={handleInputChange} />
      <Emoji />
    </S.SearchHeaderLayout>
  );
}
