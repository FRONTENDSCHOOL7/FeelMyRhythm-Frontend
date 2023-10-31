import React, { useState } from 'react';
import * as S from './userProfile.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import { useMutation } from '@tanstack/react-query';
import { createBookMark, createHeart, createUnHeart } from '../../apis/home/heartAPI';
import Modal from '../common/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ author, content, image, createdAt, hearted, heartCount, commentCount, _id }) => {
  createdAt = new Date(createdAt);
  const navigate = useNavigate();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  const formatDate = `${year}년 ${month}월 ${date}일`;
  const [isLiked, setIsLiked] = useState(hearted);
  const [likes, setLikes] = useState(heartCount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: mutateHeart } = useMutation({
    mutationFn: createHeart,
    onSuccess: () => {
      mutateBookMark({
        product: {
          itemName: `ms7-3/${image}`,
          link: _id,
          itemImage: 'null',
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
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
  };
  const onNavigateDetailPost = () => {
    navigate(`/post/${_id}`);
  };

  return (
    <>
      <S.ContainerBox>
        <S.AboutUserBox>
          <S.StyledProfileImg
            src={String(author.image).includes('Ellipse.png') || !author.image ? basicProfile : author.image}
            alt='프로필'
          />
          <S.UserInfoBox onClick={() => navigate('/profile/' + author.accountname)}>
            <S.H2>{author.username}</S.H2>
            <S.H3>{author.accountname}</S.H3>
          </S.UserInfoBox>
          <S.Button
            onClick={(e) => {
              e.stopPropagation();
              handleKebabClick();
            }}>
            <KebabIcon />
          </S.Button>
        </S.AboutUserBox>

        <div onClick={onNavigateDetailPost}>
          <S.ContentsBox onClick={() => navigate('/post/' + _id)}>
            <S.DescriptionContent>{content}</S.DescriptionContent>
            <S.Video>
              <iframe src={`http://www.youtube.com/embed/${_id}`} frameBorder='0' allowFullScreen />
            </S.Video>
            <S.H4>임시비디오타이틀</S.H4>
          </S.ContentsBox>

          <S.IconsBox>
            <S.StyledHeartBox
              onClick={(e) => {
                e.stopPropagation();
                handleLike(isLiked);
              }}>
              {isLiked ? <ColoredHearIcon /> : <HeartIcon />}
            </S.StyledHeartBox>
            <S.NumBox className='heartnum'>{likes}</S.NumBox>
            <S.StyledMessageBox>
              <MessageIcon />
            </S.StyledMessageBox>
            <S.NumBox className='messnum'>{commentCount}</S.NumBox>
          </S.IconsBox>
        </div>
        <S.Date>{formatDate}</S.Date>
      </S.ContainerBox>
      <Modal postModal={true} postUser={author.accountname} isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </>
  );
};
export default UserProfile;
