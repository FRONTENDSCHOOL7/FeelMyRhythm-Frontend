import React from 'react';
import {Route, Routes} from 'react-router-dom';
import RandingPage from '../pages/randing/RandingPage';
import Home from '../pages/home/Home';
import Chat from '../pages/chat/Chat';
import Write from '../pages/write/Write';
import Profile from '../pages/profile/Profile';
import SignUpPage from '../pages/sign/signUp/SignUpPage';
import ProfileSettingPage from '../pages/sign/signUp/ProfileSettingPage';
import SignInPage from '../pages/sign/signIn/SignInPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<RandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/write' element={<Write />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/profilesetting' element={<ProfileSettingPage />} />
      <Route path='/signin' element={<SignInPage />} />
    </Routes>
  );
}
