import { Component } from '@angular/core';
import { InitializeService } from './services/initialize.service';

import { BoardBarOptions } from "./board-bar/board-bar.component";
import { BoardButtonDirector, BoardButtonSwitcher } from "./shared/board-buttons";
import { RealSubject, isBoardFirst, isBoard } from "./shared/trello-init.module";

export interface Actions{
    icon: string;
    alt: string;
    callback: void;
    position: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [InitializeService]
})

export class AppComponent {
  title = 'AngularTrelloPowerApp';

    constructor() {

        let window: any, TrelloPowerUp: any;
        var realSubject;
        var proxy: any;
        
        realSubject1 = new RealSubject();
        console.log("testid");
        proxy1 = new Proxy(realSubject1, "testid");
        var condition1 = isBoardFirst(proxy1);
        console.log(condition1);

        window.TrelloPowerUp.initialize({
            'board-buttons': (t: any) => {
                var director = new BoardButtonDirector();

                realSubject = new RealSubject();
                proxy = new Proxy(realSubject, t.board("id"));
                var condition = isBoardFirst(proxy);

                BoardButtonSwitcher( director , condition );
            },        
            'show-settings': (t: any, opts: BoardBarOptions) => {

                var condition = isBoard(proxy);

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
            }
            
        });
    }
  
}
