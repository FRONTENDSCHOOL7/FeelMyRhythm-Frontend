import React, { useState } from 'react';
import * as S from './tempNavBar.styled';
import arrow from '../../../../assets/images/home/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import Emoji from '././../../toggleandemoji/emoji/Emoji';

export default function TempNavBar({ setParentContent }) {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleBackClick = () => {
    navigate('/home');
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setContent(inputValue);
    setParentContent(inputValue);
  };

  return (
    <S.SearchHeaderLayout>
      <S.BackArrowButton onClick={handleBackClick}>
        <img src={arrow} alt='Navigate home' />
      </S.BackArrowButton>
      <S.SearchBox value={content} onChange={handleInputChange} placeholder='게시글 검색' />
      <Emoji />
    </S.SearchHeaderLayout>
  );
}
