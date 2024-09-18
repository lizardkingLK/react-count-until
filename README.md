# React Count Until

Count down until the given time

## Installation

Install react-countdown-until with npm

```bash
  npm install react-countdown-until
```

## Usage/Examples

```javascript
import CountDown from "react-countdown-until";

function App() {
  return (
    <>
      {/* returns in format yyy:MM:dd:HH:mm:ss */}
      <CountUntil />
      {/* or */}
      <CountUntil date={new Date("2025-01-01")} />
      {/* or */}
      <CountUntil date={new Date("2026-01-01")} />
    </>
  );
}
```

## API Reference

| Parameter | Type   | Description                        |
| :-------- | :----- | :--------------------------------- |
| `date`    | `Date` | **Optional**. A future Date object |

## Authors

- [@lizardkingLK](https://github.com/lizardkingLK)
