import {Component, EventEmitter, Output} from '@angular/core';
import {Utlagg} from '../../../model/utlagg';
import {DUMMY_UTLAGG} from '../../../../assets/utlagg_data';

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
