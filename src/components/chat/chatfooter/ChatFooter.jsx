import React, { useState } from 'react';
import * as S from './chatfooter.styled';
import img from '../../../images/chat/img-button.png';

export default function ChatFooter({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <S.ChatFooterLayout>
      <S.ImgButton>
        <img src={img} alt='img' />
      </S.ImgButton>
      <S.Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='메시지를 입력하세요'
      />
      <S.SendButton active={inputValue.length > 0} onClick={handleSend}>
        전송
      </S.SendButton>
    </S.ChatFooterLayout>
  );
}
