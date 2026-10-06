import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InviteStateService } from '../invite-state.service';

@Component({
  selector: 'app-reception',
  imports: [CommonModule],
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {
  showArrow = false;

  constructor(private router: Router, private state: InviteStateService) {
    // watch for curtain to open, then trigger arrow animation
    const check = setInterval(() => {
      if (this.state.curtainOpened()) {
        this.showArrow = true;
        clearInterval(check);
      }
    }, 100);
  }

  goToMarriage() {
    this.showArrow = false;
    this.router.navigate(['/marriage']);
  }
}
