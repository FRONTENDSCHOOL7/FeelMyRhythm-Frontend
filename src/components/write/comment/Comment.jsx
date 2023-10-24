import React from 'react';
import * as S from './Comment.styled';
import profile from '../../../assets/images/write/Ellipse 4.png';

export default function Comment() {
  return (
    <S.CommentLayout>
      <S.CommentList>
        <S.CommentBox>
          <S.CommentInfo>
            <S.ProfileImg src={profile} />
            <S.TitleP>서귀포시 무슨 농장</S.TitleP>
            <S.Time>5분전</S.Time>
            <S.MoreBtn />
          </S.CommentInfo>
          <S.CommentP>게시글 답글 ~~ !! 최고최고</S.CommentP>
        </S.CommentBox>
      </S.CommentList>
    </S.CommentLayout>
  );
}
