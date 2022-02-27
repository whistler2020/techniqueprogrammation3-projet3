import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeforfaitComponent } from './listeforfait/listeforfait.component';
import { TableforfaitComponent } from './tableforfait/tableforfait.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { FormulaireforfaitComponent } from './formulaireforfait/formulaireforfait.component';
import { GraphicdataglobaleComponent } from './graphicdataglobale/graphicdataglobale.component';
import { ListeminiforfaitComponent } from './listeminiforfait/listeminiforfait.component';


const routes: Routes = [
  { path: 'listeforfait', component: ListeforfaitComponent },
  { path: 'tableforfait', component: TableforfaitComponent },
  { path: 'aPropos', component: AProposComponent },
  { path: 'formulaireforfait', component: FormulaireforfaitComponent },
  { path: 'graphicdataglobale', component: GraphicdataglobaleComponent},
  { path: 'listeminiforfait', component: ListeminiforfaitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
