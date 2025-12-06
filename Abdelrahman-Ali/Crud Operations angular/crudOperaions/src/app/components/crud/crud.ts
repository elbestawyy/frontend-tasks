import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import this for [(ngModel)]
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule], // Required for binding inputs
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class CrudComponent {
  userService = inject(UserService);

  // Simple variables to hold input data
  userName = '';
  userRole = '';
  
  // Track which ID we are editing (null means we are adding new)
  editingId: number | null = null;

  // Function called when "Add/Update" button is clicked
  saveUser() {
    // Basic validation
    if (!this.userName || !this.userRole) {
      alert('Please fill in both fields');
      return;
    }

    if (this.editingId) {
      // UPDATE Logic
      this.userService.updateUser(this.editingId, this.userName, this.userRole);
      this.cancelEdit(); // Reset inputs
    } else {
      // POST Logic
      this.userService.addUser(this.userName, this.userRole);
      this.clearInputs();
    }
  }

  // Prepare inputs for editing
  onEdit(user: User) {
    this.editingId = user.id;
    this.userName = user.name;
    this.userRole = user.role;
  }

  // Delete user
  onDelete(id: number) {
    if (confirm('Delete this user?')) {
      this.userService.deleteUser(id);
      // If we deleted the user we were editing, clear inputs
      if (this.editingId === id) this.cancelEdit();
    }
  }

  // Reset everything
  cancelEdit() {
    this.editingId = null;
    this.clearInputs();
  }

  clearInputs() {
    this.userName = '';
    this.userRole = '';
  }
}