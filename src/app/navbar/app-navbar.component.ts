import { Component} from '@angular/core';
import { AuthService } from '../Shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {
  constructor(private auth: AuthService, ){}
  v = false
  collapsed = true;
  logout(){
    this.auth.logout()
  }
}
