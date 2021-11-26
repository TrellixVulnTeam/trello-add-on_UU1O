export interface ActionsHeart{
    icon: string;
    //alt: string;
    //callback: void;
    position: string;
    //url: string;
    [key: string]: any;
}
  
class setActions {
    public parts: ActionsHeart[];
    constructor(){
        this.parts = [{
            icon: 'https://example.com/a-white-icon.png',
            position: 'left'
        }];
    }
}
  
interface ActionsBuilder{
    setWithUrl(): void;
    setWithCallback(): void;
}
  
class ActionBuilder implements ActionsBuilder{
      private product!: setActions;
  
      constructor() {
          this.reset();
      }
  
      public reset(): void {
        this.product = new setActions();
      }
  
      public setWithUrl(): void{
  
      }
  
      public setWithCallback(): void{
  
      }
  
      public getProduct(): setActions {
        var result = this.product;
        this.reset();
        console.log(result);
        return result;
      }
  }
  
  export class ActionsDirector {
    private builder!: ActionBuilder;
  
    public setBuilder(builder: ActionBuilder): void {
        this.builder = builder;
    }
  
}
  
export function ActionsSwitcher(director: ActionsDirector, condition: boolean) : any {
    const builder = new ActionBuilder();
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

/*
[{
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
*/