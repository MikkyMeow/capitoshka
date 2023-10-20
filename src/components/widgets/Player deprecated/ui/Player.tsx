import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IProps {
  episode: { eng: string; rus: string }[];
  selected: number[];
}
// const synth = window.speechSynthesis;
// const [pos, setPos] = useState(0);

// const eng = useMemo(
//   () => new SpeechSynthesisUtterance(episode[pos].eng),
//   [pos, episode]
// );
// const rus = useMemo(
//   () => new SpeechSynthesisUtterance(episode[pos].rus),
//   [pos, episode]
// );
// eng.lang = "en";
// rus.lang = "ru";
// eng.rate = 0.7;

// const play = useCallback(() => {
//   synth.speak(eng);
//   synth.speak(rus);
// }, [eng, synth, rus]);

// rus.addEventListener("end", () => {
//   if (pos < episode.length - 1) {
//     setPos(pos + 1);
//   }
// });

// useEffect(() => {
//   if (pos < episode.length) {
//     // play();
//   }
// }, [pos, play, episode.length]);

// useEffect(() => {
//   console.log("mounted");
//   return () => console.log("unmounted");
// }, []);

export const Player: FC<IProps> = ({ episode }) => {
  const synth = window.speechSynthesis;
  const [pos, setPos] = useState(0);

  const eng = new SpeechSynthesisUtterance(episode[pos].eng);
  const rus = new SpeechSynthesisUtterance(episode[pos].rus);

  eng.lang = "en";
  rus.lang = "ru";

  const play = () => {
    synth.speak(eng);
    synth.speak(rus);
  };

  const pause = () => {
    synth.cancel();
  };

  return (
    <div>
      <h1>Position: {pos}</h1>
      <p>{episode[pos].eng}</p>
      <p>{episode[pos].rus}</p>
      <button onClick={() => play()}>play</button>
      <button onClick={() => pause()}>pause</button>
    </div>
  );
};
