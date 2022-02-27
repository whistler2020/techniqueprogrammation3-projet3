import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-formulaireforfait',
  templateUrl: './formulaireforfait.component.html',
  styleUrls: ['./formulaireforfait.component.css']
})
export class FormulaireforfaitComponent implements OnInit {
  @Input() forfait: Objetvoyage = {idReservation:'', destination:'', villeDepart:'', hotel:{nomHotel:'', coordonneesHotel:'', nombreEtoiles:0, nombreChambres:0, caracteristiques:['']}, dateDepart:'', dateRetour:'', prix:0, rabais:0, vedette:false}
 
  @Output() majTableau = new EventEmitter();

  constructor(private forfaitService: ForfaitvoyageService) { }

  ngOnInit(): void {
  }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.idReservation != null && this.forfait.idReservation != '') {
        // Si on a un id, on doit modifier le forfait voyage
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit()  });

      } else { 
        // Sinon, on doit ajouter le forfait voyage
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      }
    }
  }
  onCancel(){
    this.majTableau.emit();
  }
}
