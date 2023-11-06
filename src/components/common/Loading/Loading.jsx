import React from 'react';
import styled from 'styled-components';
import { MoonLoader } from 'react-spinners'; //설치한 cliploader을 import한다

export default function Loading() {
  return (
    <Box>
      <MoonLoader color='#7f7f7f' size={60} />
    </Box>
  );
}
const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
