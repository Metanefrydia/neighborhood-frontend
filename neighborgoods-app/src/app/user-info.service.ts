import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public isUserLoggedIn = true;
  public currentUserId = 0;

  constructor() { }
}
