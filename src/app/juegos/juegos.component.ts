import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 
  irAPpt()
  {
    location.href="./Inicial/ppt";
   
  }
  irAMemoria()
  {
    location.href="./Inicial/memoria";
  }
  irAAdivina()
  {
    location.href="./Inicial/adivina";
  }
  irAAgilidad()
  {
    location.href="./Inicial/agilidad";
  }
}
