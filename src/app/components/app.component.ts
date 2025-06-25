import { Component } from '@angular/core';
import {Utlagg} from './model/utlagg';
import {HeaderComponent} from "./main.component/header.component/header.component";
import {FooterComponent} from "./main.component/footer.component/footer.component";
import {UtlaggButton} from "./main.component/header.component/utlagg-button/utlagg-button";
import {FakturorButton} from "./main.component/header.component/fakturor-button/fakturor-button";
import {Faktura} from "./model/faktura";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    UtlaggButton,
    FakturorButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  utlagg: Utlagg[] = [];
  fakturor: Faktura[] = [];

  receiveUtlagg($event: Utlagg[]) {
    if(this.utlagg.length > 0 || this.fakturor.length > 0) {
      this.utlagg = [];
      this.fakturor = [];
    }
    this.utlagg = $event;
  }

  receiveFakturor($event: Faktura[]) {
    if(this.utlagg.length > 0 || this.fakturor.length > 0) {
      this.utlagg = [];
      this.fakturor = [];
    }
    this.fakturor = $event;
  }
}
