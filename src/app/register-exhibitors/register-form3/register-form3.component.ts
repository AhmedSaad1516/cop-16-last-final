import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { RegisterForm2Component } from '../register-form2/register-form2.component';
import * as Aos from 'aos';
@Component({
  selector: 'app-register-form3',
  templateUrl: './register-form3.component.html',
  styleUrls: ['./register-form3.component.scss']
})
export class RegisterForm3Component {

  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<RegisterForm3Component>){
  }
  ngOnInit(): void {
    Aos.init( )
  }
  backForm(){
    const dialogRef = this.dialog.open(RegisterForm2Component, {
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
      allBack(){
        this.backForm()
        this.closeDialog()
      }

}
