import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { ConfigService } from 'src/app/config.service';
import { AnnouncementDetailsComponent } from '../announcement-details/announcement-details.component';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.scss']
})
export class AnnouncementCardComponent implements OnInit {
  public announcementSub = new Subscription;
  public announcements$ = new Observable;
  public announcements = [
    {
      "title": "Domowe pierogi",
      "user": "Anna Kowalska",
      "description": "Oferuje domowe pierogi z serem, ruskie, ze szpinakiem.",
      "price": 5,
      "email": "annakowalska@email.com",
      "phoneNumber": "823754832",
      "category": "other"
    },
    {
      "title": "Potrzebuje zakupów",
      "user": "Marian Podgórski",
      "description": "Potrzebuje: Jajka, sałata, pierogi, mleko, masło.",
      "price": 10,
      "email": "marianxd@email.com",
      "phoneNumber": "777253832",
      "category": "shopping"
    },
    {
      "title": "Pomoc w naprawie samochodu",
      "user": "Łukasz Brzęczyszczykiewicz",
      "description": "Potrzebna pomoc. Umiejętności niepotrzebne ale mile widziane.",
      "price": 50,
      "email": "kubica0199@email.com",
      "phoneNumber": "918927394",
      "category": "services"
    },
    {
      "title": "Sprzedam różne kable",
      "user": "Piotrek Łękołowy",
      "description": "Sprzedam niepotrzebne kable: HDMI, VGA, DisplayPort...",
      "price": 40,
      "email": "myy7123a@email.com",
      "phoneNumber": "826162731",
      "category": "services"
    },
    {
      "title": "Oddam jeża :(",
      "user": "Maria Berkowicz",
      "description": "Jeżyk szuka domu. Wspaniały kompan na chłodne zimowe wieczory.",
      "price": 0,
      "email": "marbermar@email.com",
      "phoneNumber": "521442415",
      "category": "animals"
    },
    {
      "title": "Potrzebna pomoc w remoncie",
      "user": "Janusz Jan",
      "description": "Remont łazienki. Wymiana płytek, wywóz gruzu i sprzątanie.",
      "price": 700,
      "email": "janjanjan@email.com",
      "phoneNumber": "828776632",
      "category": "services"
    },
    {
      "title": "Potrzebna pomoc w organizacji wesela",
      "user": "Agnieszka Aryjczyk",
      "description": "Wesele",
      "price": 900,
      "email": "agaryjczyk@email.com",
      "phoneNumber": "918266721",
      "category": "accommodation"
    },
    {
      "title": "Sprzedam jabłka Jona Gold",
      "user": "Tomasz Juk",
      "description": "Wiejske jabłka na sprzedaż.",
      "price": 3,
      "email": "tomaszjuk@email.com",
      "phoneNumber": "6562637261",
      "category": "shopping"
    },
    {
      "title": "Tort na zamówienie",
      "user": "CukCuk",
      "description": "Firma cukiernicza przygotuje tort na zamówienie.",
      "price": 150,
      "email": "cukcuk@email.com",
      "phoneNumber": "918273626",
      "category": "other"
    }
  ];
  public config = {};

  constructor(public configService: ConfigService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.announcements$ = this.configService.getAllAnnouncements();
    this.announcementSub = this.announcements$.subscribe(response => console.log(response));
  }

  ngOnDestroy():void {
    this.announcementSub.unsubscribe();
  }

  openAnnouncementDetailsDialog() {
    this.dialog.open(AnnouncementDetailsComponent);
  }
}
