import {Component} from '@angular/core';
import {UtlaggButton} from './utlagg-button/utlagg-button';
import {FakturorButton} from './fakturor-button/fakturor-button';
import {KontakterButton} from './kontakter-button/kontakter-button';
import {KalenderButton} from './kalender-button/kalender-button';
import {KostnaderInfo} from './kostnader-info/kostnader-info';
import {Arenden} from './arenden-button/arenden';
import {Utlagg} from '../model/utlagg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    UtlaggButton,
    FakturorButton,
    KontakterButton,
    KalenderButton,
    KostnaderInfo,
    Arenden,
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  utlagg: Utlagg[] = [];

  receiveUtlagg($event: Utlagg[]) {
    console.log($event);
    this.utlagg = $event;
  }
}
