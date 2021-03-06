import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng2-dynamic-forms/core';
import {DynamicFormsBootstrapUIModule} from '@ng2-dynamic-forms/ui-bootstrap';
import {NgUploaderModule} from 'ngx-uploader';

import {NgaModule} from '../../theme/nga.module';
import {FnCommonModule} from '../common/common.module';
import {EntityModule} from '../common/entity/entity.module';

import {ConfigurationComponent} from './configuration/';
import {routing} from './network.routing';

@NgModule({
  imports : [
    EntityModule, DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule, CommonModule, FormsModule,
    ReactiveFormsModule, NgaModule, NgUploaderModule, FnCommonModule, routing
  ],
  declarations : [
    ConfigurationComponent,
  ],
  providers : []
})
export class NetworkModule {
}
