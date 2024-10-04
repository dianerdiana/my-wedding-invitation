import { useEffect, useState } from "react";
import SlideInFromRight from "../motion/SlideInFromRight";
import SlideInFromUp from "../motion/SlideInFromUp";

type CardCountDateProps = {
  rawWeddingDate: Date | string;
  brideInitialName: string;
  groomInitialName: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountingCompProps = {
  label: string;
  value: number;
};

const CountingComponent = ({ label, value }: CountingCompProps) => {
  return (
    <div className="flex flex-col items-center justify-center col-span-3 py-5">
      <span className="text-[26px] leading-none">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[13px]">
        {label}
        {value > 1 ? "s" : ""}
      </span>
    </div>
  );
};

const CardCountDate = ({
  groomInitialName,
  brideInitialName,
  rawWeddingDate,
}: CardCountDateProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(rawWeddingDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount

    // eslint-disable-next-line
  }, [rawWeddingDate]);

  return (
    <div>
      <div className="relative w-full h-[235px]">
        <SlideInFromRight>
          <div className="absolute top-0 -end-10 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[59%] h-auto rotate-[136deg]"
            />
          </div>
        </SlideInFromRight>
      </div>
      <div className="flex flex-row justify-center gap-[10px]">
        <SlideInFromUp duration={2}>
          <h1 className="font-analogue text-[70px] text-gold leading-[80px]">
            {brideInitialName}
          </h1>
        </SlideInFromUp>
        <div className="border-r-[0.1px] border-white"></div>
        <SlideInFromUp duration={2}>
          <h1 className="font-analogue text-[70px] text-gold leading-[80px]">
            {groomInitialName}
          </h1>
        </SlideInFromUp>
      </div>

      <div className="mt-10">
        <p className="italic font-analogue text-[23px] text-white tracking-[4.9px] text-center">
          Count The Date
        </p>

        <div className="flex justify-center mt-10 text-center font-analogue text-gold">
          <div className="grid grid-cols-12 max-w-[460px] w-full">
            <CountingComponent label="Day" value={timeLeft.days} />
            <CountingComponent label="Hour" value={timeLeft.hours} />
            <CountingComponent label="Minute" value={timeLeft.minutes} />
            <CountingComponent label="Second" value={timeLeft.seconds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCountDate;
