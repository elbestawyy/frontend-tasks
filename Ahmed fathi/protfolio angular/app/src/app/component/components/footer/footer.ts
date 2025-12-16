import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>© 2024 Portfolio. Built By Ahmed mohamed fathi.</p>
    </footer>
  `,
  styles: [`
    footer { text-align: center; padding: 2rem; background: #1e293b; color: #94a3b8; font-size: 0.9rem; }
  `]
})
export class Footer {}