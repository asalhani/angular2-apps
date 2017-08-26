import { Component, OnInit } from '@angular/core';
import { RatingModule, Message } from 'primeng/primeng';

import { OrgnizationServices } from "app/org.service";
import { OrgnizationModel, ApplicantOrgnizationRelationModel } from "app/models/orgnization.model";


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {
  constructor(private orgnizationServices: OrgnizationServices) {
   }
  
  orgs: OrgnizationModel[];
  curentOrg : OrgnizationModel;
  showDialogProp : boolean = false;  
  ngOnInit() {
    

    this.orgnizationServices.getOrgs().subscribe(data => {
      this.orgs = data;
      console.log(this.orgs);
      console.log(this.orgs[0].Name);
    });
  }

  selectOrg(org: OrgnizationModel) {
    // this.msgs = [];
    // this.msgs.push({ severity: 'info', summary: 'Org Select', detail: 'Org: ' + org.CRNumber });
    this.curentOrg = org;
    this.showDialogProp = true;    
  }

  deleteOrg(index:number){
    let test = this.cloneOrgnization(this.orgs);
    test.splice(index, 1);
    this.orgs = test;
    console.clear();
    console.info(this.orgs);
  }

  onCloseDialog(event : Event){
    this.curentOrg = null;
  }

  cloneOrgnization(oldOrgs: OrgnizationModel[]) {
    let newArray: OrgnizationModel[] = new Array<OrgnizationModel>();
    oldOrgs.forEach((item) => {
      newArray.push(Object.assign({}, item));
    });
    return newArray;
  }
}
