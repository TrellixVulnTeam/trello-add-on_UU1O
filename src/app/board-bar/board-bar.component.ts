import { Component, OnInit } from '@angular/core';
import { ActionsSwitcher, ActionsDirector, ActionsHeart } from './actions';

/*

return t.boardBar({
            url: './board-bar/board-bar.component.html',
            args: { text: 'Hello' },
            accentColor: '#F2D600',
            height: 200,
            callback: () => console.log('Goodbye.'),
            resizable: true,
            title: 'Board Meeting',
            actions: [{
                icon: 'https://example.com/a-white-icon.png',//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                url: 'https://google.com',
                alt: 'Leftmost',
                position: 'left',
            }, {
                icon: 'https://example.com/a-white-icon.png',//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                callback: (tr: any) => tr.popup({
                title: tr.localizeKey('appear_in_settings'),
                url: './settings/settings.component.html',
                height: 164,
                }),
                alt: 'Second from left',
                position: 'left',
            }, {
                icon: 'https://example.com/a-white-icon.png',//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                callback: () => console.log(':tada:'),
                alt: 'Right side',
                position: 'right',
            }]
        });

*/

export interface BoardBarsHeart{
  url: string;
  //args: object;
  //height: number;
  accentColor: string;
  //callback: void;
  //title: string;
  //actions: ActionsHeart;
  resizable: boolean;
}

class setBoardBars {
  public parts: BoardBarsHeart[];
  constructor(){
      this.parts = [{
        url: './board-bar/board-bar.component.html',
        accentColor: '#F2D600',
        resizable: true
      }];
  }
}

interface BoardBarsBuilder {
    setBoardBarStart(): void;
    setBoardBarLead(): void;
    setBoardBarOlder(): void;
    setBoardBarTech(): void;
    setBoardBarMark(): void;
}

class BoardBarBuilder implements BoardBarsBuilder {
    private product!: setBoardBars;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new setBoardBars();
    }

    /*
    public setBoardButtonsUrl(): void {
        this.product.parts[0].url = 'https://legalitgroup.com/poslugi-it-yuristiv/';
        this.product.parts[0].target = 'Inspiring Boards';
    }

    public setBoardButtonsCallback(): void {
        this.product.parts[0].callback = this.BoardButtonsCallback;
    }
    */

    public setBoardBarStart(): void{

    }

    public setBoardBarLead(): void{

    }
    
    public setBoardBarOlder(): void{

    }
    
    public setBoardBarTech(): void{

    }
    
    public setBoardBarMark(): void{

    }
    

    public getProduct(): setBoardBars {
        var result = this.product;
        this.reset();
        console.log(result);
        return result;
    }

}

export class BoardBarDirector {
    private builder!: BoardBarsBuilder;

    public setBuilder(builder: BoardBarsBuilder): void {
        this.builder = builder;
    }

    public buildStart(): void {
        this.builder.setBoardBarStart();
    }

    public buildLead(): void {
        this.builder.setBoardBarLead();
    }

    public buildOlder(): void {
      this.builder.setBoardBarOlder();
    }

    public buildTech(): void {
        this.builder.setBoardBarTech();
    }

    public buildMark(): void {
      this.builder.setBoardBarMark();
    }

}

export function BoardButtonSwitcher(director: BoardBarDirector, condition: boolean) : any {
    const builder = new BoardBarBuilder();
    director.setBuilder(builder);

    switch(condition){
        case (true):
            //director.buildWithCallback();
            break;
        case (false):
            //director.buildWithUrl();
            break;
    }
    return builder.getProduct();
}

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
