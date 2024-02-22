import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterForm1Component } from 'src/app/register-exhibitors/register-form1/register-form1.component';
import * as Aos from 'aos';

@Component({
  selector: 'app-exhibitors-main',
  templateUrl: './exhibitors-main.component.html',
  styleUrls: ['./exhibitors-main.component.scss']
})
export class ExhibitorsMainComponent implements OnInit {

  constructor(public dialog: MatDialog,){

  }
  ngOnInit(): void {

    Aos.init( )


  }
  openForm(){

    const dialogRef = this.dialog.open(RegisterForm1Component, {
      width:'40%',
      height:'70%',
      disableClose : true,
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result == true){

            }
        });
      }
}
