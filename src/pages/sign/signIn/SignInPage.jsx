import React, { useEffect } from 'react';
import SignIn from '../../../components/sign/signIn/SignIn';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token && navigate('/home');
  }, []);

  return <SignIn />;
}
