import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: any = signal(false);

  constructor() { }

  /**
   * toggle the isLoading boolean signal
   */
  onLoadingToggle() {
    this.isLoading.set(!this.isLoading());
  }
}
