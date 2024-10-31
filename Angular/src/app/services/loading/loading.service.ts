import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: any = signal(false);

  /**
   * toggle the isLoading boolean signal
   */
  onLoadingToggle() {
    this.isLoading.set(!this.isLoading());
  }
}
