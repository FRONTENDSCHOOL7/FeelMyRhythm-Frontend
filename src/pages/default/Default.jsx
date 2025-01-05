import React, { useEffect } from 'react';
import Default from '../../components/404/Default';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function DefaultPage() {
  const location = window.location.pathname;
  const navigate = useNavigate();

  // useEffect(() => {
  //   location === '/profile' && navigate('/');
  // }, []);
  return (
    <>
      <Default />
    </>
  );
}
