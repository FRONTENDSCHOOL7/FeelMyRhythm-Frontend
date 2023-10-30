import React, { useEffect, useState } from 'react';
import * as S from './PostDetail.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import PostImage from '../../assets/images/home/mandarin.png';
import { useQuery } from '@tanstack/react-query';
import { readDetailPost } from '../../apis/post/detailPostAPI';
import { useParams } from 'react-router';
import UserProfile from '../home/UserProfile';
const handleLike = () => {};

export default function Default() {
  const { id } = useParams();

  const {
    data: { post }
  } = useQuery({
    queryFn: () => readDetailPost(id),
    queryKey: ['']
  });

  return (
    <S.ContainerBox>
      {post && (
        <>
          <S.AboutUserBox>
            <S.StyledProfileImg
              src={
                String(post.author.image).includes('Ellipse.png') || !post.author.image
                  ? basicProfile
                  : post.author.image
              }
              alt='프로필'
            />
            <S.UserInfoBox>
              <S.H2>{post.author.username}</S.H2>
              <S.H3>{post.author.accountname}</S.H3>
            </S.UserInfoBox>
            <S.Button
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <KebabIcon />
            </S.Button>
          </S.AboutUserBox>
          <S.ContentsBox>
            <S.DescriptionContent>{post.content}</S.DescriptionContent>
            <S.Img src={String(post.image).split('🈳')[3] ?? 'abc'} alt='' />
          </S.ContentsBox>

          <S.IconsBox>
            <S.StyledHeartBox onClick={() => handleLike()}>
              {post.hearted ? <ColoredHearIcon /> : <HeartIcon />}
            </S.StyledHeartBox>
            <S.NumBox className='heartnum'>{post.heartCount}</S.NumBox>
            <S.StyledMessageBox>
              <MessageIcon />
            </S.StyledMessageBox>
            <S.NumBox className='messnum'>{post.commentCount}</S.NumBox>
          </S.IconsBox>

          {/* <S.Date>{formatDate}</S.Date> */}
        </>
      )}
    </S.ContainerBox>
  );
}
