import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandingPage from '../pages/randing/RandingPage';
import Home from '../pages/home/Home';
import SearchPage from '../pages/home/search/SearchPage';
import Chat from '../pages/chat/Chat';
import Write from '../pages/write/Write';
import Profile from '../pages/profile/Profile';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<RandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/search' element={<SearchPage />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/write' element={<Write />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}
