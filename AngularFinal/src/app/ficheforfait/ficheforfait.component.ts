import { Component, Input, OnInit } from '@angular/core';
import { Objetvoyage } from '../objetvoyage';

@Component({
  selector: 'app-ficheforfait',
  templateUrl: './ficheforfait.component.html',
  styleUrls: ['../shared/shared-styles.css', './ficheforfait.component.css']
})
export class FicheforfaitComponent implements OnInit {
 
  @Input() forfait?: Objetvoyage;
  
  constructor() { }

  ngOnInit(): void {
  }

}
