import { QuestionsListComponent } from "./question-list.component";
import { QuestionDetailComponent } from "./question-detail.component";
import { QuestionFormComponent } from "./question-form.component";

export const QUESTION_ROUTES = [
  { path: '', component: QuestionsListComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];