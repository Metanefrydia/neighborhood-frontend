import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit {

  announcement = {
    title: "Wymiana Opon",
    user: "Jan Nowak", 
    description: "Oferuje wymiane opon na zimowe/letnie. Lorem ipsum nanananananananan lolololol cokolwiek lol iksde.",
    price: 100 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
