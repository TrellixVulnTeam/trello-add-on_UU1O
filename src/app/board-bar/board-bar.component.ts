import { Component, OnInit } from '@angular/core';
import { Actions } from '../app.component';

@Component({
  selector: 'app-board-bar',
  templateUrl: './board-bar.component.html',
  styleUrls: ['./board-bar.component.css']
})

export class BoardBarComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
    console.log("board bar works");
  }

}

export interface BoardBarOptions{
  url: string;
  args: object;
  height: number;
  accentColor: string;
  callback: void;
  title: string;
  actions: Actions;
  resizable: boolean;
}