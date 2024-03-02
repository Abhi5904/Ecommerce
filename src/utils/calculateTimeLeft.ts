import { TimeLeft } from "@/types/timeLeft";

export const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date("2024-03-08") - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    mins: 0,
    sec: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      mins: Math.floor((difference / 1000 / 60) % 60),
      sec: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
