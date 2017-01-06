import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Storage {
    public list = new BehaviorSubject<Item[]>([]);

    public add(name: string) {
        this.list.take(1).subscribe((list) => {
            list.push({
                name,
                done: false,
            });

            this.list.next(list);
        });
    }

    public getObservable() {
        return this.list.asObservable();
    }
}

export interface Item {
    name: string;
    done: boolean;
}
