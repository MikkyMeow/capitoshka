import { conversation } from 'lessons/1/data';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import audioSrc from 'lessons/1/media.mp3';
import styles from './Lesson.module.css';
import { binarySearch } from 'helpers/binarySearch';

interface IConversation {
  speaker: number;
  eng: string;
  rus: string;
  timeStart: number;
  timeEnd: number;
}

const url = 'https://learn-english-app-nu.vercel.app/api/lesson/lesson_1/';

export const Lesson: React.FC = () => {
  const [displayedConversation, setDisplayedConversation] = useState<
    IConversation[]
  >([]);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  // const [dialog, setDialog] = useState(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const audio = new Audio();
  audio.src = audioSrc;
  if (!audio.played) {
    audio.play();
  }

  const getDialogs = useCallback(async () => {
    // const dialogs = await makeHttpRequest(url);
    // console.log(dialogs);
    // const dialogs = conversation;
  }, []);

  useEffect(() => {
    getDialogs();
  }, [getDialogs]);

  useEffect(() => {
    const index = binarySearch(conversation, 'timeStart', currentTime);

    setDisplayedConversation(conversation.slice(0, index + 1));
  }, [currentTime]);

  return (
    <div>
      <h1>Chat</h1>
      <div className={styles.background}>
        <div className={styles.chatContent}>
          {displayedConversation.map((c, index) => (
            <div
              className={`${
                c.speaker === 1 ? styles.myMessage : styles.otherMessage
              } ${
                index === displayedConversation.length - 1
                  ? styles.newMessage
                  : ''
              }`}
            >
              {c.eng}
            </div>
          ))}
        </div>
      </div>
      <audio
        className={styles.audio}
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        controls
      />
    </div>
  );
};
