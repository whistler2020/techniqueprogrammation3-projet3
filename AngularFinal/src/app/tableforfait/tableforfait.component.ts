import { Component, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';
import { FormulairedialogComponent } from '../formulairedialog/formulairedialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tableforfait',
  templateUrl: './tableforfait.component.html',
  styleUrls: ['./tableforfait.component.css']
})

export class TableforfaitComponent implements OnInit {
  
forfaits: Objetvoyage[] = [];

selectedForfait?: Objetvoyage;

columnsToDisplay = ['idReservation', 'destination', 'villeDepart', 'nomHotel', 'coordonneesHotel', 'nombreEtoiles', 'nombreChambres', 'catacteristiques', 'dateDepart', 'dateRetour', 'prix', 'rabais', 'vedette']

  constructor(private forfaitService: ForfaitvoyageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

  onDelete(forfait: Objetvoyage): void {
    this.forfaitService.deleteForfait(forfait.idReservation)
      .subscribe(result => this.forfaits = this.forfaits.filter(p => p !== forfait));
  }

  
  onSelect(forfait?: Objetvoyage) { 
    if (!forfait) { 
        this.selectedForfait = { idReservation: '', destination: '', villeDepart:'', hotel:{nomHotel:'', coordonneesHotel:'', nombreEtoiles:0, nombreChambres:0, caracteristiques:['Ascenseur','miniclud','vue sur plage']}, dateDepart:'', dateRetour:'', prix: 0, rabais:0, vedette:false } 
    } else {  
        this.selectedForfait = forfait; 
    } 
    const dialogRef = this.dialog.open(FormulairedialogComponent, { 
      width: '500px', 
      data: this.selectedForfait, 
    }); 
    
    dialogRef.afterClosed().subscribe(_ => { 
    this.selectedForfait = undefined; 
    this.getForfaits(); 
    }); 
  } 
}

