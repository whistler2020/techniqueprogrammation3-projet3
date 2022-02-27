import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ForfaitvoyageService } from './forfaitvoyage.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { Miniforfait1Component } from './miniforfait1/miniforfait1.component';
import { Miniforfait3Component } from './miniforfait3/miniforfait3.component';
import { SeparateurComponent } from './separateur/separateur.component';
import { Miniforfait2Component } from './miniforfait2/miniforfait2.component';
import { FicheforfaitComponent } from './ficheforfait/ficheforfait.component';
import { ListeforfaitComponent } from './listeforfait/listeforfait.component';
import { FormulaireforfaitComponent } from './formulaireforfait/formulaireforfait.component';
import { TableforfaitComponent } from './tableforfait/tableforfait.component';
import { FormulairedialogComponent } from './formulairedialog/formulairedialog.component';
import { DescriptionforfaitComponent } from './descriptionforfait/descriptionforfait.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphicdata2Component } from './graphicdata2/graphicdata2.component';
import { GraphicdataglobaleComponent } from './graphicdataglobale/graphicdataglobale.component';
import { GraphicdataComponent } from './graphicdata/graphicdata.component';
import { ListeminiforfaitComponent } from './listeminiforfait/listeminiforfait.component';
import { SeparateurminiComponent } from './separateurmini/separateurmini.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    Miniforfait1Component,
    Miniforfait3Component,
    SeparateurComponent,
    Miniforfait2Component,
    FicheforfaitComponent,
    ListeforfaitComponent,
    FormulaireforfaitComponent,
    TableforfaitComponent,
    FormulairedialogComponent,
    DescriptionforfaitComponent,
    AProposComponent,
    Graphicdata2Component,
    GraphicdataglobaleComponent,
    GraphicdataComponent,
    ListeminiforfaitComponent,
    SeparateurminiComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [ForfaitvoyageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
