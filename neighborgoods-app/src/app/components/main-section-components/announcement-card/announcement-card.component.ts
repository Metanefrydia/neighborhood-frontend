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
  public announcements = [{
    title: "Domowe pierogi",
    user: "Anna Kowalska", 
    description: "Oferuje domowe pierogi z serem, ruskie, ze szpinakiem.",
    price: 1 
  },
  {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  },
  {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  },
  {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  },
  {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  },
  {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  }
]
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
