import { Component, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-listeforfait',
  templateUrl: './listeforfait.component.html',
  styleUrls: ['../shared/shared-styles.css','./listeforfait.component.css']
})
export class ListeforfaitComponent implements OnInit {
  titre = 'Liste Forfaits';
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
