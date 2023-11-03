import React, { useEffect } from 'react';
import Randing from '../../components/randing/Randing';
import { useNavigate } from 'react-router-dom';

export default function RandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token && navigate('/home');
  }, []);

  return (
    <>
      <Randing />
    </>
  );
}
