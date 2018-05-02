import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatGridListModule, MatRadioModule, MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule {

}
