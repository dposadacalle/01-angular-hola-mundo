import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private anio : number; 

  constructor(){
    this.anio = new Date().getFullYear();
  }

  public get Anio(){
    return this.anio;
  }

}
