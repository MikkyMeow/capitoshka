import { PageContinaer } from 'components/templates/PageContainer/PageContainer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IThemeLinks, themes } from '../../../content/grammarThemes';
import { Button, Dialog, List, ListItem } from '@mui/material';
import { Test } from 'components/widgets/Test/Test';
import styles from './GrammarLesson.module.css';

export const GrammarLesson = () => {
  const { slug } = useParams();
  const [showTest, setShowTest] = useState(false);

  const [currentTheme] = useState<IThemeLinks>(
    themes.find((t) => t.link === `/grammar/${slug}`)!
  );

  return (
    <PageContinaer gap={20}>
      <h2>Grammar Lesson</h2>
      {currentTheme && (
        <>
          <h4>{currentTheme.name}</h4>
          <List>
            {currentTheme.theory.map((string) => (
              <ListItem>{string}</ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            onClick={() => setShowTest(true)}
            disabled={showTest}
          >
            Пройти тест
          </Button>
          <Dialog
            classes={{ paper: styles.dialog }}
            open={showTest}
            onClose={() => setShowTest(false)}
          >
            <Test test={currentTheme.test} />
          </Dialog>
        </>
      )}
    </PageContinaer>
  );
};
