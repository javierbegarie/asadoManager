import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
} from '@angular/material';

let modules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ],
})
export class MaterialModule { }
