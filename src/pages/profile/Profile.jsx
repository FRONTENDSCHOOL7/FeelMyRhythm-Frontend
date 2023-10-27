import React, { useState, useEffect } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../components/profile/ProfileInfo/ProfileInfo';
import ProfilePlayList from '../../components/profile/PlayList/ProfilePlayList';
import ProfilePostList from '../../components/profile/PostList/ProfilePostList';
// import ProfileModal from '../../components/profile/ProfileModal';
import styled from 'styled-components';
import { readAccountInfo } from '../../apis/profile/accountInfoAPI';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

const ContBox = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export default function Profile() {
  const [cnt, setCnt] = useState(0);
  const navigate = useNavigate();
  const { accountname } = useParams();
  // const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({});
  const { data, error } = useQuery({
    queryFn: () =>
      readAccountInfo(accountname).then((res) => {
        setProfile(res.profile);
        console.log(res);
        return res;
      }),
    queryKey: ['accountInfo']
  });

  return (
    <ContBox>
      <NavBar />
      <ProfileInfo profile={profile} />
      <ProfilePlayList profile={profile} />
      <ProfilePostList profile={profile} />
      <TabMenu />
    </ContBox>
  );
}
