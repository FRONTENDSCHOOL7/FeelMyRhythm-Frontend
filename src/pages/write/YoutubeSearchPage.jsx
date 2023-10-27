import React, { useState } from 'react';
import YoutubeSearch from '../../components/write/YoutubeSearch';
import Header from '../../components/common/NavBar/NavBar';

export default function YoutubeSearchPage() {
  return (
    <>
      <Header />
      <YoutubeSearch />
    </>
  );
}
