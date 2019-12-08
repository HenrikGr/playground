import { useState, useEffect } from 'react';

export const TIME_INTERVAL = 2000

const useCountInterval = isActive => {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      let intervalId = null;
      if (isActive) {
        intervalId = setInterval(() => {
          setCount(count => count + 1);
        }, TIME_INTERVAL);
      } else if (!isActive && count !== 0) {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    },
    [isActive, count]
  );

  return count;
};

export default useCountInterval
