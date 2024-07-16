import { ITest, TLevel } from 'helpers/types';
import { reading1 } from './1';

export interface IReading {
  name: string;
  level: TLevel;
  link: string;
  text: string;
  translate: string;
  questions: ITest;
}

export const reading: IReading[] = [reading1];
