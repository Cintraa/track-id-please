import type { TrackData } from "./types.ts";

export const parseTracks = (description: string): TrackData[] => {
  const timestampRegex = /^(\d{1,2}:)?\d{1,2}:\d{2}\s/;

  return description
    .split("\n")                                  
    .map((line) => line.trim())
    .filter((line) => timestampRegex.test(line))  
    .map((line) => {                         
      const firstSpace = line.indexOf(" ");
      return {
        timeStamp: line.slice(0, firstSpace),
        name: line.slice(firstSpace + 1),
      };
    });
};