import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public constructor(
        private router: Router
    ) {
        this.router.events.subscribe(console.log.bind(console))
    }
}
