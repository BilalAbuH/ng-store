import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
//import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardComponent],
})
export class SharedModule {}
