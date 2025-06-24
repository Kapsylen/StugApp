import {Component, EventEmitter, Output} from '@angular/core';
import {DUMMY_UTLAGG} from './dummy-utlagg';
import {Utlagg} from '../../model/utlagg';

@Component({
  selector: 'app-utlagg-button',
  imports: [],
  templateUrl: './utlagg-button.html',
  styleUrl: './utlagg-button.css'
})
export class UtlaggButton {

  @Output() utlaggEvent = new EventEmitter<Utlagg[]>();

  sendUtlagg() {
    this.utlaggEvent.emit(DUMMY_UTLAGG);
  }
}
