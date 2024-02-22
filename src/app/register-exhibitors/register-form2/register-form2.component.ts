import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { RegisterForm1Component } from '../register-form1/register-form1.component';
import { RegisterForm3Component } from '../register-form3/register-form3.component';
import * as Aos from 'aos';
@Component({
  selector: 'app-register-form2',
  templateUrl: './register-form2.component.html',
  styleUrls: ['./register-form2.component.scss']
})
export class RegisterForm2Component implements OnInit {

  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<RegisterForm2Component>
    ){
  }
  ngOnInit(): void {
    Aos.init( )
  }
  lastNextForm(){
    const dialogRef = this.dialog.open(RegisterForm3Component, {
      width:'40%',
      height:'70%',
      disableClose : true,
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result == true){

            }
        });
      }
      closeDialog() {
        this.Matdialog.close(true);
      }

      lastNext(){
       this.lastNextForm()
      this.closeDialog()
      }

      backForm(){
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
          allBack(){
            this.backForm()
            this.closeDialog()
          }

}
