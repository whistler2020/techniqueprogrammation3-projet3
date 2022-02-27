import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descriptionforfait',
  templateUrl: './descriptionforfait.component.html',
  styleUrls: ['../shared/shared-styles.css','./descriptionforfait.component.css']
})
export class DescriptionforfaitComponent implements OnInit {
  @Input() idReservation ='';
  @Input() destination ='';
  @Input() Depart ='';
  @Input() hotel ='';
  @Input() phone ='';
  @Input() Etoiles =0;
  @Input() Chambres =0;
  @Input() caracteristiques=[];
  @Input() datedepart ='';
  @Input() dateretour ='';
  @Input() prix = 0;
  @Input() rabais =0;
  @Input() vedette =false;
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
