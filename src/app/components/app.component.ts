import { Component } from '@angular/core';
import {Utlagg} from './model/utlagg';
import {HeaderComponent} from "./main.component/header.component/header.component";
import {FooterComponent} from "./main.component/footer.component/footer.component";
import {UtlaggButton} from "./main.component/header.component/utlagg-button/utlagg-button";
import {FakturorButton} from "./main.component/header.component/fakturor-button/fakturor-button";
import {Faktura} from "./model/faktura";
import {KontakterButton} from "./main.component/header.component/kontakter-button/kontakter-button";
import {Kontakt} from "./model/kontakt";
import {Arende} from "./model/arenden";
import {ArendenButton} from './main.component/header.component/arenden-button/arenden-button';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    UtlaggButton,
    FakturorButton,
    KontakterButton,
    ArendenButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  utlagg: Utlagg[] = [];
  fakturor: Faktura[] = [];
  kontakter: Kontakt[] = [];
  arenden: Arende[] = [];

  receiveUtlagg($event: Utlagg[]) {
    this.clearArrays();
    this.utlagg = $event;

  }

  receiveFakturor($event: Faktura[]) {
    this.clearArrays();
    this.fakturor = $event;

  }

  receiveKontakter($event: Kontakt[]) {
    this.clearArrays();
    this.kontakter = $event;
  }

  receiveArenden($event: Arende[]) {
    this.clearArrays();
    this.arenden = $event;
  }

  private clearArrays(): void {
    if (this.utlagg.length > 0 || this.fakturor.length > 0 || this.kontakter.length > 0 || this.arenden.length > 0) {
      this.utlagg = [];
      this.fakturor = [];
      this.kontakter = [];
      this.arenden = [];
    }
  }
}
