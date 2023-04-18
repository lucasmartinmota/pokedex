import { Component } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  public pokelist: any[]= [];
  // private setAllPokemon: any;
  public getAllPokemon: any;
  public isError: boolean = false;

  constructor (private pokeApiService: PokeApiService){

    this.pokeApiService.apiListAllPokemon().subscribe((response) => {
       this.getAllPokemon = response;
       this.pokelist = this.getAllPokemon;
     },
     error => {
        this.isError = true;
     }
     
     )
}


  public getSearch(value: string){
      
      const filter = this.getAllPokemon.filter( (response: any) => {
        return !response.name.indexOf(value.toLowerCase());
      });

      this.pokelist = filter;
  }
}
