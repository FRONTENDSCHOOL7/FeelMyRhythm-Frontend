import React, { useEffect, useState } from 'react';
import * as S from './ProfileUpdate.styled';
import defaultProfile from '../../../assets/images/sign/default_profile.png';
import imgChange from '../../../assets/images/sign/imgChange.svg';
import { useNavigate } from 'react-router-dom';
import { createAccountNameValid } from '../../../apis/sign/signUpAPI';
import { useMutation } from '@tanstack/react-query';
import { AiOutlineCheck } from 'react-icons/ai';

export default function ProfileUpdate({
  userInfo,
  setUserInfo,
  setImage,
  setWarningAccountName,
  setWarningUserName,
  warningAccountName,
  warningUserName,
  userNameRef,
  accountNameRef,
  setIsButtonState
}) {
  const [base64Image, setBase64Image] = useState('');
  const [accountNameValid, setAccountNameValid] = useState('');
  const { username, accountname, intro } = userInfo.user;

  const navigate = useNavigate();

  // 이미지 생성 onChange
  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files[0].type.includes('image')) {
      actionImgCompress(e.target.files[0]);
    } else {
      alert('파일이 올바르지 않습니다.');
    }
  };

  // 유저 정보 onChagne
  const handleChangeUserInfo = (e, inputName) => {
    inputName === 'username' && setUserInfo({ ...userInfo, user: { ...userInfo.user, username: e.target.value } });
    inputName === 'accountname' &&
      setUserInfo({ ...userInfo, user: { ...userInfo.user, accountname: e.target.value } });
    inputName === 'intro' &&
      setUserInfo({ ...userInfo, user: { ...userInfo.user, intro: 'ms7-3🈳' + e.target.value } });
    console.log(userInfo);
  };

  // 미리보기 이미지 생성
  const actionImgCompress = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
  };

  // 사용자 이름 유효성 검사
  useEffect(() => {
    if (username !== '' && (username.length < 2 || username.length > 10)) {
      setWarningUserName('이름은 2~10자 이내여야 합니다.');
    } else {
      setWarningUserName('');
    }
  }, [userInfo]);

  // 계정 ID 유효성 검사
  useEffect(() => {
    const regpw = /^(?=.*[A-Za-z\d])[A-Za-z\d._]*$/;
    if (accountname !== '' && accountname === accountNameValid) {
      setWarningAccountName('사용 가능한 계정ID 입니다.');
    } else if (accountname !== '' && !regpw.test(accountname)) {
      setWarningAccountName('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
    } else {
      setWarningAccountName('');
    }
  }, [userInfo]);

  // 계정 ID 중복확인
  const onClickAccountNameValid = (e) => {
    e.preventDefault();
    if (accountname !== '' && warningAccountName === '') {
      mutateAccountNameValid({ user: { accountname } });
    }
  };

  // 계정 ID 중복확인 API
  const { mutate: mutateAccountNameValid } = useMutation({
    mutationFn: createAccountNameValid,
    onSuccess: ({ message }) => {
      setWarningAccountName(message);
      message === '사용 가능한 계정ID 입니다.' && setAccountNameValid(accountname);
    }
  });

  // 유효성 검사에 따른 버튼 색상 변경
  useEffect(() => {
    if (
      username !== '' &&
      (username.length > 1 || username.length < 11) &&
      warningAccountName === '사용 가능한 계정ID 입니다.' &&
      warningUserName !== '이름은 2~10자 이내여야 합니다.'
    ) {
      setIsButtonState(true);
      return;
    } else {
      setIsButtonState(false);
    }
  }, [userInfo, warningUserName, warningAccountName]);

  return (
    <S.ProfileSettingLayout>
      <S.ImgBox>
        <S.ProfileImg src={base64Image || defaultProfile} />
        <label htmlFor='imgChange'>
          <S.ChangeImg src={imgChange} />
        </label>
        <input style={{ display: 'none' }} type='file' id='imgChange' onChange={(e) => handleChangeImage(e)} />
      </S.ImgBox>

      <S.InputBox>
        <S.SubContent>사용자 이름</S.SubContent>
        <S.Input
          type='text'
          placeholder='2~10자 이내여야 합니다.'
          ref={userNameRef}
          value={username}
          onChange={(e) => handleChangeUserInfo(e, 'username')}
        />
      </S.InputBox>
      <S.WarningContent>{warningUserName}</S.WarningContent>

      <S.NonPaddingInputBox>
        <S.SubContent>계정 ID</S.SubContent>
        <S.CheckBox>
          <S.Input
            type='text'
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능'
            ref={accountNameRef}
            value={accountname}
            onChange={(e) => handleChangeUserInfo(e, 'accountname')}
          />
          <S.CheckaccountButton
            valid={warningAccountName === '사용 가능한 계정ID 입니다.' ? 'success' : 'none'}
            onClick={(e) => onClickAccountNameValid(e)}>
            {warningAccountName === '사용 가능한 계정ID 입니다.' ? <AiOutlineCheck /> : '중복 확인'}
          </S.CheckaccountButton>
        </S.CheckBox>
      </S.NonPaddingInputBox>
      <S.WarningContent valid={warningAccountName}>{warningAccountName}</S.WarningContent>

      <S.NonPaddingInputBox>
        <S.SubContent>소개</S.SubContent>
        <S.Input
          type='text'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          onChange={(e) => handleChangeUserInfo(e, 'intro')}
        />
      </S.NonPaddingInputBox>
    </S.ProfileSettingLayout>
  );
}
