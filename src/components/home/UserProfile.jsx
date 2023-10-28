import React, { useState } from 'react';
import * as S from './userprofile.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';

const UserProfile = ({ author, content, image, createdAt, updatedAt, hearted, heartCount, commentCount }) => {
  createdAt = new Date(createdAt);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  const formatDate = `${year}년 ${month}월 ${date}일`;
  const [isLiked, setIsLiked] = useState(hearted);
  const [likes, setLikes] = useState(heartCount);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <S.ContainerBox>
      <S.AboutUserBox>
        <S.StyledProfileImg
          src={String(author.image).includes('Ellipse.png') ? basicProfile : author.image}
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
        <S.StyledHeartBox onClick={handleLike}>{isLiked ? <ColoredHearIcon /> : <HeartIcon />}</S.StyledHeartBox>
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
