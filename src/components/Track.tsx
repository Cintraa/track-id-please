import type { TrackData } from "../types.ts";

const Track = ({ name, timeStamp }: TrackData) => {
  return (
    <ul>
      <li>
        {timeStamp} {name}
      </li>
    </ul>
  );
};

export default Track;
