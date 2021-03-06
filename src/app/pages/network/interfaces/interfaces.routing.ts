import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InterfacesDeleteComponent} from './interfaces-delete/index';
import {InterfacesFormComponent} from './interfaces-form/';
import {InterfacesListComponent} from './interfaces-list/';

export const routes: Routes = [
  {path : '', component : InterfacesListComponent},
  {path : 'add', component : InterfacesFormComponent},
  {path : 'edit/:pk', component : InterfacesFormComponent},
  {path : 'delete/:pk', component : InterfacesDeleteComponent},
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
