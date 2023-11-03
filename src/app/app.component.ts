import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'GymStore-Angular';
  toggleMenuStats(): void{
    let menuMobileStats = document.querySelector('.mobile-menu');
      if (menuMobileStats?.classList.contains('menu-open')){
        menuMobileStats.classList.remove('menu-open');
      }else{
        menuMobileStats?.classList.add('menu-open');
      }
  }
}
