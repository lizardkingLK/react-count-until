import React, { memo, useCallback, useEffect, useState } from "react";
import { paddingOne, paddingTwo, paddingThree } from "./constants";
import { CountUntilItemProps, CountUntilProps } from "./types";

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
  className = "flex font-mono",
  requireLabels = false,
  seperator = ":",
  displayYears = true,
  displayMonths = true,
  displayDays = true,
  displayHours = true,
  displayMinutes = true,
  displaySeconds = true,
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
    <>
      <div className={className}>
        {displayYears && (
          <CountUntilItem
            label={"yyy"}
            required={requireLabels}
            value={years}
            seperator={seperator}
          />
        )}
        {displayMonths && (
          <CountUntilItem
            label={"MM"}
            required={requireLabels}
            value={months}
            seperator={seperator}
          />
        )}
        {displayDays && (
          <CountUntilItem
            label={"dd"}
            required={requireLabels}
            value={days}
            seperator={seperator}
          />
        )}
        {displayHours && (
          <CountUntilItem
            label={"HH"}
            required={requireLabels}
            value={hours}
            seperator={seperator}
          />
        )}
        {displayMinutes && (
          <CountUntilItem
            label={"mm"}
            required={requireLabels}
            value={minutes}
            seperator={seperator}
          />
        )}
        {displaySeconds && (
          <CountUntilItem
            label={"ss"}
            required={requireLabels}
            value={seconds}
          />
        )}
      </div>
    </>
  );
};

const CountUntilItem = memo(
  ({ value, required, label, seperator }: CountUntilItemProps) => {
    return (
      <>
        <div className="flex flex-col space-y-4">
          <p>{value}</p>
          {required && <p>{label}</p>}
        </div>
        <span>{seperator}</span>
      </>
    );
  }
);
