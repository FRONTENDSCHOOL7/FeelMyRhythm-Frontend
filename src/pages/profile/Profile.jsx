import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar/NavBar';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../components/profile/ProfileInfo/ProfileInfo';
import ProfilePlayList from '../../components/profile/PlayList/ProfilePlayList';
import ProfilePostList from '../../components/profile/PostList/ProfilePostList';

const ContBox = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export default function Profile() {
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
