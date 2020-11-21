import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AnnouncementDTO, UserDTO } from '../shared/app.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  apiUrl = 'https://192.168.1.4:5001';

  getAllAnnouncements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Announcement/all`);
  }

  getAnnouncement(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Announcement/${id}`);
  }

  postAnnouncement(announcement: any) {
    console.log(announcement);
    this.http.post<any>(`${this.apiUrl}`, announcement).subscribe(resp => {
      console.log(resp);
   });
  }

  postAccountDetails(accountDetails: any) {
    console.log(accountDetails);
    this.http.post<any>(`${this.apiUrl}/api/Account/Register`, accountDetails, this.headers).subscribe(resp => {
      console.log(resp);
   });
  }
}
