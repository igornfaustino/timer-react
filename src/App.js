import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [initialTimeSeconds, setInitialTimeSeconds] = useState(0);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState(0);

  const handleInput = useCallback((e) => {
    let { value } = e.target;
    if (value === '') {
      setInitialTimeSeconds(0);
      setCurrentTimeSeconds(0);
      return;
    }
    if (value > 59) value = '59';
    const timeInMinutes = parseInt(value);
    const timeInSeconds = timeInMinutes * 60;
    setInitialTimeSeconds(timeInSeconds);
    setCurrentTimeSeconds(timeInSeconds);
  }, []);

  const handlePause = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentTimeSeconds(initialTimeSeconds);
    setPlaying(true);
  }, [initialTimeSeconds]);

  const intervalMs = useMemo(() => 1000 / speed, [speed]);

  const playDisabled = useMemo(() => currentTimeSeconds <= 0, [
    currentTimeSeconds,
  ]);

  const playButton = useMemo(() => {
    if (playing)
      return (
        <button id="playBtn" onClick={handlePause}>
          Pause
        </button>
      );

    return (
      <button id="playBtn" onClick={handlePause} disabled={playDisabled}>
        Play
      </button>
    );
  }, [handlePause, playDisabled, playing]);

  const resetButton = useMemo(
    () => (
      <button
        onClick={handleReset}
        disabled={currentTimeSeconds === initialTimeSeconds}
      >
        Reset
      </button>
    ),
    [currentTimeSeconds, handleReset, initialTimeSeconds]
  );

  const speedButtons = useMemo(() => {
    return (
      <>
        <button
          id="btn1x"
          onClick={() => setSpeed(1)}
          className={speed === 1 ? 'selected' : undefined}
        >
          1x
        </button>
        <button
          id="btn1_5x"
          onClick={() => setSpeed(1.5)}
          className={speed === 1.5 ? 'selected' : undefined}
        >
          1.5x
        </button>
        <button
          id="btn2x"
          onClick={() => setSpeed(2)}
          className={speed === 2 ? 'selected' : undefined}
        >
          2x
        </button>
      </>
    );
  }, [speed]);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setCurrentTimeSeconds((prev) => {
        const newTime = prev - 1 > 0 ? prev - 1 : 0;
        if (newTime <= 0) clearInterval(interval);
        return newTime;
      });
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, playing]);

  useEffect(() => {
    if (currentTimeSeconds <= 0) setPlaying(false);
  }, [currentTimeSeconds]);

  return (
    <div className="App">
      <label htmlFor="minutes">Countdown: </label>
      <input
        id="minutes"
        placeholder="(min)"
        onChange={handleInput}
        type="number"
        value={initialTimeSeconds / 60}
        min={0}
        max={59}
      />
      <Timer
        currentTimeSeconds={currentTimeSeconds}
        initialTimeSeconds={initialTimeSeconds}
      />
      {playButton}
      {resetButton}
      {speedButtons}
    </div>
  );
}

export default App;
