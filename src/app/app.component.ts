import { Component } from '@angular/core';
import { Datos, DatosClass, DATOS } from './datos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: `
    <p> hola mundo! </p>
  `,*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'componentsInDepth';
  public disable = false;
  public texto = "desde el controlador";
  public label: string = "<script>console.log('hola');</script>";
  public hola = "hola template";
  public onComponentNumber = 10;
  public yellow = 'red';
  public obj = {
    red: 'red',
    name: undefined
  }
  public date = new Date();
  private dontUseIt = "hola";
  public datos: Datos = {
    name: "name",
    age: 1
  }
  public datosClass = new DatosClass("name", 21);
  public DATOS = {...DATOS};

  public onClick(label: string): void {
    this.label = label;
  }
  public changeClass() {
    return {
      hola: this.hola === "holatemplate" ? true : false
    }
  }
  public onChange(e) {
    this.hola = e.target.value;
  }

  public childClicked(info: string) {
    console.log(info);
  }
}
