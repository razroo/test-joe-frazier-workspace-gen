import { Component } from '@angular/core';

@Component({
  selector: 'test-joe-frazier-workspace-gen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-joe-frazier-workspace-gen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
