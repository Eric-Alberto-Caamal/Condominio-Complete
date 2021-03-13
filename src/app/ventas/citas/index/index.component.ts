import { Component, OnInit } from '@angular/core';
import {Cita} from '../../cita.models';
import citas  from './citas.json';
@Component({ 
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  public citaCollection: Cita[] = citas;
  ngOnInit(): void {
  }
 
}