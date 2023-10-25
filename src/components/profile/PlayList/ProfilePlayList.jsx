import React from 'react';
import * as S from './ProfilePlayList.styled';
import test_img from '../../../assets/images/profile/basic-profile-img.svg';
import PlayItem from './PlayItem';

export default function ProfilePlaylist() {
  return (
    <S.ProfilePlayListLayout>
      <S.TitleContent>좋아하는 글</S.TitleContent>
      <S.PLContainerBox>
        <PlayItem img={test_img} title={'잔나비 명곡 어쩌구 모음집'} userid={'esoby'} />
        <PlayItem img={test_img} title={'잔나비 명곡 어쩌구 모음'} userId={'esobyesobyesobyesoby'} />
        <PlayItem img={test_img} title={'잔나비 명곡 어쩌구 모음'} userId={'esoby'} />
        <PlayItem img={test_img} title={'잔나비 명곡 어쩌구 모음'} userId={'esoby'} />
      </S.PLContainerBox>
    </S.ProfilePlayListLayout>
  );
}
