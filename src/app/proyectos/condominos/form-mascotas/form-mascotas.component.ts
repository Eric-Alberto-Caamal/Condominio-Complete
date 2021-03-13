import { Component, OnInit } from '@angular/core';
import { Condomino } from '../../condomino.models';
import { Familia } from '../../familia.model';
import { Mascota } from '../../mascota.models';

@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.css']
})
export class FormMascotasComponent implements OnInit {

  cantidad:number = 0;
  datos:any = [];

 	mascota:Mascota[] = [];

  constructor() { }

  ngOnInit(): void {
   // this.mascota = new Mascota("Toby", "Poodle", "Perro");
  }

guardarMascota(masArray:Mascota[]){

      for(let i = 0 ; i < masArray.length; i++ ){
          let mascota = masArray[i];
          this.mascota.push(mascota);
      }
    alert(JSON.stringify(this.mascota));
    this.datos.splice(0, this.datos.length);
    this.cantidad = 0;
   }


generateDatos(cantidad:number) {

    this.datos.splice(0, this.datos.length);
    
    for(let i = 0; i < cantidad ; i++){
       let dato = {
         'referencia' : i + 1
       };
       this.datos.push(dato);
   }
   return console.log(this.datos);
 }

  
}
