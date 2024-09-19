export type CountUntilProps = {
  date?: Date;
  className?: string;
  requireLabels?: boolean;
  seperator?: string;
  displayYears?: boolean;
  displayMonths?: boolean;
  displayDays?: boolean;
  displayHours?: boolean;
  displayMinutes?: boolean;
  displaySeconds?: boolean;
};

export type CountUntilItemProps = {
  value: string;
  required: boolean;
  label: string;
  seperator?: string;
};
