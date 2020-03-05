import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

const material = [MatButtonModule,MatIconModule,MatSidenavModule, MatIconModule,MatListModule,MatToolbarModule,MatMenuModule,];

@NgModule({
  imports: [ material],
  exports :[material]
})

export class MaterialModule { }