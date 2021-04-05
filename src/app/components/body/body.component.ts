import {Component} from '@angular/core';

@Component({
     selector: 'app-body',
     templateUrl: './body.component.html'
})
export class BodyComponent{

     mostrar : boolean = true;

     frase : any = {
          mensaje: 'El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene',
          autor: 'Henry Ford'
     };

     personajes : string[] = ["Thor", "Capitan America", "Doctor Strange"];

}