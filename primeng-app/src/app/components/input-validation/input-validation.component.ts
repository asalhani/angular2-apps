import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html'
})
export class InputValidationComponent implements OnInit {

  constructor() { }
  model:any = {
    contactemail: '',
    contactmobile:''
  };


  ngOnInit() {
  }

  submit(form){
    console.log(form);
    // debugger;
  }

}
