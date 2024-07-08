import React, { useState } from 'react';
import * as S from './register.styled';
import basicProfile from '../../../assets/images/common/basic-profile.svg';
import imgChange from '../../../assets/images/write/upload.svg';

export default function ProfileImage({ setImage }) {
  const [base64Image, setBase64Image] = useState('');

  // 이미지 생성 onChange
  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files[0].type.includes('image')) {
      actionImgCompress(e.target.files[0]);
    } else {
      alert('파일이 올바르지 않습니다.');
    }
  };

  // 미리보기 이미지 생성
  const actionImgCompress = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
  };

  return (
    <S.ImgBox>
      <S.ProfileImg src={base64Image || basicProfile} />
      <label htmlFor='imgChange'>
        <S.ChangeImgBox>
          <S.ChangeImg src={imgChange} />
        </S.ChangeImgBox>
      </label>
      <input
        style={{ display: 'none' }}
        accept='image/*'
        type='file'
        id='imgChange'
        onChange={(e) => handleChangeImage(e)}
      />
    </S.ImgBox>
  );
}
