import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as Aos from 'aos';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.scss']
})
export class RegisterMainComponent implements OnInit {

  constructor(  public Matdialog: MatDialogRef<RegisterMainComponent>) { }

  ngOnInit(): void {
    Aos.init( )
  }
  closeDialog() {
    this.Matdialog.close(true);
  }
}
