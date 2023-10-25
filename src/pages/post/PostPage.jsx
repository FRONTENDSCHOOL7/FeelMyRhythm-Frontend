import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import PostDetail from '../../components/post/PostDetail';
import Comment from '../../components/post/comments/Comment';
import CommentWrite from '../../components/post/comments/CommentWrite';
import * as S from './PostPage.styled';

export default function PostPage() {
  return (
    <S.PostLayout>
      <NavBar />
      <PostDetail />
      <Comment />
      <CommentWrite />
    </S.PostLayout>
  );
}
