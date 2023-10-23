import React, { useState } from 'react';
import ProfileNav from '../../components/profile/Profile';
import Footer from '../../components/common/Footer/Footer';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfilePlayList from '../../components/profile/ProfilePlayList';
import ProfilePostList from '../../components/profile/ProfilePostList';
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
      <ProfileNav modal={modal} setModal={setModal} />
      <ProfileInfo />
      <ProfilePlayList />
      <ProfilePostList />
      <Footer />
      {modal ? <ProfileModal /> : ''}
    </ContBox>
  );
}
