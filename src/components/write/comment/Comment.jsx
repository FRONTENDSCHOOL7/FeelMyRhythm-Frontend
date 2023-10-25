import React from 'react';
import * as S from './Comment.styled';
import profile1 from '../../../assets/images/write/Ellipse 4.png';
import profile2 from '../../../assets/images/write/Ellipse 4-2.png';

export default function Comment() {
  const comments = [
    {
      profile: profile1,
      name: '서귀포시 무슨 농장',
      time: '5분 전',
      text: '게시글 답글 ~~ !! 최고최고'
    },
    {
      profile: profile2,
      name: '감귤러버',
      time: '15분 전',
      text: '안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을수 있나요? 기다리기 지쳤어요 땡뻘땡뻘...'
    }
  ];

  return (
    <S.CommentLayout>
      <S.CommentList>
        {comments.map((comment, index) => (
          <S.CommentBox key={index}>
            <S.CommentInfo>
              <S.ProfileImg src={comment.profile} />
              <S.TitleContent>{comment.name}</S.TitleContent>
              <S.TimeBox>· {comment.time}</S.TimeBox>
              <S.MoreBtn />
            </S.CommentInfo>
            <S.CommentContent>{comment.text}</S.CommentContent>
          </S.CommentBox>
        ))}
      </S.CommentList>
    </S.CommentLayout>
  );
}
