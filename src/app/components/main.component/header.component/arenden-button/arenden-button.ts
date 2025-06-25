import {Component, EventEmitter, Output} from '@angular/core';
import {Arende} from '../../../model/arenden';
import {DUMMY_ARENDEN} from '../../../../assets/arenden_data';

@Component({
  selector: 'app-arenden-button',
  imports: [],
  templateUrl: './arenden-button.html',
  styleUrl: './arenden-button.css'
})
export class ArendenButton {

  @Output() fakturorEvent = new EventEmitter<Arende[]>();

  sendArenden() {
    this.fakturorEvent.emit(DUMMY_ARENDEN);
  }
}
