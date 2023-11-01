import React, { useState, useEffect } from 'react';
import * as S from './SelectBox.styled';
import { FaRegSmile } from 'react-icons/fa';
import { FaRegFaceAngry } from 'react-icons/fa6';
import { FaRegSadTear } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { atomEmotionState } from '../../../store/store';

export default function SelectBox() {
  const [isEmotionActive, setIsEmotionActive] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useRecoilState(atomEmotionState);

  const arrayEmotions = ['전체', 'smile', 'angry', 'sad'];
  const handleButtonClick = () => {
    setIsEmotionActive(!isEmotionActive);
  };

  const handleListItemClick = (emotion) => {
    setSelectedEmotion(emotion);
    setIsEmotionActive(false);
  };

  return (
    <S.SelectBox>
      <S.ButtonSelected onClick={handleButtonClick} isActive={isEmotionActive}>
        {String(selectedEmotion) === '선택' && '선택'}
        {String(selectedEmotion) === '전체' && '전체'}
        {String(selectedEmotion) === 'smile' && <FaRegSmile />}
        {String(selectedEmotion) === 'angry' && <FaRegFaceAngry />}
        {String(selectedEmotion) === 'sad' && <FaRegSadTear />}
      </S.ButtonSelected>

      <S.Ul isEmotionActive={isEmotionActive}>
        {arrayEmotions.map((emotion, index) => (
          <S.Li key={index} onClick={() => handleListItemClick(emotion)}>
            <S.ButtonSelect type='button'>
              {String(emotion) === '전체' && '전체'}
              {String(emotion) === 'smile' && <FaRegSmile />}
              {String(emotion) === 'angry' && <FaRegFaceAngry />}
              {String(emotion) === 'sad' && <FaRegSadTear />}
            </S.ButtonSelect>
          </S.Li>
        ))}
      </S.Ul>
    </S.SelectBox>
  );
}
