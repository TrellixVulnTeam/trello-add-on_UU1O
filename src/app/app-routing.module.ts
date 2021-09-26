import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BoardBarComponent} from "./board-bar/board-bar.component";

const routes: Routes =[
    {path: 'boardBar', component: BoardBarComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{


}