import React from 'react';
import FollowList from '../../components/follow/FollowList';
import styled from 'styled-components';

const ContBox = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export default function Followings() {
  return (
    <ContBox>
      <FollowList />
    </ContBox>
  );
}
