import { Component, OnInit, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private storedTheme: string | null = localStorage.getItem('theme');
  private mediaQueryList: MediaQueryList | undefined;
  private mediaQueryChangeListener: (() => void) | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.loadScripts([
      'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
      'assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.js',
      'assets/vendor/apexcharts/js/apexcharts.min.js',
      'assets/js/functions.js'
    ]);
  }

  ngAfterViewInit(): void {
    this.setTheme(this.getPreferredTheme());
    this.setupThemeChangeListeners();
  }

  ngOnDestroy(): void {
    // Asegurarse de limpiar el event listener si fue asignado
    if (this.mediaQueryList && this.mediaQueryChangeListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryChangeListener);
    }
  }

  private loadScripts(urls: string[]): void {
    urls.forEach(url => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    });
  }

  private getPreferredTheme(): string {
    return this.storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  private setTheme(theme: string): void {
    const effectiveTheme = theme === 'auto' ? this.getPreferredTheme() : theme;
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', effectiveTheme);
    this.updateActiveThemeIcon(effectiveTheme);
  }

  private setupThemeChangeListeners(): void {
    const themeToggles = this.el.nativeElement.querySelectorAll('[data-bs-theme-value]');
    themeToggles.forEach((toggle: Element) => {
      this.renderer.listen(toggle, 'click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        if (theme) {
          localStorage.setItem('theme', theme);
          this.setTheme(theme);
        }
      });
    });

    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryChangeListener = () => {
      if (!['light', 'dark'].includes(this.storedTheme || '')) {
        this.setTheme(this.getPreferredTheme());
      }
    };
    this.mediaQueryList.addEventListener('change', this.mediaQueryChangeListener);
  }

  private updateActiveThemeIcon(theme: string): void {
    const activeThemeIcon = this.el.nativeElement.querySelector('.theme-icon-active use');
    const btnToActive = this.el.nativeElement.querySelector(`[data-bs-theme-value="${theme}"]`);
    if (btnToActive) {
      const svgOfActiveBtn = btnToActive.querySelector('.mode-switch use')?.getAttribute('href');
      if (activeThemeIcon && svgOfActiveBtn) {
        this.renderer.setAttribute(activeThemeIcon, 'href', svgOfActiveBtn);
      }
  
      const buttons: NodeListOf<Element> = this.el.nativeElement.querySelectorAll('[data-bs-theme-value]');
      buttons.forEach((button: Element) => { // Especificar el tipo de `button` como `Element`.
        this.renderer.removeClass(button, 'active');
      });
      this.renderer.addClass(btnToActive, 'active');
    }
  }
}