import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ROUTES } from './routes'

import { AppComponent } from "./app.component";
import { Add } from "./Add";
import { List } from "./List";

import { Storage } from "./Storage";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        Add,
        List,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(ROUTES)
    ],
    providers: [
        Storage,
    ]
})
export class AppModule { }
