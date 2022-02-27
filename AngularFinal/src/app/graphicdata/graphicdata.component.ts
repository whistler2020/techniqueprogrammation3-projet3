import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Objetvoyage } from '../objetvoyage';
import { ForfaitvoyageService } from '../forfaitvoyage.service';

@Component({
  selector: 'app-graphicdata',
  templateUrl: './graphicdata.component.html',
  styleUrls: ['./graphicdata.component.css']
})
export class GraphicdataComponent implements OnInit {
  forfaits : Objetvoyage[] = [];
  
  public monGraphique = { 
    type: <ChartType>'bar', 
      legende: true, 
      plugins:[], 
      options: { responsive: true, maintainAspectRatio: false } 
    }; 

    public forfait: ChartData<'bar', number[], string | string[]> = { 
        labels: ['2008', '2009', '2010', '2011', '2012'], 
           datasets: [ 
             { data: [800, 581, 568, 485, 852], label: 'Forfait Complet' }, 
             { data: [400, 190, 230, 140, 200], label: 'Mini Forfait ' } 
          ] 
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

// mesDonnees
