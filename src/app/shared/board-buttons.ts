interface BoardButtonsBuilder {
    setBoardButtonsUrl(): void;
    setBoardButtonsCallback(): void;
}

class BoardButtonBuilder implements BoardButtonsBuilder {
    private product!: setBoardButtons;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new setBoardButtons();
    }

    public setBoardButtonsUrl(): void {
        this.product.parts[0].url = 'https://legalitgroup.com/poslugi-it-yuristiv/';
        this.product.parts[0].target = 'Inspiring Boards';
    }

    public setBoardButtonsCallback(): void {
        this.product.parts[0].callback = this.BoardButtonsCallback;
    }

    public getProduct(): setBoardButtons {
        const result = this.product;
        this.reset();
        console.log(result);
        return result;
    }

    public BoardButtonsCallback(): void{
        alert("MMM,nice");
    }
}

export interface BoardButtonHeart{
    icon: object;
    text: string;
    condition: string;
    [key: string]: any;
}

class setBoardButtons {
    public parts: BoardButtonHeart[];
    constructor(){
        this.parts = [{
            icon: {
                dark: "https://example.com/a-white-icon.png",
                light: "https://example.com/a-black-icon.png"
            },
            text: 'by Legal IT Group',
            condition: 'always'
        }];
    }
}

export class BoardButtonDirector {
    private builder!: BoardButtonsBuilder;

    public setBuilder(builder: BoardButtonsBuilder): void {
        this.builder = builder;
    }

    public buildWithUrl(): void {
        this.builder.setBoardButtonsUrl();
    }

    public buildWithCallback(): void {
        this.builder.setBoardButtonsCallback();
    }
}

export function BoardButtonSwitcher(director: BoardButtonDirector, condition: boolean) : any {
    const builder = new BoardButtonBuilder();
    director.setBuilder(builder);

    switch(condition){
        case (true):
            director.buildWithCallback();
            break;
        case (false):
            director.buildWithUrl();
            break;
    }
    return builder.getProduct();
}