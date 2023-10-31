import React, { useState, useEffect } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import ToggleAndEmoji from '../../components/home/toggleandemoji/ToggleAndEmoji';
import EntirePosts from '../../components/home/EntirePosts';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import FollowStatus from '../../components/home/followstatus/FollowStatus';
import * as S from './home.styled';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <S.HomeLayout>
      <NavBar isToggled={isToggled} />
      <ToggleAndEmoji setIsToggled={setIsToggled} />
      {isToggled ? <FollowStatus /> : <EntirePosts />}
      <TabMenu />
    </S.HomeLayout>
  );
}
