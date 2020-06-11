import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class PipesPipe implements PipeTransform {

  transform(imagen: any []):string {
    if (!imagen){
      return 'assets/img/original.png';
    }
    if(imagen.length >0){
      return imagen[0].url;
    }else{
      return 'assets/img/original.png'; 
    }
    
  }

}
