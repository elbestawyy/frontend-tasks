import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users, User } from '../services/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html'
})
export class UsersComponent {

  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };

  editingId: number | null = null;
  editUser: User = { id: 0, name: '', email: '' };

  constructor(private usersService: Users) {
    this.users = this.usersService.getAll();
  }

  addUser() {
    this.usersService.create(this.newUser);
    this.newUser = { id: 0, name: '', email: '' };
    this.users = this.usersService.getAll();
  }

  deleteUser(id: number) {
    this.usersService.delete(id);
    this.users = this.usersService.getAll();
  }

  startEdit(user: User) {
    this.editingId = user.id;
    this.editUser = { ...user };
  }

  saveEdit() {
    if (this.editingId !== null) {
      this.usersService.update(this.editingId, this.editUser);
      this.editingId = null;
      this.users = this.usersService.getAll();
    }
  }
}
