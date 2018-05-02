import { Routes, RouterModule } from '@angular/router';
import { QuestionsListComponent } from './question/question-list.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SingupScreenComponent } from './auth/signup-screen.component';
import { QUESTION_ROUTES } from './question/question.routing';

const APP_ROUTES: Routes = [
  { path: '', component: QuestionsListComponent, pathMatch: 'full' },
  { path: 'singin', component: SigninScreenComponent },
  { path: 'singup', component: SingupScreenComponent },
  { path: 'questions', children: QUESTION_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);