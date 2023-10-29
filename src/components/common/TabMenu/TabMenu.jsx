import React, { useEffect, useState } from 'react';
import * as S from './TabMenu.styled';
import { atomMyInfo } from '../../../store/store';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TabMenu() {
  const user = useRecoilValue(atomMyInfo);
  const [btnActiveState, setBtnActiveState] = useState('home');
  const navigate = useNavigate();
  const uselocation = useLocation();

  console.log(btnActiveState);

  // 새로고침 예외처리
  useEffect(() => {
    uselocation.pathname === '/home' && setBtnActiveState('home');
    uselocation.pathname === '/chat' && setBtnActiveState('chat');
    uselocation.pathname === '/write' && setBtnActiveState('write');
    uselocation.pathname.includes('/profile/') && setBtnActiveState('profile');
  }, [uselocation]);

  // 버튼 상태 변경, 라우팅
  const handleClickState = (btnName) => {
    setBtnActiveState(btnName);
    if (btnName === 'profile') navigate(`/${btnName}/${user.accountname}`);
    else navigate(`/${btnName}`);
  };

  return (
    <S.FooterLayout>
      <S.HomeBox
        onClick={() => {
          handleClickState('home');
        }}
        $isActive={btnActiveState === 'home' ? 'home' : 'none'}>
        <S.HomeImg $isActive={btnActiveState === 'home' ? 'home' : 'none'} />홈
      </S.HomeBox>
      <S.ChatBox
        onClick={() => {
          handleClickState('chat');
        }}
        $isActive={btnActiveState === 'chat' ? 'chat' : 'none'}>
        <S.ChatImg $isActive={btnActiveState === 'chat' ? 'chat' : 'none'} />
        채팅
      </S.ChatBox>
      <S.WriteBox
        onClick={() => {
          handleClickState('write');
        }}
        $isActive={btnActiveState === 'write' ? 'write' : 'none'}>
        <S.WriteImg $isActive={btnActiveState === 'write' ? 'write' : 'none'} />
        게시물 작성
      </S.WriteBox>
      <S.ProfileBox
        onClick={() => {
          handleClickState('profile');
        }}
        $isActive={btnActiveState === 'profile' ? 'profile' : 'none'}>
        <S.ProfileImg $isActive={btnActiveState === 'profile' ? 'profile' : 'none'} />
        프로필
      </S.ProfileBox>
    </S.FooterLayout>
  );
}
