import React, { useState } from 'react';
import * as S from './NavBar.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import search from '../../../assets/images/navbar/icon_search.svg';
import arrowLeft from '../../../assets/images/navbar/icon-arrow-left.svg';
import KebabBtn from '../../../assets/images/navbar/icon_kebab.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atomYoutubeSearchCount, atomYoutubeSearchKeyword } from '../../../store/store';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import Emoji from '../../home/toggleandemoji/emoji/Emoji';
import Modal from '../Modal/Modal';

export default function NavBar({ postContent, writeMutate, chatUser, isToggled, onProfileUpdate, profileBtnState }) {
  const navigate = useNavigate();
  const user = useRecoilValue(atomMyInfo);
  const { accountname } = useParams();
  const { pathname } = useLocation();

  const setYoutubeSearchCount = useSetRecoilState(atomYoutubeSearchCount);
  const [youtubeSearchKeyword, setYoutubeSearchKeyword] = useRecoilState(atomYoutubeSearchKeyword);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    if (isToggled) {
      navigate('/home/searchuser');
    } else {
      navigate('/home/searchpost');
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
  };

  const onSearchVideo = () => {
    setYoutubeSearchCount((prev) => prev + 1);
  };

  const onCreatePost = () => {
    writeMutate(postContent);
  };

  const handleOnchangeInput = (e) => {
    setYoutubeSearchKeyword(e.target.value);
  };

  return (
    <S.HeaderLayout>
      {pathname === '/home' && (
        <>
          <S.HeaderTitle>Feel My Rhythm</S.HeaderTitle>
          <S.SearchImg src={search} onClick={handleSearchClick} />
        </>
      )}
      {pathname === '/write' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.EmojiBox>
            <Emoji />
          </S.EmojiBox>
          <S.SaveBtn valid={postContent.post.content !== '' ? 'done' : 'none'} onClick={onCreatePost}>
            업로드
          </S.SaveBtn>
        </>
      )}
      {pathname.includes('/post') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
        </>
      )}
      {pathname.includes('profile') &&
        !pathname.includes('follow') &&
        user?.accountname === accountname &&
        !pathname.includes('update') && (
          <>
            <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
            <S.KebabBtnImg src={KebabBtn} onClick={handleKebabClick} />
          </>
        )}
      {pathname.includes('profile') &&
        !pathname.includes('follow') &&
        user?.accountname !== accountname &&
        !pathname.includes('update') && (
          <>
            <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          </>
        )}
      {pathname.includes('follower') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>Followers</S.HeaderContent>
        </>
      )}
      {pathname.includes('following') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>Followings</S.HeaderContent>
        </>
      )}
      {pathname === '/chat' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          {/* <S.KebabBtnImg src={KebabBtn} onClick={handleKebabClick} /> */}
        </>
      )}
      {pathname.includes('/chat/') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>{chatUser}</S.HeaderContent>
          <S.KebabBtnImg src={KebabBtn} onClick={handleKebabClick} />
        </>
      )}
      {pathname.includes('/youtubesearch') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
        </>
      )}
      {pathname === '/youtubesearch' && (
        <>
          <S.YoutubeSearchInput value={youtubeSearchKeyword} onChange={(e) => handleOnchangeInput(e)} />
          <S.SaveBtn onClick={onSearchVideo}>검색</S.SaveBtn>
        </>
      )}
      {pathname === '/profile/update' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.SaveBtn valid={profileBtnState === true ? 'done' : 'none'} onClick={onProfileUpdate}>
            저장
          </S.SaveBtn>
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </S.HeaderLayout>
  );
}
