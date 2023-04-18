import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { MaterialExampleModule } from 'material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    
  ],
  exports: [PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    MaterialExampleModule
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialExampleModule,
    NgChartsModule
  ]
})
export class SharedModule { }
