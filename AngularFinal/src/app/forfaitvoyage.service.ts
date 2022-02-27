import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Objetvoyage } from './objetvoyage';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ForfaitvoyageService {
  forfaitvoyagesUrl = 'http://localhost/WCprojet2API/api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Objetvoyage[]> {
    return this.http.get<Objetvoyage[]>(this.forfaitvoyagesUrl);  
  }

  addForfait(forfait: Objetvoyage): Observable<Objetvoyage> {
    console.log(this.forfaitvoyagesUrl);
    return this.http.post<Objetvoyage>(this.forfaitvoyagesUrl, forfait, httpOptions);
  }

  editForfait(forfait: Objetvoyage): Observable<Objetvoyage> {
    return this.http.put<Objetvoyage>(this.forfaitvoyagesUrl + "?idReservation=" + forfait.idReservation, forfait, httpOptions);
  }

  deleteForfait(idReservation: string): Observable<Objetvoyage> {
    return this.http.delete<Objetvoyage>(this.forfaitvoyagesUrl + "?idReservation=" +  idReservation);
  }


}
