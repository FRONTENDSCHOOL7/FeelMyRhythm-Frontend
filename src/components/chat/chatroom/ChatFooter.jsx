import React, { useState } from 'react';
import * as S from './chatfooter.styled';
import img from '../../../assets/images/chat/img-button.png';

export default function ChatFooter({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');
  let fileInput = React.createRef();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue, 'text');
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onSendMessage(e.target.result, 'image');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.ChatFooterLayout>
      <S.TempBox>
        <S.ImgButton onClick={() => fileInput.current.click()}>
          <img src={img} alt='img' />
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            ref={fileInput}
            onChange={handleImageChange}
          />
        </S.ImgButton>
        <S.Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder='메시지를 입력하세요'
        />
      </S.TempBox>
      <S.SendButton active={inputValue.length > 0} onClick={handleSend}>
        전송
      </S.SendButton>
    </S.ChatFooterLayout>
  );
}
