import React from 'react';
import styled from 'styled-components';
import UserProfile from '../home/UserProfile';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';

export default function EmotionResult({ SetResult }) {
  let post = {};
  const { data, error } = useQuery({
    queryFn: () =>
      showEntirePosts().then((res) => {
        post = res?.posts[0];
        console.log(post);
        return res;
      }),
    queryKey: ['']
  });
  return (
    <EmotionResultLayout>
      <H1>AI의 분석 결과는 ...</H1>
      <ContentBox>
        <UserProfile
          author={post?.author}
          content={post?.content}
          image={post?.image}
          createdAt={post?.createdAt}
          comments={post?.comments}
          heartCount={post?.heartCount}
          id={post?._id}
        />
      </ContentBox>
      <Button onClick={() => SetResult(false)}>다시 분석하기</Button>
    </EmotionResultLayout>
  );
}

const EmotionResultLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;
`;

const H1 = styled.h1`
  font-size: 18px;
`;

const ContentBox = styled.div`
  /* width: 322px; */
  /* height: 400px; */
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
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
