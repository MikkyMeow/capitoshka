export interface IConversation {
  speaker: number;
  eng: string;
  rus: string;
  timeStart: number;
  timeEnd: number;
}

export interface ITest {
  description: string;
  questions: {
    description: string;
    variants?: string[];
    right: string;
    translate: string;
  }[];
}

export type TLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';
