import React, { useEffect, useState } from 'react';
import YoutubeSearch from '../../components/write/YoutubeSearch';
import Header from '../../components/common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function YoutubeSearchPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  return (
    <YoutubeSearchLayout>
      <Header />
      <YoutubeSearch />
    </YoutubeSearchLayout>
  );
}

export const YoutubeSearchLayout = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100vh;
`;
