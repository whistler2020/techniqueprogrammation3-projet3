import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pied-page',
  templateUrl: './pied-page.component.html',
  styleUrls: ['../shared/shared-styles.css', './pied-page.component.css']
})
export class PiedPageComponent implements OnInit {
  titre = 'CopyRight Fev 2022  Whistler Clermont ';
  constructor() { }

  ngOnInit(): void {
  }

}
