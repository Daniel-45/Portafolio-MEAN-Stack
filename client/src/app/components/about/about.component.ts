import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;
  public email: string;

  constructor() {
    this.title = 'Daniel Pompa Pareja';
    this.subtitle = 'Desarrollador Full Stack';
    this.web = 'danielweb.es';
    this.email = 'daniel@gmail.com';
  }

  ngOnInit(): void {
  }

}
