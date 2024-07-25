import { Button, Dialog } from '@mui/material';
import { PageContainer } from 'components/templates/PageContainer/PageContainer';
import { Test } from 'components/widgets/Test/Test';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ListeningLesson.module.css';
import { IListening, listening } from 'content/listening';
import { IConversation } from 'helpers/types';
import { binarySearch } from 'helpers/binarySearch';

export const ListeningLesson = () => {
  const { slug } = useParams();
  const [currentLesson] = useState<IListening>(
    listening.find((t) => t.link === `/listening/${slug}`)!
  );
  const [showTest, setShowTest] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);

  const [displayedConversation, setDisplayedConversation] = useState<
    IConversation[]
  >([]);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const audio = new Audio();
  audio.src = currentLesson.media;
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
    const index = binarySearch(
      currentLesson.conversation,
      'timeStart',
      currentTime
    );

    setDisplayedConversation(currentLesson.conversation.slice(0, index + 1));
  }, [currentTime, currentLesson]);

  return (
    <PageContainer gap={20}>
      <h1>Chat</h1>
      <div className={styles.background}>
        <div
          className={`${styles.chatContent} ${isBlurred ? styles.blur : ''}`}
        >
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
      <Button variant="contained" onClick={() => setIsBlurred(!isBlurred)}>
        Blur the chat
      </Button>
      <audio
        className={styles.audio}
        ref={audioRef}
        src={currentLesson.media}
        onTimeUpdate={handleTimeUpdate}
        controls
      />
      <Button variant="contained" onClick={() => setShowTest(true)}>
        Пройти тест
      </Button>
      <Dialog
        classes={{ paper: styles.dialog }}
        open={showTest}
        onClose={() => setShowTest(false)}
      >
        <Test test={currentLesson.test} />
      </Dialog>
    </PageContainer>
  );
};
