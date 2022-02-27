import { Component, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-miniforfait1',
  templateUrl: './miniforfait1.component.html',
  styleUrls: ['../shared/shared-styles.css','./miniforfait1.component.css']
})
export class Miniforfait1Component implements OnInit {
  
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
