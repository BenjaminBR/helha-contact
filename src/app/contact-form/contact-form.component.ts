import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  newContact: Contact = {};

  @Output()
  saveEvent: EventEmitter<Contact> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  saveContact() {
    this.saveEvent.emit(this.newContact);
  }
}
