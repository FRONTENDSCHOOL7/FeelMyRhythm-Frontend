import React, { useState } from 'react';
import * as S from './userprofile.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import { useMutation } from '@tanstack/react-query';
import { createBookMark, createHeart, createUnHeart } from '../../apis/home/heartAPI';

const UserProfile = ({ author, content, image, createdAt, hearted, heartCount, commentCount, _id }) => {
  createdAt = new Date(createdAt);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  const formatDate = `${year}년 ${month}월 ${date}일`;
  const [isLiked, setIsLiked] = useState(hearted);
  const [likes, setLikes] = useState(heartCount);

  const { mutate: mutateHeart } = useMutation({
    mutationFn: createHeart,
    onSuccess: () => {
      mutateBookMark({
        product: {
          itemName: `ms7-3/${image}`,
          itemImage: 'null',
          link: _id,
          price: 1
        }
      });
    }
  });

  const { mutate: mutateBookMark } = useMutation({
    mutationFn: createBookMark,
    onSuccess: (res) => {
      console.log(res);
    }
  });

  const handleLike = (isLiked) => {
    mutateHeart(_id);
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <S.ContainerBox>
      <S.AboutUserBox>
        <S.StyledProfileImg
          src={String(author.image).includes('Ellipse.png') || !author.image ? basicProfile : author.image}
          alt='프로필'
        />
        <S.UserInfoBox>
          <S.H2>{author.username}</S.H2>
          <S.H3>{author.accountname}</S.H3>
        </S.UserInfoBox>
        <S.Button
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <KebabIcon />
        </S.Button>
      </S.AboutUserBox>
      <S.ContentsBox>
        <S.DescriptionContent>{content}</S.DescriptionContent>
        <S.Img src={String(image).split('🈳')[3] ?? 'abc'} alt='' />
      </S.ContentsBox>

      <S.IconsBox>
        <S.StyledHeartBox onClick={() => handleLike(isLiked)}>
          {isLiked ? <ColoredHearIcon /> : <HeartIcon />}
        </S.StyledHeartBox>
        <S.NumBox className='heartnum'>{likes}</S.NumBox>
        <S.StyledMessageBox>
          <MessageIcon />
        </S.StyledMessageBox>
        <S.NumBox className='messnum'>{commentCount}</S.NumBox>
      </S.IconsBox>

      <S.Date>{formatDate}</S.Date>
    </S.ContainerBox>
  );
};
export default UserProfile;
