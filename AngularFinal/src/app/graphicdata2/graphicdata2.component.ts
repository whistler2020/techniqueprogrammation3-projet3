import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js'; 
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-graphicdata2',
  templateUrl: './graphicdata2.component.html',
  styleUrls: ['./graphicdata2.component.css']
})
export class Graphicdata2Component implements OnInit {
  forfaits : Objetvoyage[] = [];

  public monGraphique = { 
         type: <ChartType>'pie', 
         legende: true, 
         options: { responsive: true, maintainAspectRatio: false },  
         plugins: [] 
       }; 
     
       public forfait: ChartData<'pie', number[], string | string[]> = { 
         labels: ['Forfait Complet', 'Mini Forfait', 'Autre Forfait...'], 
         datasets: [{ 
           data: [5800, 1536, 3657],  
           backgroundColor: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0'] 
         }] 
       }; 
    
       constructor(private forfaitService: ForfaitvoyageService) { }
    
       ngOnInit(): void {
         this.getForfaits();
       }
     
       getForfaits(): void {
         this.forfaitService.getForfaits()
           .subscribe(resultat => this.forfaits = resultat);
       }
 

}
