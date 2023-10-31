import React, { useEffect } from 'react';
import ProfileSetting from '../../../components/sign/profileSetting/ProfileSetting';
import { useNavigate } from 'react-router-dom';

export default function ProfileSettingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token && navigate('/home');
  }, []);

  return <ProfileSetting />;
}
