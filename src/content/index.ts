import { friends } from './friends';
import { threePlusOne } from './treePlusOne';

export const series = {
  threePlusOne,
  friends,
};

export const seriesRequest = [
  {
    name: 'Три плюс один',
    id: 'threePlusOne',
  },
  {
    name: 'Друзья',
    id: 'friends',
  },
];

export interface IEpisode {
  rus: string;
  eng: string;
  startPos: string;
  endPos: string;
}
