import {Component} from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {GlobalState} from '../../../../../global.state';
import {RestService, WebSocketService} from '../../../../../services/';

@Component({
  selector : 'app-zvol-delete',
  template : `<entity-delete [conf]="this"></entity-delete>`
})
export class ZvolDeleteComponent {

  protected pk: any;
  protected path: string;
  public sub: Subscription;
  protected route_success: string[] = [ 'storage', 'volumes' ];
  get resource_name(): string {
    return 'storage/volume/' + this.pk + '/zvols/';
  }

  constructor(protected router: Router, protected aroute: ActivatedRoute,
              protected rest: RestService, protected ws: WebSocketService) {}

  clean_name(value) {
    let start = this.path.split('/').splice(1).join('/');
    if (start != '') {
      return start + '/' + value;
    } else {
      return value;
    }
  }

  getPK(entityDelete, params) {
    this.pk = params['pk'];
    this.path = params['path'];
    entityDelete.pk = this.path.split('/').splice(1).join('/');
  }

  afterInit(entityAdd: any) {
    // this.rest.get(this.resource_name, {limit: 0, bsdgrp_builtin:
    // false}).subscribe((res) => {
    //   let gid = 999;
    //   res.data.forEach((item, i) => {
    //     if(item.bsdgrp_gid > gid) gid = item.bsdgrp_gid;
    //   });
    //   gid += 1;
    //   entityAdd.formGroup.controls['bsdgrp_gid'].setValue(gid);
    // });
  }
}
