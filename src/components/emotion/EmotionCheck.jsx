import React, { useEffect, useRef, useState } from 'react';
import * as S from './EmotionCheck.styeld';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';

export default function EmotionCheck({ SetResult }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(true);

  // 마운트 될 때 카메라 실행
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // 카메라 켜기
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // api 호출
  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(() => {
      faceMyDetect();
    });
  };

  // 결과 변환
  const emotion = (result) => {
    switch (result) {
      case 'surprised':
        return '행복해';
      case 'happy':
        return '행복해';
      case 'disgusted':
        return '화나';
      case 'angry':
        return '화나';
      case 'fearful':
        return '슬퍼';
      case 'sad':
        return '슬퍼';
      default:
        return '무표정';
    }
  };

  // 감정상태 파악
  const faceMyDetect = () => {
    setInterval(async () => {
      if (videoRef.current && videoRef.current.videoWidth !== 0) {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        if (detections && detections.length > 0) {
          setButtonState(false);
          detections.forEach((detection, i) => {
            const expressions = detection.expressions;

            const keys = Object.keys(expressions);
            keys.sort((a, b) => expressions[b] - expressions[a]);

            const firstLargestExpression = keys[0];
            const secondLargestExpression = keys[1];

            setResult({
              one: emotion(firstLargestExpression),
              two: emotion(secondLargestExpression)
            });
          });
        }
      }
    }, 200);
  };

  // 분석 결과 navigate
  const onNavigateResult = async () => {
    const emotion = result.one === '무표정' ? result.two : result.one;
    navigate('result', { state: emotion });
  };

  return (
    <S.EmotionCheckLayout>
      <S.H1>AI 얼굴 인식 감정 분석 서비스</S.H1>
      <div className='appvide'>
        <S.ContentBox crossOrigin='anonymous' ref={videoRef} autoPlay playsInline />
      </div>

      <S.Button buttonState={buttonState} onClick={onNavigateResult} disabled={buttonState}>
        {buttonState ? '인식 중' : '분석 결과 보기'}
      </S.Button>
    </S.EmotionCheckLayout>
  );
}
