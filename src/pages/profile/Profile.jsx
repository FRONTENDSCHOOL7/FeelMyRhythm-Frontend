import React, { useState } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../components/profile/ProfileInfo/ProfileInfo';
import ProfilePlayList from '../../components/profile/PlayList/ProfilePlayList';
import ProfilePostList from '../../components/profile/PostList/ProfilePostList';
import ProfileModal from '../../components/profile/ProfileModal';
import styled from 'styled-components';

const ContBox = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export default function Profile() {
  const [modal, setModal] = useState(false);
  return (
    <ContBox>
      <NavBar />
      {/* <ProfileNav modal={modal} setModal={setModal} /> */}
      <ProfileInfo />
      <ProfilePlayList />
      <ProfilePostList />
      <TabMenu />
      {modal ? <ProfileModal /> : ''}
    </ContBox>
  );
}
