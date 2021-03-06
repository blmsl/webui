import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  AuthorizedAccessDeleteComponent
} from './authorizedaccess/authorizedaccess-delete/';
import {
  AuthorizedAccessFormComponent
} from './authorizedaccess/authorizedaccess-form/';
import {GlobalconfigurationComponent} from './globalconfiguration/';
import {InitiatorDeleteComponent} from './initiator/initiator-delete/';
import {InitiatorFormComponent} from './initiator/initiator-form/';
import {ISCSI} from './iscsi.component';
import {PortalAddComponent} from './portal/portal-add/';
import {PortalDeleteComponent} from './portal/portal-delete/';
import {PortalEditComponent} from './portal/portal-edit/';
import {PortalListComponent} from './portal/portal-list/';
import {TargetAddComponent} from './target/target-add/';
import {TargetEditComponent} from './target/target-edit/';
import {TargetDeleteComponent} from './target/target-delete/';

export const routes: Routes = [
  {path : '', component : ISCSI},
  {path : 'portals/delete/:pk', component : PortalDeleteComponent},
  {path : 'portals/add', component : PortalAddComponent},
  {path : 'portals/edit/:pk', component : PortalEditComponent},
  {path : 'initiators/add', component : InitiatorFormComponent},
  {path : 'initiators/delete/:pk', component : InitiatorDeleteComponent},
  {path : 'initiators/edit/:pk', component : InitiatorFormComponent},
  {path : 'auth/add', component : AuthorizedAccessFormComponent},
  {path : 'auth/delete/:pk', component : AuthorizedAccessDeleteComponent},
  {path : 'auth/edit/:pk', component : AuthorizedAccessFormComponent},
  {path : 'target/delete/:pk', component : TargetDeleteComponent},
  {path : 'target/add', component : TargetAddComponent},
  {path : 'target/edit/:pk', component: TargetEditComponent},
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
