import React, { useState } from 'react';
import * as S from './NavBar.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import search from '../../../assets/images/navbar/icon_search.svg';
import arrowLeft from '../../../assets/images/navbar/icon-arrow-left.svg';
import KebabBtn from '../../../assets/images/navbar/icon_kebab.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atomYoutubeSearchCount, atomYoutubeSearchKeyword } from '../../../store/store';
import Modal from '../Modal/Modal';

export default function NavBar({ postContent, writeMutate, chatUser }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const setYoutubeSearchCount = useSetRecoilState(atomYoutubeSearchCount);
  const [youtubeSearchKeyword, setYoutubeSearchKeyword] = useRecoilState(atomYoutubeSearchKeyword);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    navigate('/home/search');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
  };
  const onCreatePost = () => {
    writeMutate(postContent);
  };

  const onSearchVideo = () => {
    setYoutubeSearchCount((prev) => prev + 1);
  };

  const handleOnchangeInput = (e) => {
    setYoutubeSearchKeyword(e.target.value);
  };

  return (
    <S.HeaderLayout>
      {pathname === '/home' && (
        <>
          <S.HeaderTitle>Music 피드</S.HeaderTitle>
          <S.SearchImg src={search} onClick={handleSearchClick} />
        </>
      )}
      {pathname === '/write' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.SaveBtn valid={postContent.post.content !== '' ? 'done' : 'none'} onClick={onCreatePost}>
            업로드
          </S.SaveBtn>
        </>
      )}
      {pathname === '/post' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
        </>
      )}
      {pathname.includes('profile') && !pathname.includes('follow') && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.KebabBtnImg src={KebabBtn} onClick={handleKebabClick} />
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
      <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </S.HeaderLayout>
  );
}
