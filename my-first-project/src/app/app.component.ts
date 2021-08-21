import { Component } from '@angular/core';
import { SocialloginService } from './sociallogin.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  isAuthenticated: boolean;

  constructor(
    public socialloginService: SocialloginService,
    public auth: AuthService,
    public router: Router){
  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.signInInit();
  }

  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.signInInit();
  }

  public signInInit() {
    this.isAuthenticated = true;
      this.socialloginService.isAuthenticated = true;
      this.router.navigate([`/artists`]);
  }
}
