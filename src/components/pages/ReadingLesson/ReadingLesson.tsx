import { Button, Dialog } from '@mui/material';
import { PageContainer } from 'components/templates/PageContainer/PageContainer';
import { Test } from 'components/widgets/Test/Test';
import { IReading, reading } from 'content/reading';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ReadingLesson.module.css';

export const ReadingLesson = () => {
  const { slug } = useParams();
  const [currentLesson] = useState<IReading>(
    reading.find((t) => t.link === `/reading/${slug}`)!
  );
  const [showTest, setShowTest] = useState(false);

  return (
    <PageContainer gap={20}>
      <h2>Reading Lesson</h2>
      <h3>{currentLesson.name}</h3>
      <p className={showTest ? styles.blur : ''}>{currentLesson.text}</p>
      <Button variant="contained" onClick={() => setShowTest(true)}>
        Пройти тест
      </Button>
      <Dialog
        classes={{ paper: styles.dialog }}
        open={showTest}
        onClose={() => setShowTest(false)}
      >
        <Test test={currentLesson.questions} />
      </Dialog>
    </PageContainer>
  );
};
