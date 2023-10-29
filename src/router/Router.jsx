import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandingPage from '../pages/randing/RandingPage';
import Home from '../pages/home/Home';
import SearchPage from '../pages/home/search/SearchPage';
import Chat from '../pages/chat/Chat';
import ChatRoom from '../pages/chat/ChatRoom';
import Write from '../pages/write/WritePage';
import Profile from '../pages/profile/Profile';
import Followers from '../pages/followers/Followers';
import Followings from '../pages/followings/Followings';
import SignUpPage from '../pages/sign/signUp/SignUpPage';
import ProfileSettingPage from '../pages/sign/signUp/ProfileSettingPage';
import SignInPage from '../pages/sign/signIn/SignInPage';
import Default from '../pages/default/Default';
import Post from '../pages/post/PostPage';
import YoutubeSearch from '../pages/write/YoutubeSearchPage';
import YoutubeVideoDetail from '../pages/write/YoutubeVideoDetail';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<RandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/search' element={<SearchPage />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/chat/:accountname' element={<ChatRoom />} />
      <Route path='/write' element={<Write />} />
      <Route path='/profile/:accountname' element={<Profile />} />
      <Route path='/profile/:accountname/follower' element={<Followers />} />
      <Route path='/profile/:accountname/following' element={<Followings />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/profilesetting' element={<ProfileSettingPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/post' element={<Post />} />
      <Route path='/*' element={<Default />} />
      <Route path='youtubesearch' element={<YoutubeSearch />} />
      <Route path='youtubesearch/:id' element={<YoutubeVideoDetail />} />
    </Routes>
  );
}
