import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  public isAuthenticated: boolean;

  constructor(private http: HttpClient) { }


}
