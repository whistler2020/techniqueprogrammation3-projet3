import { Component, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-miniforfait2',
  templateUrl: './miniforfait2.component.html',
  styleUrls: ['./miniforfait2.component.css']
})
export class Miniforfait2Component implements OnInit {

  forfaits : Objetvoyage[] = [];
  constructor(private forfaitService: ForfaitvoyageService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }


}
