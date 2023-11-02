import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MenuBarComponent {

  toggleMenuStats(): void{
    let menuMobileStats = document.querySelector('.mobile-menu');
      if (menuMobileStats?.classList.contains('menu-open')){
        menuMobileStats.classList.remove('menu-open');
      }else{
        menuMobileStats?.classList.add('menu-open');
      }
  }
}
