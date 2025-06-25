import {Component, EventEmitter, Output} from '@angular/core';
import {Faktura} from '../../../model/faktura';
import {DUMMY_FAKTUROR} from '../../../../assets/fakturor_data';

@Component({
  selector: 'app-fakturor-button',
  imports: [],
  templateUrl: './fakturor-button.html',
  styleUrl: './fakturor-button.css'
})
export class FakturorButton {

  @Output() fakturorEvent = new EventEmitter<Faktura[]>();

  sendFakturor() {
    this.fakturorEvent.emit(DUMMY_FAKTUROR);
  }
}
