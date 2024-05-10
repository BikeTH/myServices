/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';
import './MatrixL.css';

// Constants
const VALID_CHARS = `アイウエオ
カキクケコ
サシスセソ
タチツテト
ナニヌネノ
ハヒフヘホ
マミムメモ
ヤユヨ
ラリルレロ
ワヲン
ガギグゲゴ
ザジズゼゾ
ダヂヅデド
バビブベボ
パピプペポ
*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 30;

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
	const [intervalDelay, setIntervalDelay] = useState(null);

	// Initialize intervalDelay
	useEffect(() => {
		setTimeout(() => {
			setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	}, []);

	useInterval(() => {
		if (!props.height) return;

		if (!intervalDelay) return;

		// If stream is off the screen, reset it after timeout
		if (topPadding > props.height) {
			setStream([]);
			const newStream = getRandStream();
			setStream(newStream);
			setTopPadding(newStream.length * -44);
			setIntervalDelay(null);
			setTimeout(
				() =>
					setIntervalDelay(
						getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
					),
				getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
			);
		} else {
			setTopPadding(topPadding + 44);
		}
		// setStream(stream => [...stream.slice(1, stream.length), getRandChar()]);
		setStream(getMutatedStream);
	}, intervalDelay);

	return (
		<div className="matrix-wordL" style={{ '--topPadding': `${topPadding}px` }}>
			{stream.map((char, index) => (
				<a
					key={index}
					style={{
						marginTop: -12,
						// Reduce opacity for last chars
						opacity: index < 6 ? 0.1 + index * 0.15 : 1,
						color: index === stream.length - 1 ? '#fff' : undefined,
						textShadow:
							index === stream.length - 1
								? '0px 0px 20px rgba(255, 255, 255, 1)'
								: undefined,
					}}>
					{char}
				</a>
			))}
		</div>
	);
};

const Matrix = props => {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState(null); // ?{width, height}

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
            {new Array(streamCount).fill().map((_, index) => ( // Add index as the second argument in map()
                <RainStream
                    key={index} // Add key prop with a unique value (e.g., index)
                    height={containerSize?.height}
                />
            ))}
        </div>
    );
};

export default Matrix;