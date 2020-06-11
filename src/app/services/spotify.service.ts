import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {

   }
   getQuery (query : string){
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOfr7I1pdlmgSgHChQBvZi7JhkttuS346R-oqbX5MyvwsteyA-UmBDEpT0zJEdGU1uJS2_4kD1T6dCwIs'
    });
    return this.http.get(url, {headers});
   }
  getNewReleases(){
  /*const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCREr4FjSSA_f_gQKzxR97-JlJc-HpVjdJyoOGkqKUjtNLG3VAMARLcrH6G-PJAcsiDomyWzej8GOfwNCY'
  });
  */
 return this.getQuery('browse/new-releases')
   .pipe(map(data=> data['albums'].items)); 
  }   
  getArtistas(termino: string){
   /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCREr4FjSSA_f_gQKzxR97-JlJc-HpVjdJyoOGkqKUjtNLG3VAMARLcrH6G-PJAcsiDomyWzej8GOfwNCY'
    }); 
    */
  return this.getQuery(`search?q=${termino}&type=artist&limit=15&offset=5`)     
     .pipe(map( data => data['artists'].items));
  }
  getArtista(id: string){
    
   return this.getQuery(`artists/${id}`) ;    
      //.pipe(map( data => data['artists'].items));
   }
   getTracks(id: string){
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`)   
    .pipe(map( data => data['tracks']));
    }

}
