import { Component } from '@angular/core';
import { SeoComponent } from './core/seo';
import { Shell } from './shared/layout/shell/shell';

@Component({
  selector: 'app-root',
  imports: [SeoComponent, Shell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Root component delegates all layout and navigation to app-shell.
}
