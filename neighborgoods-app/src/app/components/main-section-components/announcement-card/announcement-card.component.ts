import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.scss']
})
export class AnnouncementCardComponent implements OnInit {

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
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
