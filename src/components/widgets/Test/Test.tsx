import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import styles from './Test.module.css';
import { getRandomNumbers } from 'helpers/getRandomNumbers';
import { TranslateOutlined } from '@mui/icons-material';
import { Tooltip } from 'components/ui/Tooltip/Tooltip';
import { ITest } from 'helpers/types';

interface IProps {
  test: ITest;
}

export const Test: FC<IProps> = ({ test }) => {
  const [testNumbers] = useState(getRandomNumbers(test.questions.length, 10));
  const [testAnswers, setTestAnswers] = useState<{ [key: number]: string }>({});
  const [rightAnswers, setRightAnswers] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkAnswers = () => {
    const answers = Object.values(testAnswers);
    let rightAnswers: number[] = [];
    let wrongAnswers: number[] = [];
    if (answers.length === testNumbers.length) {
      testNumbers.forEach((num) => {
        if (
          testAnswers[num].toLocaleLowerCase() ===
          test.questions[num].right.toLocaleLowerCase()
        ) {
          rightAnswers.push(num);
        } else {
          wrongAnswers.push(num);
        }
      });
    } else {
      console.log('ALL FIELDS ARE REQUIRED');
    }
    setRightAnswers(rightAnswers);
    setWrongAnswers(wrongAnswers);
    setIsChecked(true);
  };

  return (
    <div className={styles.root}>
      <h4>{test.description}:</h4>
      <div>
        {testNumbers.map((num) => (
          <div
            className={`${styles.question} ${
              wrongAnswers.includes(num) ? styles.wrong : ''
            } ${rightAnswers.includes(num) ? styles.right : ''}`}
          >
            <p>
              {num}. {test.questions[num]?.description}
            </p>
            <Tooltip title={test.questions[num].translate}>
              <TranslateOutlined />
            </Tooltip>
            {test.questions[num].variants ? (
              <RadioGroup className={styles.radioGroup}>
                {test.questions[num].variants?.map((label) => (
                  <FormControlLabel
                    value={label}
                    control={<Radio />}
                    label={label}
                    onChange={() =>
                      setTestAnswers({ ...testAnswers, [num]: label })
                    }
                  />
                ))}
              </RadioGroup>
            ) : (
              <TextField
                fullWidth
                variant="standard"
                placeholder="Enter the answer"
                onChange={(e) =>
                  setTestAnswers({ ...testAnswers, [num]: e.target.value })
                }
                value={testAnswers[num]}
              />
            )}
          </div>
        ))}
      </div>
      <Button variant="contained" onClick={() => checkAnswers()}>
        Check
      </Button>
      {isChecked && <p>{rightAnswers.length} from 10.</p>}
    </div>
  );
};
