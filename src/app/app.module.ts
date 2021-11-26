import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {StyleDirective} from "./directives/style.directive";
import {AppRoutingModule} from "./app-routing.module";
import { BoardBarComponent } from './board-bar/board-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { ConfigService } from './services/initialize.service';
//import { Proxy } from './shared/trello-init.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    BoardBarComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
