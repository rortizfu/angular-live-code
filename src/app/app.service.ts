import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// constructor(private service: AppService) {}
@Injectable()
export class AppService {
    private datos;
    private observer = new Subject();
    public $obs = this.observer.asObservable();
    // this.service.$obs.subscribe((value) => { // Do something with value });

    inform(value) {
        const newValue = Number(value);
        this.observer.next(value);
    }
    // this.service.inform("new value");

    getDatos() {
        return this.datos;
    }

    setDatos(value) {
        this.datos = value;
    }
}