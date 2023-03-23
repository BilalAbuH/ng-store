import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  //@Input() isOpen: boolean = false;

  public sidebarOpen: boolean = false;
  public openSidebar(): void {
    this.sidebarOpen = true;
  }

  public closeSidebaar(): void {
    this.sidebarOpen = false;
  }
}
