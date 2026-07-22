import { Component } from '@angular/core';
import { Shell } from './shared/layout/shell/shell';

@Component({
  selector: 'app-root',
  imports: [Shell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Root component delegates all layout and navigation to app-shell.
}
