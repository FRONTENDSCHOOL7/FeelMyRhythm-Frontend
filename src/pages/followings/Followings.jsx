import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import FollowList from '../../components/follow/FollowList';
import styled from 'styled-components';

const ContBox = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export default function Followings() {
  return (
    <ContBox>
      <NavBar />
      <FollowList />
    </ContBox>
  );
}
