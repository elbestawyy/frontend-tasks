import { Component, input, OnInit, output } from '@angular/core';
import { User } from '../../app/interfaces/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   users = input.required<User[]>();

  add = output<void>();
  edit = output<User>();
  delete = output<User>();

  onAdd() {
    this.add.emit();
  }

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(user: User) {
    this.delete.emit(user);
  }

}
