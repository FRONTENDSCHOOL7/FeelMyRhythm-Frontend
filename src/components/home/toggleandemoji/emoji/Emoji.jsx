import React, { useState, useEffect } from 'react';
import * as S from './emoji.styled';

export default function Emoji() {
  const [isEmotionActive, setIsEmotionActive] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState('🤔선택');

  const arrayEmotions = ['전체', '😆', '😠', '😭'];
  const handleButtonClick = () => {
    console.log('버튼 클릭, isEmotionActive 상태:', !isEmotionActive);
    setIsEmotionActive(!isEmotionActive);
  };

  const handleListItemClick = (emotion) => {
    setSelectedEmotion(emotion);
    setIsEmotionActive(false);
  };
  console.log('렌더링...', { isEmotionActive });

  return (
    <S.EmojiBox>
      <S.ButtonSelected onClick={handleButtonClick} isActive={isEmotionActive}>
        {selectedEmotion}
      </S.ButtonSelected>

      <S.Ul isEmotionActive={isEmotionActive}>
        {arrayEmotions.map((emotion, index) => (
          <S.Li key={index} onClick={() => handleListItemClick(emotion)}>
            <S.ButtonSelect type='button'>{emotion}</S.ButtonSelect>
          </S.Li>
        ))}
      </S.Ul>
    </S.EmojiBox>
  );
}
