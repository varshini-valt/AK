import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionComponent } from '../reception/reception.component';
import { InviteStateService } from '../invite-state.service';

@Component({
  selector: 'app-curtain',
  imports: [CommonModule, ReceptionComponent],
  templateUrl: './curtain.component.html',
  styleUrl: './curtain.component.css'
})
export class CurtainComponent {
  opening = false;

  constructor(private state: InviteStateService) {}

  openCurtain() {
    this.opening = true;
    this.state.startAudio();
    setTimeout(() => this.state.curtainOpened.set(true), 1000);
  }
}
