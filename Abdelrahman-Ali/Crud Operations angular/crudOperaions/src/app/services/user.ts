import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 1. GET (The list of users)
  users = signal<User[]>([
    { id: 1, name: 'Abdelrahman', role: 'Developer' }
  ]);

  // 2. POST (Add)
  addUser(name: string, role: string) {
    const newUser: User = { id: Date.now(), name, role };
    this.users.update(list => [...list, newUser]);
  }

  // 3. DELETE
  deleteUser(id: number) {
    this.users.update(list => list.filter(u => u.id !== id));
  }

  // 4. UPDATE
  updateUser(id: number, name: string, role: string) {
    this.users.update(list =>
      list.map(u => u.id === id ? { ...u, name, role } : u)
    );
  }
}