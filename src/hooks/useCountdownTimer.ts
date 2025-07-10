import { useEffect, useState, useCallback } from "react";

export function useCountdownTimer(initialSeconds: number, onExpire?: () => void) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft === 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onExpire]);

  const reset = useCallback(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  const formatTime = (totalSeconds: number) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return {
    secondsLeft,
    formattedTime: formatTime(secondsLeft),
    isExpired: secondsLeft === 0,
    reset,
  };
}
