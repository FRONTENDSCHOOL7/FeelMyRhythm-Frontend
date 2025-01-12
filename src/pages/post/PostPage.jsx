import React, { useEffect } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import PostDetail from '../../components/post/PostDetail';
import Comment from '../../components/post/comments/Comment';
import CommentWrite from '../../components/post/comments/CommentWrite';
import * as S from './PostPage.styled';
import { useNavigate } from 'react-router-dom';
import CommentList from '../../components/post/comments/CommentList';

export default function PostPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  return (
    <S.PostLayout>
      <NavBar />
      <PostDetail />
      <CommentList />
      <CommentWrite />
    </S.PostLayout>
  );
}
