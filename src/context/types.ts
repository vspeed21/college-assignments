import { ChangeEvent } from 'react';
import { InfoUser } from '../interface';

export type ContextTaskProps = {
  infoUser: InfoUser
  setInfoUser: (state: InfoUser) => void
  setValidQuestions: (state: boolean) => void,
  validQuestions: boolean,
  inputs: Array<[]>
  handleSubjectValue: (e: ChangeEvent<HTMLInputElement>, i: number) => void,
  subjectValues: string[],
};
