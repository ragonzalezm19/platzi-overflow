import { Component } from '@angular/core';
import { Question } from './question.module';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'Esta es una nueva preguntra sobre Andriond',
    'Miren, tengo una duda con un aplicación que estoy escribirnfo para Android',
    new Date,
    'devicon-android-plain'
  )
}