import { useCallback, useEffect, useMemo, useState } from "react";
import { episode1 } from "../../../../content/treePlusOne/season1/episode1";

export const Player = () => {
  const synth = window.speechSynthesis;
  const [pos, setPos] = useState(0);

  const eng = useMemo(() => new SpeechSynthesisUtterance(episode1[pos].eng), [pos]);
  const rus = useMemo(() => new SpeechSynthesisUtterance(episode1[pos].rus), [pos]);
  eng.lang = 'en';
  rus.lang = 'ru';
  eng.rate = .7;
  
  const play = useCallback(() => {
    synth.speak(eng);
    synth.speak(rus);
  }, [eng, synth, rus]);

  rus.addEventListener('end', () => {
    if (pos < episode1.length - 1) {
      setPos(pos + 1);
    }
  })

  useEffect(() => {
    if (pos < episode1.length) {
      play();
    }
  }, [pos, play]);
  
  return (
    <div>
      <h1>Position: {pos}</h1>
      <p>{episode1[pos].eng}</p>
      <p>{episode1[pos].rus}</p>
      <button onClick={() => play()}>play</button>
    </div>
  )
}