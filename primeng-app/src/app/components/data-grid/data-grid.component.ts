import { Component, OnInit } from '@angular/core';
import {RatingModule} from 'primeng/primeng';

import { OrgnizationServices } from "app/org.service";
import { OrgnizationModel, ApplicantOrgnizationRelationModel } from "app/models/orgnization.model";


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {

  val:any;

  constructor(private orgnizationServices: OrgnizationServices) { }

  orgs: OrgnizationModel[];
  ngOnInit() {
    this.orgnizationServices.getOrgs().subscribe(data => {
      this.orgs = data;
      console.log(this.orgs);
      console.log(this.orgs[0].Name);
    });
  }

}
