import React, { useEffect, useState } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import FollowList from '../../components/follow/FollowList';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { readFollowers } from '../../apis/profile/followersAPI';

const ContBox = styled.div`
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding-top: 72px;
`;

export default function Followers() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  const [followers, setFollowers] = useState([]);
  const { accountname } = useParams();
  const { data, err } = useQuery({
    queryFn: () =>
      readFollowers(accountname).then((res) => {
        setFollowers(res);
        return res;
      }),
    queryKey: ['followers']
  });

  return (
    <>
      <NavBar />
      <ContBox>
        {followers.map((v, i) => (
          <FollowList key={i} data={v} />
        ))}
      </ContBox>
    </>
  );
}
