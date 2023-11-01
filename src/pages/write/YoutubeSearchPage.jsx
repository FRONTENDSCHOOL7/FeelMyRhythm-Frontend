import React, { useEffect, useState } from 'react';
import YoutubeSearch from '../../components/write/YoutubeSearch';
import Header from '../../components/common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

export default function YoutubeSearchPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <Header />
      <YoutubeSearch />
    </div>
  );
}
