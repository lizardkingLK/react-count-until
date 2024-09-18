import React, { useCallback, useEffect, useState } from "react";
import { CountUntilProps } from "./types";
import { paddingOne, paddingTwo, paddingThree } from "./constants";

/**
 * Renders Count Until Component
 *
 * @remarks
 * This component is part of the {@link CountUntil}.
 *
 * @param props - Count Until Properties {@link CountUntilProps}
 * @returns component to render
 *
 */
export const CountUntil: React.FC<CountUntilProps> = ({
  date,
}: CountUntilProps) => {
  const [remaining, setRemaining] = useState(0);
  const [years, setYears] = useState<string>(paddingThree);
  const [months, setMonths] = useState<string>(paddingTwo);
  const [days, setDays] = useState<string>(paddingTwo);
  const [hours, setHours] = useState<string>(paddingTwo);
  const [minutes, setMinutes] = useState<string>(paddingTwo);
  const [seconds, setSeconds] = useState<string>(paddingTwo);

  const countDown = () => {
    setRemaining((previous) => previous - 1);
  };

  const updateDisplay = useCallback(() => {
    const seconds = remaining;
    const minutes = remaining / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;

    setSeconds(
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, paddingOne)
    );
    setMinutes(
      Math.floor(minutes % 60)
        .toString()
        .padStart(2, paddingOne)
    );
    setHours(
      Math.floor(hours % 24)
        .toString()
        .padStart(2, paddingOne)
    );
    setDays(
      Math.floor(days % 30)
        .toString()
        .padStart(2, paddingOne)
    );
    setMonths(
      Math.floor(months % 24)
        .toString()
        .padStart(2, paddingOne)
    );
    setYears(
      Math.floor(years % 1000)
        .toString()
        .padStart(3, paddingOne)
    );
  }, [remaining]);

  useEffect(() => {
    if (typeof date === "undefined") {
      return;
    }

    const futureTime = date.getTime();
    const currentTime = new Date().getTime();
    if (currentTime >= futureTime) {
      return;
    }

    setRemaining(Math.ceil((futureTime - currentTime) / 1000));
  }, [date]);

  useEffect(() => {
    if (remaining >= 0) {
      const timeoutReference = setTimeout(() => {
        countDown();
      }, 1000);

      updateDisplay();

      return () => {
        clearTimeout(timeoutReference);
      };
    }
  }, [remaining, updateDisplay]);

  return (
    <h1 className="font-mono">
      {years}:{months}:{days}:{hours}:{minutes}:{seconds}
    </h1>
  );
};
