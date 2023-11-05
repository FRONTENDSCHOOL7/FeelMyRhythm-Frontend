import React, { useState } from 'react';
import * as S from './NavBar.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atomPostUpdateContent, atomYoutubeSearchCount, atomYoutubeSearchKeyword } from '../../../store/store';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import SelectBox from '../SelectBox/SelectBox';
import Modal from '../Modal/Modal';

export default function NavBar({
  postContent,
  writeMutate,
  chatUser,
  isToggled,
  onProfileUpdate,
  profileBtnState,
  updatePostMutate
}) {
  const navigate = useNavigate();
  const user = useRecoilValue(atomMyInfo);
  const { accountname } = useParams();
  const { pathname } = useLocation();

  const setYoutubeSearchCount = useSetRecoilState(atomYoutubeSearchCount);
  const [youtubeSearchKeyword, setYoutubeSearchKeyword] = useRecoilState(atomYoutubeSearchKeyword);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const postUpdateContent = useRecoilValue(atomPostUpdateContent);
  console.log('navpostcontent', postContent);

  console.log('aa', postUpdateContent);
  console.log(postContent);

  const handleSearchClick = () => {
    if (isToggled) {
      navigate('/home/searchuser');
    } else {
      navigate('/home/searchpost');
    }
  };

  console.log(postContent);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
  };

  const onSearchVideo = () => {
    setYoutubeSearchCount((prev) => prev + 1);
  };

  const onCreatePost = (id, postContent) => {
    console.log('버튼클릭', postContent);
    if (postUpdateContent.content) {
      updatePostMutate({ id, postContent });
      return;
    }
    writeMutate(postContent);
  };

  const handleOnchangeInput = (e) => {
    setYoutubeSearchKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchVideo();
    }
  };

  return (
    <S.HeaderLayout>
      {pathname === '/home' && (
        <>
          <S.HeaderTitle>Feel My Rhythm</S.HeaderTitle>
          <S.SearchImg onClick={handleSearchClick} />
        </>
      )}
      {pathname === '/write' && (
        <>
          <S.ArrowLeftImg onClick={() => navigate('/home')} />

          <S.SelectBox>
            <SelectBox />
          </S.SelectBox>
          <S.SaveBtn
            valid={postContent.post.content !== '' && postContent.post.content !== '' ? 'done' : 'none'}
            onClick={() => onCreatePost(postUpdateContent.id, postContent)}>
            업로드
          </S.SaveBtn>
        </>
      )}
      {pathname.includes('/post') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
        </>
      )}
      {pathname.includes('/emotion') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
        </>
      )}
      {pathname.includes('profile') &&
        !pathname.includes('follow') &&
        user?.accountname === accountname &&
        !pathname.includes('update') && (
          <>
            <S.ArrowLeftImg onClick={() => navigate(-1)} />
            <S.KebabBtnImg onClick={handleKebabClick} />
          </>
        )}
      {pathname.includes('profile') &&
        !pathname.includes('follow') &&
        user?.accountname !== accountname &&
        !pathname.includes('update') && (
          <>
            <S.ArrowLeftImg onClick={() => navigate(-1)} />
          </>
        )}
      {pathname.includes('follower') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
          <S.HeaderContent>Followers</S.HeaderContent>
        </>
      )}
      {pathname.includes('following') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
          <S.HeaderContent>Followings</S.HeaderContent>
        </>
      )}
      {pathname === '/chat' && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
          {/* <S.KebabBtnImg src={KebabBtn} onClick={handleKebabClick} /> */}
        </>
      )}
      {pathname.includes('/chat/') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
          <S.HeaderContent>{chatUser}</S.HeaderContent>
          <S.KebabBtnImg onClick={handleKebabClick} />
        </>
      )}
      {pathname.includes('/youtubesearch') && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
        </>
      )}
      {pathname === '/youtubesearch' && (
        <>
          <S.YoutubeSearchInput
            placeholder='검색어를 입력하세요'
            value={youtubeSearchKeyword}
            onChange={(e) => handleOnchangeInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <S.SaveBtn onClick={onSearchVideo}>검색</S.SaveBtn>
        </>
      )}
      {pathname === '/profile/update' && (
        <>
          <S.ArrowLeftImg onClick={() => navigate(-1)} />
          <S.SaveBtn valid={profileBtnState === true ? 'done' : 'none'} onClick={onProfileUpdate}>
            저장
          </S.SaveBtn>
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </S.HeaderLayout>
  );
}
