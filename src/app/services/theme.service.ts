import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isLightMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Ensure we are in the browser (important if you ever add Server Side Rendering)
    if (isPlatformBrowser(this.platformId)) {
      // Check system preference
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      
      if (prefersLight) {
        this.setLightTheme();
      } else {
        // Default to dark if preferring dark, or if system setting is absent
        this.setDarkTheme(); 
      }
    }
  }

  setLightTheme(): void {
    this.isLightMode = true;
    document.documentElement.setAttribute('data-theme', 'light');
  }

  setDarkTheme(): void {
    this.isLightMode = false;
    document.documentElement.removeAttribute('data-theme'); // Falls back to :root defaults
  }

  toggleTheme(): void {
    this.isLightMode ? this.setDarkTheme() : this.setLightTheme();
  }
}
