import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contacts: Contact[] = [
    {
      id: 1,
      prenom: 'Benjamin',
      nom: 'Brunquers',
      email: 'bbr@audaxis.com',
      dateNaissance: '19/07/1991',
    },
  ];
  isTableView = true;

  addNewContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.isTableView = true;
  }
}
