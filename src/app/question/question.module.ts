import { Answer } from "../answer/answer.module";

export class Question {
  _id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers: Answer[]

  constructor(title: string, description: string, createdAt?: Date, icon?: string) {
    this._id= '1';
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.icon = icon;
    this.answers = [];
  }
}