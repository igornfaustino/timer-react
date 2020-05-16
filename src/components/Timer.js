import React, { useMemo } from 'react';

import './Timer.css';
import { formatNumberToTime } from '../utils/format';

const Timer = ({ initialTimeSeconds = 0, currentTimeSeconds = 0 }) => {
  const message = useMemo(() => {
    if (initialTimeSeconds === 0) return;
    if (currentTimeSeconds === 0) return <div>Time’s up!</div>;
    if (currentTimeSeconds <= initialTimeSeconds / 2)
      return <div>More than halfway there!</div>;
  }, [currentTimeSeconds, initialTimeSeconds]);

  const clockClassName = useMemo(() => {
    if (initialTimeSeconds === 0) return '';
    if (currentTimeSeconds <= 10 && currentTimeSeconds > 0) return 'blinking';
    if (currentTimeSeconds <= 20) return 'warning';
    return '';
  }, [currentTimeSeconds, initialTimeSeconds]);

  const clock = useMemo(() => {
    const minutes = formatNumberToTime(parseInt(currentTimeSeconds / 60));
    const seconds = formatNumberToTime(currentTimeSeconds % 60);
    return (
      <div className={`clock ${clockClassName}`}>
        {minutes}:{seconds}
      </div>
    );
  }, [clockClassName, currentTimeSeconds]);

  return (
    <div>
      {message}
      {clock}
    </div>
  );
};

export default Timer;
