import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Condomino} from '../../condomino.models';
import condominos from './condominos.json';



@Component({
  selector: 'app-condomino-list',
  templateUrl: './condomino-list.component.html',
  styleUrls: ['./condomino-list.component.css']
})

export class CondominoListComponent implements OnInit {
 
  constructor(private router:Router) { }
 
  public condominoCollection: Condomino[] = condominos;
  
  ngOnInit(): void {
    
  }


  editar(indice:number){
    this.router.navigate(['/condomino/edit',indice])
    
  }

}

