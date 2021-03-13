import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Condomino} from '../../condomino.models';
import condominos from '../condomino-list/condominos.json';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  condomino:any = {};
  indice:number = 0;

  public condominoCollection: Condomino[] = condominos;

  constructor(
        private activatedRoute:ActivatedRoute
    ) {
      this.activatedRoute.params.subscribe( params => {
        this.indice = params['indice'];
      })
    }
    

  ngOnInit(): void {

    this.condomino = this.condominoCollection[this.indice];
    console.log(this.condomino);

  }

}
