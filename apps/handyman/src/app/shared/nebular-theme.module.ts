import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule } from '@nebular/theme';

@NgModule({
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  exports: [
    NbLayoutModule,
    NbSidebarModule,
    RouterModule
  ],
  providers: [NbSidebarService],
  declarations: []
})
export class NebularThemeModule { }
