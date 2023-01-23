import { ChangeEvent } from 'react';
import { InfoUser, Task } from '../interface';

export type ContextTaskProps = {
  infoUser: InfoUser
  setInfoUser: (state: InfoUser) => void
  setValidQuestions: (state: boolean) => void,
  validQuestions: boolean,
  inputs: Array<[]>
  handleSubjectValue: (e: ChangeEvent<HTMLInputElement>, i: number) => void,
  subjectValues: string[],
  setSubjectValues: (state: string[] | []) => void
  handleTask: (task: Task) => void,
  tasks: Task[]
  task: Task,
  setTask: (task: Task) => void,
  deleteTask: (id: string) => void
};
