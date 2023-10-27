import React, { useState } from 'react';
import * as S from './userprofile.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';

const UserProfile = ({ author, content, image, createdAt, updatedAt, hearted, heartCount, commentCount }) => {
  const [isLiked, setIsLiked] = useState(hearted);
  const [likes, setLikes] = useState(heartCount);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <S.ContainerBox>
      <S.AboutUserBox>
        <S.StyledProfileImg src={author.image} alt='프로필' />
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
        <S.Img src={image} alt={content} />
      </S.ContentsBox>

      <S.IconsBox>
        <S.StyledHeartBox onClick={handleLike}>{isLiked ? <ColoredHearIcon /> : <HeartIcon />}</S.StyledHeartBox>
        <S.NumBox className='heartnum'>{likes}</S.NumBox>
        <S.StyledMessageBox>
          <MessageIcon />
        </S.StyledMessageBox>
        <S.NumBox className='messnum'>{commentCount}</S.NumBox>
      </S.IconsBox>

      <S.Date>{createdAt}</S.Date>
      {/*2023년 10월 28일 이런식으로 바꾸고싶음 */}
    </S.ContainerBox>
  );
};
export default UserProfile;
