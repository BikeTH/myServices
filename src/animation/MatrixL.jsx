import React, { useEffect, useRef, useState } from 'react';
import './MatrixL.css';

const VALID_CHARS = `あいうえお
かきくけこ
さしすせそ
たちつてと
なにぬねの
はひふへほ
まみむめも
やゆよ
らりるれろ
わをん
がぎぐげご
ざじずぜぞ
だぢづでど
ばびぶべぼ
ぱぴぷぺぽ
*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 10;
const MAX_STREAM_SIZE = 30;

const MIN_INTERVAL_DELAY = 100;
const MAX_INTERVAL_DELAY = 200;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 300;

const getRandInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
  VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
  new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(_ => getRandChar());

const getMutatedStream = stream => {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
};

const RainStream = props => {
  const [stream, setStream] = useState(getRandStream());
  const [topPadding, setTopPadding] = useState(stream.length * -50);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStream(prevStream => getMutatedStream(prevStream));
      setTopPadding(prevTopPadding => prevTopPadding + 44);
    }, getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (topPadding > props.height) {
      clearInterval(intervalId);
      const newStream = getRandStream();
      setStream(newStream);
      setTopPadding(newStream.length * -44);
      const newIntervalId = setInterval(() => {
        setStream(prevStream => getMutatedStream(prevStream));
        setTopPadding(prevTopPadding => prevTopPadding + 44);
      }, getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
      setIntervalId(newIntervalId);
    }
  }, [topPadding, props.height]);

  return (
    <div className="matrix-wordL" style={{ '--topPadding': `${topPadding}px` }}>
      {stream.map((char, index) => (
        <a
          key={index}
          style={{
            marginTop: -12,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            color: index === stream.length - 1 ? '#fff' : undefined,
            textShadow:
              index === stream.length - 1
                ? '0px 0px 20px rgba(255, 255, 255, 1)'
                : undefined,
          }}
        >
          {char}
        </a>
      ))}
    </div>
  );
};

const MatrixL = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

  return (
    <div className='matrixL' ref={containerRef}>
      {new Array(streamCount).fill().map((_, index) => (
        <RainStream
          key={index}
          height={containerSize?.height}
        />
      ))}
    </div>
  );
};

export default MatrixL;
