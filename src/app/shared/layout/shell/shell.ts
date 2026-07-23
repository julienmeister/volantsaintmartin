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
    { label: 'ACCUEIL', icon: 'home', route: '/' },
    { label: 'LE CLUB', icon: 'groups', route: '/club' },
    { label: 'ENTRAÎNEMENTS', icon: 'directions_run', route: '/entrainements' },
    { label: 'COMPÉTITIONS', icon: 'emoji_events', route: '/competitions' },
    { label: 'AGENDA', icon: 'event', route: '/agenda' },
    { label: 'INFORMATIONS PRATIQUES', icon: 'fact_check', route: '/informations' },
    { label: "S'INSCRIRE", icon: 'person_add', route: '/inscription' },
    { label: 'CONTACT', icon: 'mail', route: '/contact' }
  ];
}
