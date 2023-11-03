import React, { useEffect } from 'react';
import SignUp from '../../../components/sign/signUp/SignUp';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token && navigate('/home');
  }, []);

  return <SignUp />;
}
