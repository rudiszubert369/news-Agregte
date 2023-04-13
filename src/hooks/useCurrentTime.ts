import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.local());

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTime = DateTime.local();
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime.toFormat('HH:mm:ss yyyy/MM/dd');
};

export default useCurrentTime;
