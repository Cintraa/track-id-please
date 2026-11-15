import Header from "./components/Header.tsx";
import Form from "./components/Form.tsx";
``;
import Track from "./components/Track.tsx";
import "./App.css";
import { useState } from "react";
import type { TrackData } from "./types.ts";

function App() {
  const [tracks, setTracks] = useState<TrackData[]>([
    { name: "Fisher - Losing It", timeStamp: "00:00" },
    { name: "Dom Dolla & MK - Rhyme Dust", timeStamp: "04:32" },
    { name: "John Summit & Hayla - Where You Are", timeStamp: "09:15" },
    { name: "Mau P - Drugs From Amsterdam", timeStamp: "14:48" },
    { name: "Chris Lake & Aluna - Beggin", timeStamp: "20:03" },
  ]);

  return (
    <>
      <Header></Header>
      <Form></Form>

      <div className="track-container">
        {tracks.map((track) => {
          return <Track name={track.name} timeStamp={track.timeStamp}></Track>;
        })}
      </div>
    </>
  );
}

export default App;
