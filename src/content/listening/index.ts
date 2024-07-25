import { IConversation, ITest, TLevel } from 'helpers/types';
import media1 from './conversation1/media.mp3';
import { conversation1 } from './conversation1';
import { test1 } from './conversation1/test';

export interface IListening {
  name: string;
  level: TLevel;
  media: any;
  link: string;
  conversation: IConversation[];
  test: ITest;
}

export const listening: IListening[] = [
  {
    name: 'Plain conversation',
    level: 'a1',
    media: media1,
    link: '/listening/asser-abloy',
    conversation: conversation1,
    test: test1,
  },
];
