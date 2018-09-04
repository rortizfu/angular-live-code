import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppService {
    private datos;
    private observer = new Subject();
    public $obs = this.observer.asObservable();

    inform(value) {
        this.observer.next(value);
    }

    getDatos() {
        return this.datos;
    }

    setDatos(value) {
        this.datos = value;
    }
}