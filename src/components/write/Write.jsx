import React from 'react';
import * as S from './Write.styled';
import imageIcon from '../../images/write/icon-image.svg';

export default function Write() {
  return (
    <S.WriteLayout>
      <S.ImageContent>이미지 등록</S.ImageContent>
      <S.ImageBox>
        <S.ImagePreview />
        <S.ImageAddBtnBg>
          <S.ImageIcon src={imageIcon} />
        </S.ImageAddBtnBg>
      </S.ImageBox>
      <S.Content>상품명</S.Content>
      <S.Input placeholder='2~15자 이내여야 합니다.' />
      <S.Content>가격</S.Content>
      <S.Input placeholder='숫자만 입력 가능합니다.' />
      <S.Content>판매 링크</S.Content>
      <S.Input placeholder='URL을 입력해 주세요.' />
    </S.WriteLayout>
  );
}
