import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import ToggleAndEmoji from '../../components/home/toggleandemoji/ToggleAndEmoji';
import EntirePosts from '../../components/home/EntirePosts';
import TabMenu from '../../components/common/TabMenu/TabMenu';
// import NoFollow from '../../components/home/followstatus/NoFollow';
// import YesFollow from '../../components/home/followstatus/YesFollow';
import * as S from './home.styled';

export default function Home() {
  return (
    <S.HomeLayout>
      <NavBar />
      <ToggleAndEmoji />
      <EntirePosts />
      {/* <NoFollow />
      <YesFollow /> */}
      <TabMenu />
    </S.HomeLayout>
  );
}
