import { Component } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Storage } from './Storage';
import { Router } from '@angular/router';

@Component({
    templateUrl: "Add.html",
})
export class Add {
    public name = new BehaviorSubject<string>('');

    public constructor(
        private storage: Storage,
        private router: Router
    ) {
    }

    public add() {
        this.name.take(1).subscribe((name) => {
            if (name === '') {
                return;
            }

            this.storage.add(name);

            this.router.navigate(['']);
        });
    }

    public textChange(event) {
        this.name.next(event.value);
    }
}
