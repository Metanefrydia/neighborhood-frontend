import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public isUserLoggedIn = false;
  public currentUserId = 0;

  constructor() { }
}
