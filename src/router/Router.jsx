import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandingPage from '../pages/randing/RandingPage';
import Home from '../pages/home/Home';
import SearchUserPage from '../pages/home/search/SearchUserPage';
import SearchPostPage from '../pages/home/search/SearchPostPage';
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
import ProfileUpdatePage from '../pages/profile/ProfileUpdatePage';
import Emotion from '../pages/emotion/Emotion';

import styled from 'styled-components';
import EmotionResult from '../components/emotion/EmotionResult';

export default function AppRouter() {
  return (
    <Container>
      <App>
        <Routes>
          <Route path='/' element={<RandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/searchuser' element={<SearchUserPage />} />
          <Route path='/home/searchpost' element={<SearchPostPage />} />
          <Route path='/emotion' element={<Emotion />} />
          <Route path='/emotion/result' element={<EmotionResult />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/chat/:accountname' element={<ChatRoom />} />
          <Route path='/write' element={<Write />} />
          <Route path='/profile/update' element={<ProfileUpdatePage />} />
          <Route path='/profile/:accountname' element={<Profile />} />
          <Route path='/profile/:accountname/follower' element={<Followers />} />
          <Route path='/profile/:accountname/following' element={<Followings />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profilesetting' element={<ProfileSettingPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/*' element={<Default />} />
          <Route path='youtubesearch' element={<YoutubeSearch />} />
          <Route path='youtubesearch/:id' element={<YoutubeVideoDetail />} />
        </Routes>
      </App>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const App = styled.div`
  max-width: 767px;
`;
