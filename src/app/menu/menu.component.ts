import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output()
  addEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addContact() {
    this.addEvent.emit(true);
  }
}
