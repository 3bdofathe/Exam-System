import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HideSidebarOnClickDirective } from '../../../shared/directives/hide-sidebar-on-click.directive';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, HideSidebarOnClickDirective, ConfirmDialogComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showConfirmDialog = false;

  constructor(private router: Router) { }

  dashboardLinks: { icon: string; text: string }[] = [
    { icon: "bi bi-house-door", text: "Dashboard" },
    { icon: "bi bi-people-fill", text: "Exams" },
    { icon: "bi bi-card-image", text: "Register" },
    { icon: "bi bi-file-earmark-text", text: "Reports" },
    { icon: "bi bi-paypal", text: "Payment" },
  ];

  showLogoutConfirmation() {
    this.showConfirmDialog = true;
  }

  onLogoutConfirm() {
    this.showConfirmDialog = false;
    this.logout();
  }

  onLogoutCancel() {
    this.showConfirmDialog = false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
