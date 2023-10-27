import React, { useState, useEffect } from 'react';
import * as S from './emoji.styled';

export default function Emoji() {
  const [isActive, setIsActive] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState('🤔선택');

  const arrayEmotions = ['전체', '😆', '😠', '😭'];
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  const handleListItemClick = (emotion) => {
    setSelectedEmotion(emotion);
    setIsActive(false);
  };
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <S.EmojiBox>
      <S.ButtonSelected onClick={handleButtonClick} isActive={isActive}>
        {selectedEmotion}
      </S.ButtonSelected>

      <S.Ul isActive={isActive}>
        {arrayEmotions.map((emotion, index) => (
          <S.Li key={index} onClick={() => handleListItemClick(emotion)}>
            <S.ButtonSelect type='button'>{emotion}</S.ButtonSelect>
          </S.Li>
        ))}
      </S.Ul>
    </S.EmojiBox>
  );
}
