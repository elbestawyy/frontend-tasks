import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/iuser';
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";
import { UserFormComponent } from "../components/user-form/user-form.component";
import { UserListComponent } from "../components/user-list/user-list.component";
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialogComponent, UserFormComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud');
   private _iuser = inject(ApiServiceService);

  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
  userToDelete = signal<User | null>(null);

  showForm = signal(false);
  showDeleteConfirm = signal(false);
  
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading.set(true);
    this.error.set(null);
    this._iuser.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Failed to load users. Please try again later.');
        this.isLoading.set(false);
      },
    });
  }

  onAddUser() {
    this.selectedUser.set(null);
    this.showForm.set(true);
  }

  onEditUser(user: User) {
    this.selectedUser.set(user);
    this.showForm.set(true);
  }

  onDeleteUser(user: User) {
    this.userToDelete.set(user);
    this.showDeleteConfirm.set(true);
  }

  onSaveUser(user: User) {
    this.error.set(null);
    const saveObservable$ = user.id
      ? this._iuser.updateUser(user)
      : this._iuser.createUser(user);

    saveObservable$.subscribe({
      next: (savedUser) => {
        if (user.id) {
          this.users.update(users => users.map(u => u.id === savedUser.id ? savedUser : u));
        } else {
          this.users.update(users => [...users, savedUser]);
        }
        this.closeForm();
      },
      error: (err) => {
        console.error(err);
        this.error.set(`Failed to ${user.id ? 'update' : 'create'} user.`);
      }
    });
  }

  onCancelForm() {
    this.closeForm();
  }
  
  private closeForm() {
    this.showForm.set(false);
    this.selectedUser.set(null);
  }

  onConfirmDelete(confirmed: boolean) {
    if (confirmed) {
      const user = this.userToDelete();
      if (user) {
        this.error.set(null);
        this._iuser.deleteUser(user.id).subscribe({
          next: () => {
            this.users.update(users => users.filter(u => u.id !== user.id));
            this.closeDeleteConfirm();
          },
          error: (err) => {
            console.error(err);
            this.error.set('Failed to delete user.');
            this.closeDeleteConfirm();
          }
        });
      }
    } else {
      this.closeDeleteConfirm();
    }
  }

  private closeDeleteConfirm() {
    this.showDeleteConfirm.set(false);
    this.userToDelete.set(null);
  }
}
