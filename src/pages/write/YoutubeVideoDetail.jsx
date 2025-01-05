import React, { useEffect } from 'react';
import VideoDetail from '../../components/write/VideoDetail';
import Header from '../../components/common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

export default function YoutubeVideoDetail() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  return (
    <>
      <Header />
      <VideoDetail />
    </>
  );
}
