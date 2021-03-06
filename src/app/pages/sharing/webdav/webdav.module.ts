import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng2-dynamic-forms/core';
import {DynamicFormsBootstrapUIModule} from '@ng2-dynamic-forms/ui-bootstrap';

import {NgaModule} from '../../../theme/nga.module';
import {EntityModule} from '../../common/entity/entity.module';

import {WebdavListComponent} from './webdav-list/';
import {WebdavFormComponent} from './webdav-form/';
import {WebdavDeleteComponent} from './webdav-delete/';
import {routing} from './webdav.routing';

@NgModule({
  imports : [
    EntityModule, DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule, CommonModule, FormsModule,
    ReactiveFormsModule, NgaModule, routing
  ],
  declarations : [
    WebdavListComponent,
    WebdavFormComponent,
    WebdavDeleteComponent,
  ],
  providers : []
})
export class WebdavModule {
}
