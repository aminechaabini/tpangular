import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css'
})
export class MiniWordComponent {
  color = 'black'
  size = 10
  font = 'arial'
  div: ;
  changeColor(input){
    this.color = input.value ;
  }
  changeSize(input){
    this.color = input.value ;
  }
}
