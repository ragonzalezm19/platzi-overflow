import { Question } from "../question/question.module";
import { User } from "../auth/user.module";

export class Answer {
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User
  ) { }
}