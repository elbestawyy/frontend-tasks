import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class Users {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ];

  private nextId = 3;

  getAll(): User[] {
    return [...this.users];
  }

  create(user: User): User {
    const newUser = { ...user, id: this.nextId++ };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updated: User): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) this.users[index] = { ...updated, id };
  }

  delete(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}
