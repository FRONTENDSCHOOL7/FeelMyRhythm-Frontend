import React from 'react';
import ChatItem from './ChatItem';
import * as S from './chatlists.styled';
import ProfileImg from '../../../assets/images/chat/Ellipse 1.png';
import AlertImg from '../../../assets/images/chat/orange-dot.png';

const chatData = [
  {
    id: 1,
    name: '애월읍 위니브 감귤농장',
    message: '이번엔 정정언제하맨마씸?',
    date: '2023.10.13'
  },
  {
    id: 2,
    name: '제주감귤마을',
    message: '깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지뉴 블랙 배지...뉴 블랙 배지...',
    date: '2021.3.18'
  },
  {
    id: 3,
    name: '누구네 농장 친환경 한라봉',
    message:
      '내 차는 내가 평가한다. 오픈 이벤트에 참여 하세요.내 차는 내가 평가한다. 오픈 이벤트에 참여 하세요.내 차는 내가 평가한다. 오픈 이벤트에 참여 하세요.내 차는 내가 평가한다. 오픈 이벤트에 참여 하세요.',
    date: '2020.1.4'
  }
];

export default function ChatLists() {
  return (
    <S.ChatListLayout>
      {chatData.map((chat) => (
        <ChatItem
          key={chat.id}
          profileImg={ProfileImg}
          alertImg={AlertImg}
          name={chat.name}
          message={chat.message}
          date={chat.date}
          isUnread={chat.isUnread}
        />
      ))}
    </S.ChatListLayout>
  );
}
