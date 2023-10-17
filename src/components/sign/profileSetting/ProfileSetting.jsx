import React from 'react';
import * as S from './profileSetting.styled';
import defaultProfile from '../../../images/sign/default_profile.png';
import imgChange from '../../../images/sign/imgChange.svg';
import {useNavigate} from 'react-router-dom';

export default function ProfileSetting() {
  const navigate = useNavigate();

  const handleSubmit = (location) => {
    navigate(`/${location}`);
  };

  return (
    <S.ProfileSettingLayout onSubmit={() => handleSubmit('home')}>
      <S.Title>프로필 설정</S.Title>
      <S.SubTitle mydata='mydata'>나중에 언제든지 변경할 수 있습니다.</S.SubTitle>

      <S.ImgBox>
        <S.ProfileImg src={defaultProfile} />
        <label for='imgChange'>
          <S.ChangeImg src={imgChange} />
        </label>
        <input style={{display: 'none'}} type='file' id='imgChange' />
      </S.ImgBox>

      <S.InputBox>
        <S.SubContent>사용자 이름</S.SubContent>
        <S.Input type='text' placeholder='2~10자 이내여야 합니다.' />
      </S.InputBox>
      <S.WarningContent>*이름은 2~10자 이내여야 합니다.</S.WarningContent>

      <S.InputBox>
        <S.SubContent>계정 ID</S.SubContent>
        <S.Input type='text' placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.' />
      </S.InputBox>
      <S.WarningContent>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</S.WarningContent>

      <S.InputBox>
        <S.SubContent>소개</S.SubContent>
        <S.Input type='text' placeholder='자신과 판매할 상품에 대해 소개해 주세요!' />
      </S.InputBox>

      <S.Button>감귤마켓 시작하기</S.Button>
    </S.ProfileSettingLayout>
  );
}
