import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistdetailComponent } from './artists/artistdetail/artistdetail.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ArtistService } from './artist.service';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SocialLoginModule, LinkedInLoginProvider,
GoogleLoginProvider, FacebookLoginProvider,  AuthServiceConfig } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1073107357799-m4sh1mivscnmg4q1vo552vtfra9rtns3.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [ 
    AppComponent,
    ArtistsComponent,
    ArtistComponent,
    HeaderComponent,
    FormsComponent,
    ReactiveformsComponent,
    FooterComponent,
    ArtistdetailComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    RouterModule,
    SocialLoginModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
      ],
  providers: [ArtistService, TranslateService,{provide: AuthServiceConfig,useFactory: provideConfig}],
  bootstrap : [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
