import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, map, switchMap, tap, toArray } from 'rxjs';

interface pokedex{
  count: number;
  next: string;
  previous?: string;
 results:{
   id: any;
   name:string;
   url: string;
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500'

  constructor(
    private http: HttpClient
  ) { }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      ))}

   apiListAllPokemon(url?: string):Observable<any>{
  //   return this.http.get<any>(this.url).pipe(
  //     tap( res => res),
  //     tap( res => {
  //       console.log(res);
  //     }))
  // }
    return this.http.get<pokedex>(this.url).pipe(
      switchMap(response => {
        return concat(...response.results.map(row => {
          return this.http.get<any>(row.url).pipe(
            map((details) => {
              //  console.log(details);
              return {
                id: details.id, 
                name: row.name,
                url: details.sprites.other.dream_world.front_default,
                types: details.types.map((t: any) => t.type.name)
              }
            })
          )
        })).pipe(
          toArray()
        )
      })
    )}

}
