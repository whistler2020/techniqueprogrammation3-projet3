import { Component, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-miniforfait3',
  templateUrl: './miniforfait3.component.html',
  styleUrls: ['./miniforfait3.component.css']
})
export class Miniforfait3Component implements OnInit {
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
