import React from 'react';
import styled from 'styled-components';

export default function EmotionCheck({ SetResult }) {
  return (
    <EmotionCheckLayout>
      <H1>AI 게시글 추천 기능 어쩌구</H1>
      <ContentBox>{/* 화면 나오는 곳 */}</ContentBox>
      <Button onClick={() => SetResult(true)}>분석 결과 보기</Button>
    </EmotionCheckLayout>
  );
}

const EmotionCheckLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 75px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 25px;
`;

const H1 = styled.h1`
  font-size: 18px;
`;

const ContentBox = styled.div`
  width: 322px;
  height: 350px;
  border-radius: 44px;
  background-color: #dbdbdb;
  overflow: hidden;
`;

const Button = styled.button`
  width: 322px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 44px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  background-color: #7b86aa;
`;
