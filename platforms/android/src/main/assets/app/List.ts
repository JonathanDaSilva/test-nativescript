import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Item, Storage } from './Storage';

@Component({
    templateUrl: "List.html",
    styles: [`
        .fab-button {
            height: 70;
            margin: 15;
            background-color: #ff4081;
            horizontal-align: right;
            vertical-align: bottom;
        }
    `]
})
export class List {
    public list$: Observable<Item[]>;
    public listIsEmpty$: Observable<boolean>;

    public constructor(
        private router: Router,
        private storage: Storage
    ) {
        this.list$ = this.storage.getObservable();

        this.listIsEmpty$ = this.list$
            .map((list) => list.length === 0);
    }

    public goToAdd() {
        this.router.navigate(['add']);
    }
}
