import React, { useState } from 'react';
import * as S from './userProfile.styled';
import { FaRegSmile } from 'react-icons/fa';
import { FaRegFaceAngry } from 'react-icons/fa6';
import { FaRegSadTear } from 'react-icons/fa';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import Modal from '../common/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { atomPostUpdateContent } from '../../store/store';

const UserProfile = ({ author, content, image, createdAt, comments, heartCount, id, emotionAi }) => {
  createdAt = new Date(createdAt);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  const formatDate = `${year}년 ${month}월 ${date}일`;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoState, setVideoState] = useState(false);

  const setPostUpdateContent = useSetRecoilState(atomPostUpdateContent);

  const toggleModal = () => {
    isModalOpen ||
      setPostUpdateContent({
        id: '',
        content: '',
        image: ''
      });
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
    setPostUpdateContent({
      id: id,
      content: content,
      image: image
    });
  };

  const onNavigateDetailPost = () => {
    navigate(`/post/${id}`);
  };

  const getFaceIcon = () => {
    const faceType = String(image).split('🈳')[4];

    if (faceType === 'smile') return <FaRegSmile />;
    if (faceType === 'angry') return <FaRegFaceAngry />;
    if (faceType === 'sad') return <FaRegSadTear />;

    return '';
  };

  return (
    <>
      <S.ContainerBox>
        <S.AboutUserBox onClick={() => navigate('/profile/' + author.accountname)}>
          <S.StyledProfileImg
            src={String(author?.image).includes('Ellipse.png') || !author?.image ? basicProfile : author?.image}
            alt='프로필'
          />
          <S.UserInfoBox>
            <S.H2>{author?.username}</S.H2>
            <S.H3>{'@' + author?.accountname}</S.H3>
          </S.UserInfoBox>
          <S.Button
            onClick={(e) => {
              e.stopPropagation();
              handleKebabClick();
            }}>
            <KebabIcon />
          </S.Button>
        </S.AboutUserBox>

        <S.DetailNavigateBtn onClick={() => onNavigateDetailPost}>
          <S.ContentsBox onClick={() => navigate('/post/' + id)}>
            <S.DescriptionContent>{content}</S.DescriptionContent>
            <S.VideoImgToggleBox onMouseOver={() => setVideoState(true)} onMouseLeave={() => setVideoState(false)}>
              {emotionAi ? (
                <S.BigIframe src={`https://www.youtube.com/embed/${image && image.split('🈳')[1]}?autoplay=1&mute=1`} />
              ) : videoState ? (
                <>
                  <S.Iframe src={`https://www.youtube.com/embed/${image && image.split('🈳')[1]}?autoplay=1&mute=1`} />
                </>
              ) : (
                <S.ImgBox>
                  <S.Img src={String(image) && (String(image).split('🈳')[3] ?? 'abc')} alt='' />
                </S.ImgBox>
              )}

              <S.H4>{String(image) && (String(image).split('🈳')[2] ?? 'abc')}</S.H4>
            </S.VideoImgToggleBox>
          </S.ContentsBox>
        </S.DetailNavigateBtn>
        <S.DetailNavigateBtn onClick={onNavigateDetailPost}>
          <S.IconsBox>
            <S.StyledHeartBox>
              <HeartIcon />
            </S.StyledHeartBox>
            <S.NumBox className='heartnum'>{heartCount}</S.NumBox>
            <S.StyledMessageBox>
              <MessageIcon />
            </S.StyledMessageBox>
            <S.NumBox className='messnum'>{comments?.length}</S.NumBox>
            <S.FaceBox>{getFaceIcon()}</S.FaceBox>
          </S.IconsBox>
        </S.DetailNavigateBtn>

        <S.Date>{formatDate}</S.Date>
      </S.ContainerBox>
      <Modal
        postModal={true}
        postId={id}
        postUser={author?.accountname}
        isOpen={isModalOpen}
        onClose={toggleModal}></Modal>
    </>
  );
};
export default UserProfile;
