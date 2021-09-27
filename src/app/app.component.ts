import { Component, Input } from '@angular/core';
import { InitializeService } from './services/initialize.service';

import { BoardBarOptions } from "./board-bar/board-bar.component";
import { BoardButtonDirector, BoardButtonSwitcher } from "./shared/board-buttons";
import { RealSubject, isBoardFirst, isBoard, Subject } from "./shared/trello-init.module";

export interface Actions{
    icon: string;
    alt: string;
    callback: void;
    position: string;
    url: string;
}

interface CustomWindow extends Window {
    TrelloPowerUp: TrelloPowerUp;
}

interface TrelloPowerUp{
    initialize: any;
}

interface trellobb{
    board: any;
}

interface trelloss{
    boardBar: any;
}

declare let window: CustomWindow;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [InitializeService]
})


export class AppComponent{
  //@Input() trelloer!: any;
  title = 'AngularTrelloPowerApp';
  
    constructor() {
        var trellowind: TrelloPowerUp = window.TrelloPowerUp;
        console.log(trellowind);

        var boardbuttons = {"board-buttons": (t: trellobb, opts: any[])=> this.BBF(t,opts)};
        var showsettings = {"show-settings": (t: trelloss, opts: BoardBarOptions)=> this.SSF(t,opts)};
        var trelloinit: any = trellowind.initialize;
        trelloinit(boardbuttons,showsettings);

    }

    private BBF(t: trellobb, opts: any[]): void{
        var realSubject: Subject, proxy: any;

        var director = new BoardButtonDirector();

        realSubject = new RealSubject();
        proxy = new Proxy(realSubject, t.board("id"));
        var condition = isBoardFirst(proxy);

        return BoardButtonSwitcher( director , condition );
    };

    private SSF(t: trelloss, opts: BoardBarOptions): void{
        //var proxy: any;
        //var condition = isBoard(proxy);

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

    };
  
}