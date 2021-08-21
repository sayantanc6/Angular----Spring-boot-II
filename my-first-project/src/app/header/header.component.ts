import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocialloginService } from '../sociallogin.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated: boolean;

  constructor(public translate: TranslateService, public auth: AuthService,
              public socialloginService: SocialloginService, public router: Router) {
    translate.addLangs(['en', 'fr', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
   }

  ngOnInit() {
    this.isAuthenticated = this.socialloginService.isAuthenticated;
  }

  public signout(){
    this.auth.signOut();
    this.isAuthenticated =false;
    this.socialloginService.isAuthenticated = false;
    this.router.navigate([`http://localhost:4200/`]);
  }


}
