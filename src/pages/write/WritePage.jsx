import React from 'react';
<<<<<<< HEAD
import NavBar from '../../components/common/NavBar/NavBar';
=======
import Header from '../../components/common/Header/Header';
>>>>>>> e857b6d4a68b506ca9c1f5106e2bb124841b2252
import Main from '../../components/write/comment/Main';
import WriteComment from '../../components/write/comment/Comment';
import CommentWrite from '../../components/write/comment/CommentWrite';
import * as S from './WritePage.styled';

export default function WritePage() {
  return (
    <S.WriteLayout>
<<<<<<< HEAD
      <NavBar />
=======
      <Header />
      <Main />
>>>>>>> e857b6d4a68b506ca9c1f5106e2bb124841b2252
      <WriteComment />
      <CommentWrite />
    </S.WriteLayout>
  );
}
