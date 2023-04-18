import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent{
@Output () public emmitSearch: EventEmitter<string> = new EventEmitter();

public search(value: string){
  this.emmitSearch.emit(value);
}
}
