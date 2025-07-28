import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitadorPipe } from './limitador.pipe';

@NgModule({
  declarations: [LimitadorPipe],
  imports: [CommonModule],
  exports: [LimitadorPipe] // 👈 Isso permite reutilizar o pipe
})
export class PipesModule {}
