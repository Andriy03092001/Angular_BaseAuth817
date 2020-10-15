import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignUpModel } from '../Models/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) { }

  model = new SignUpModel();
  confirmPassword: string;

  register() {

    this.notifier.notify('error', "Server error");//red
    this.notifier.notify('success', "You registered");//green


    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 4000);
  }

  ngOnInit() {
  }

}
