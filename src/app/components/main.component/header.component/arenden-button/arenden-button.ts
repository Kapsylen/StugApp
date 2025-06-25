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

  @Output() arendenEvent = new EventEmitter<Arende[]>();

  sendArenden() {
    this.arendenEvent.emit(DUMMY_ARENDEN);
  }
}
