import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {
 /*
  paises:any [] = [];
  constructor( private http: HttpClient ) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((resp:any) => {
      this.paises = resp;
      console.log(this.paises);
    });
  }
   */ 
   
   nuevasCanciones: any [] = [];
   loading : boolean;
   error : boolean;
   mesanjeError: string;

  constructor ( private spotify: SpotifyService ){
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
    .subscribe((data: any) =>{
     // console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio)=>{
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.mesanjeError = errorServicio.error.error.message;
    });
  }
  
  

}
