import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar/NavBar';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../components/profile/ProfileInfo/ProfileInfo';
import ProfilePlayList from '../../components/profile/PlayList/ProfilePlayList';
import ProfilePostList from '../../components/profile/PostList/ProfilePostList';
import { useNavigate } from 'react-router-dom';

const ContBox = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
`;

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <ContBox>
      <NavBar />
      <ProfileInfo />
      <ProfilePlayList />
      <ProfilePostList />
      <TabMenu />
    </ContBox>
  );
}
