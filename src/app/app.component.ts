import { Component } from '@angular/core';
import { ConfigService } from "./services/initialize.service";

import { BoardBarsHeart } from "./board-bar/board-bar.component";
import { BoardButtonDirector, BoardButtonSwitcher, BoardButtonHeart } from "./shared/board-buttons";
import { RealSubject, isBoardFirst, proxied, Proxy } from "./shared/trello-init.module";

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
    providers: [ConfigService]
})

export class AppComponent{

    condition!: Promise<boolean>;
    title = 'AngularTrelloPowerApp';
    boardbuttons: object;
    showsettings: object;
    trellowind: TrelloPowerUp;
  
    constructor(private httpService: ConfigService) {

        this.trellowind = window.TrelloPowerUp;

        this.boardbuttons = {
            "board-buttons": (t: trellobb, opts: BoardButtonHeart[]) => this.BBF(t,opts)
        };

        this.showsettings = {
            "show-settings": (t: trelloss, opts: BoardBarsHeart[]) => this.SSF(t,opts)
        };

        var trelloinit: any = this.trellowind.initialize;

        trelloinit(this.boardbuttons, this.showsettings);

    }

    private CheckBoard = async (t: any) => {

        if (this.condition === undefined){

            var realSubject: RealSubject = new RealSubject();
            
            var bid: any = await t.board("id");
            var id: string = bid.id;
            console.log("id: "+id);
        
            var senddata = new proxied(id);

            var prox: Proxy = new Proxy(realSubject, senddata, this.httpService);

            this.condition = isBoardFirst(prox);
            console.log(this.condition);

        }

        return this.condition;

    }

    private BBF = async (t: trellobb, opts: any[]) => {

        var director = new BoardButtonDirector();

        var cond = await this.CheckBoard(t);

        return BoardButtonSwitcher( director , cond );
        
    };

    private SSF = async (t: trelloss, opts: BoardBarsHeart[]) => {
        
        var cond = await this.CheckBoard(t);

        /*
        var director = new BoardButtonDirector();

        var cond = await this.CheckBoard(t);

        return BoardButtonSwitcher( director , cond );
        */

        

    };
  
}