import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InviteStateService {
  curtainOpened = signal(false);

  private audio: HTMLAudioElement | null = null;

  startAudio() {
    if (this.audio) return;
    this.audio = new Audio('assets/audio.mpeg');
    this.audio.volume = 0.7;
    this.audio.currentTime = 0;
    this.audio.play();
    this.audio.addEventListener('timeupdate', () => {
      if (this.audio && this.audio.currentTime >= 22) {
        this.audio.currentTime = 0;
        this.audio.play();
      }
    });
  }
}
