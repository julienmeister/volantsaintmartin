import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

const MOBILE_BREAKPOINT = '(max-width: 768px)';

@Component({
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  private readonly breakpointObserver = inject(BreakpointObserver);

  // Exposes responsive state as a signal for template-friendly bindings.
  readonly isMobile = toSignal(
    this.breakpointObserver.observe(MOBILE_BREAKPOINT).pipe(map((r) => r.matches)),
    { initialValue: false },
  );

  // Single source of truth for side navigation entries.
  readonly navItems = [
    { label: 'Accueil', icon: 'home', route: '/' },
    { label: 'Le Club', icon: 'groups', route: '/club' },
    { label: 'Entraînements', icon: 'directions_run', route: '/entrainements' },
    { label: 'Compétitions', icon: 'emoji_events', route: '/competitions' },
    { label: 'Boutique', icon: 'shopping_bag', route: '/boutique' },
    { label: 'Contact', icon: 'mail', route: '/contact' },
  ];
}
