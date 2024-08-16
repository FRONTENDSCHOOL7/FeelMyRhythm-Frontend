import * as S from './register.styled';
import { AiOutlineCheck } from 'react-icons/ai';

export default function EmailInput({ email, setEmail, emailRef, emailValidState, setEmailValidState }) {
  const handleChangeUserInfo = (e) => {
    setEmail(e.target.value);
  };

  // 이메일 중복확인 함수
  const handleClickEmailValid = (e) => {
    e.preventDefault();

    if (email === '' || email.includes('@') === false || email.includes('.') === false) {
      setEmailValidState('잘못된 이메일 형식입니다.');
      emailRef.current.focus();
      return;
    }
  };

  return (
    <>
      <S.InputBox>
        <S.SubContent>이메일</S.SubContent>
        <S.CheckBox>
          <S.Input
            type='email'
            placeholder='이메일 주소를 입력해주세요.'
            ref={emailRef}
            onChange={(e) => handleChangeUserInfo(e)}
          />

          <S.CheckEmailButton
            valid={emailValidState === '사용 가능한 이메일 입니다.' ? 'success' : 'none'}
            onClick={(e) => handleClickEmailValid(e)}>
            {emailValidState === '사용 가능한 이메일 입니다.' ? <AiOutlineCheck /> : '중복 확인'}
          </S.CheckEmailButton>
        </S.CheckBox>
      </S.InputBox>
      <S.EmailWarningContent valid={emailValidState}>{emailValidState}</S.EmailWarningContent>
    </>
  );
}
