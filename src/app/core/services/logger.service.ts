import { Injectable }   from '@angular/core';

@Injectable()
export class Logger {

    logs: string[] = [];

    log(message: string): void {
        this.logs.push(message);
        console.log(message);
    }

    tick() {
        this.tickThen(() => {});
    }

    tickThen(fn: () => any) {
        setTimeout(fn, 0);
    }
}