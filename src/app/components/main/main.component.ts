import { Component } from '@angular/core';
import {Utlagg} from '../model/utlagg';
import {HeaderComponent} from '../header/header.component';
import {UtlaggButton} from '../header/utlagg-button/utlagg-button';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [HeaderComponent, UtlaggButton],
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  utlagg: Utlagg[] = [];

  receiveUtlagg($event: Utlagg[]) {
    this.utlagg = $event;
  }
}
