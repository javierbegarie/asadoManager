import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import {
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
})
export class MaterialModule { }
