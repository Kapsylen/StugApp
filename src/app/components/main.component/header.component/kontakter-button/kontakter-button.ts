import {Component, EventEmitter, Output} from '@angular/core';
import {Kontakt} from '../../../model/kontakt';
import {DUMMY_KONTAKTER} from '../../../../assets/kontakter_data';

@Component({
  selector: 'app-kontakter-button',
  imports: [],
  templateUrl: './kontakter-button.html',
  styleUrl: './kontakter-button.css'
})
export class KontakterButton {

  @Output() kontakterEvent = new EventEmitter<Kontakt[]>();

  sendKontakter() {
    this.kontakterEvent.emit(DUMMY_KONTAKTER);
  }
}
