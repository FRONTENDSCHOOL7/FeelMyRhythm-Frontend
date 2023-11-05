import React, { useState } from 'react';
import * as S from './tempNavBar.styled';
import { useNavigate } from 'react-router-dom';
import SelectBox from '../../../common/SelectBox/SelectBox';
export default function TempNavBar({ setParentContent, setEmojiState }) {
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
      <S.ArrowLeftImg onClick={handleBackClick}></S.ArrowLeftImg>
      <S.SearchBox value={content} onChange={handleInputChange} placeholder='게시글 검색' />
      <SelectBox setEmojiState={setEmojiState} />
    </S.SearchHeaderLayout>
  );
}
