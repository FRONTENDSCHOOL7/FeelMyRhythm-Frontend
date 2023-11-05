import React, { useEffect, useRef, useState } from 'react';
import ProfileUpdate from '../../components/profile/ProfileInfo/ProfileUpdate';
import NavBar from '../../components/common/NavBar/NavBar';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../store/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../../apis/profile/myInfoAPI';
import { useNavigate } from 'react-router';
import { createImage } from '../../apis/sign/signUpAPI';

export default function ProfileUpdatePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const myInfo = useRecoilValue(atomMyInfo);

  const [userInfo, setUserInfo] = useState({
    user: { username: '', accountname: '', intro: '', image: '' }
  });

  const [image, setImage] = useState('');

  const [warningUserName, setWarningUserName] = useState('');
  const [warningAccountName, setWarningAccountName] = useState('');

  const userNameRef = useRef(null);
  const accountNameRef = useRef(null);

  const [isButtonState, setIsButtonState] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  useEffect(() => {
    if (myInfo)
      setUserInfo({
        ...userInfo,
        user: {
          ...userInfo.user,
          username: myInfo.username,
          accountname: myInfo.accountname,
          intro: myInfo.intro,
          image: myInfo.image
        }
      });
  }, [myInfo]);

  const { username, accountname } = userInfo.user;

  // 프로필 수정 API
  const { mutate: mutateUpdateProfile } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries('userInfo');
      navigate(`/profile/${accountname}`);
    }
  });

  // 이미지 생성 API
  const { mutate: mutateCreateImage } = useMutation({
    mutationFn: createImage,
    onSuccess: (imageURL) => {
      const updateUserInfo = {
        ...userInfo,
        user: { ...userInfo.user, image: imageURL }
      };

      setUserInfo(updateUserInfo);

      setTimeout(() => {
        mutateUpdateProfile(updateUserInfo);
      }, 0);
    },
    onError: () => {}
  });

  // onSubmit 회원가입
  const handleSubmit = async () => {
    let form = new FormData();
    form.append('image', image);

    if (username === '' || warningUserName !== '') {
      userNameRef.current.focus();
      return;
    }
    if (accountname === '' || warningAccountName !== '사용 가능한 계정ID 입니다.') {
      accountNameRef.current.focus();
      return;
    }
    if (warningAccountName === '사용 가능한 계정ID 입니다.' && warningUserName === '' && username !== '') {
      if (image !== '') {
        mutateCreateImage(form);
        return;
      }
      mutateUpdateProfile(userInfo);
    }
  };

  return (
    <>
      <div style={{ width: '100vw' }}>
        <NavBar onProfileUpdate={handleSubmit} profileBtnState={isButtonState} />
        <ProfileUpdate
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setImage={setImage}
          setWarningUserName={setWarningUserName}
          setWarningAccountName={setWarningAccountName}
          warningAccountName={warningAccountName}
          warningUserName={warningUserName}
          userNameRef={userNameRef}
          accountNameRef={accountNameRef}
          setIsButtonState={setIsButtonState}
        />
      </div>
    </>
  );
}
