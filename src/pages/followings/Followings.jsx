import React, { useState } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import FollowList from '../../components/follow/FollowList';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { readFollowings } from '../../apis/profile/followingsAPI';

const ContBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding-top: 72px;
`;

export default function Followings() {
  const [followings, setFollowings] = useState([]);
  const { accountname } = useParams();
  const { data, err } = useQuery({
    queryFn: () =>
      readFollowings(accountname).then((res) => {
        setFollowings(res);
        return res;
      }),
    queryKey: ['followings']
  });
  return (
    <>
      <NavBar />
      <ContBox>
        {followings.map((v, i) => (
          <FollowList key={i} data={v} />
        ))}
      </ContBox>
    </>
  );
}
