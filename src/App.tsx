import { useEffect, useState } from "react";
import type { TrackData } from "./types.ts";
import { parseTracks } from "./utils.ts";

import Header from "./components/Header.tsx";
import Track from "./components/Track.tsx";
import "./App.css";

const KEY: string = import.meta.env.VITE_YOUTUBE_API_KEY;

function App() {
  const [tracks, setTracks] = useState<TrackData[]>([
    // { name: "Fisher - Losing It", timeStamp: "00:00" },
    // { name: "Dom Dolla & MK - Rhyme Dust", timeStamp: "04:32" },
    // { name: "John Summit & Hayla - Where You Are", timeStamp: "09:15" },
    // { name: "Mau P - Drugs From Amsterdam", timeStamp: "14:48" },
    // { name: "Chris Lake & Aluna - Beggin", timeStamp: "20:03" },
  ]);

  const [url, setUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    setTracks(await fetchTracks(url));
  };

  const fetchTracks = async (id: string) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`,
    );
    const data = await response.json();
    const description = data.items[0].snippet.description;
    return parseTracks(description);
  };

  // fetchTracks("EXKpyYAXtyw&t");
  // console.log(tracks);

  return (
    <>
      <Header></Header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>

      <div className="track-container">
        {tracks.map((track) => {
          return <Track name={track.name} timeStamp={track.timeStamp}></Track>;
        })}
      </div>
    </>
  );
}

export default App;
