import { Component,OnInit } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { RegisterForm2Component } from '../register-form2/register-form2.component';
import * as Aos from 'aos';

@Component({
  selector: 'app-register-form1',
  templateUrl: './register-form1.component.html',
  styleUrls: ['./register-form1.component.scss']
})
export class RegisterForm1Component   implements OnInit {

  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<RegisterForm1Component>
    ){
  }
  ngOnInit(): void {
    Aos.init( )
  }
  nextForm(){
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

      allNext(){
        this.nextForm()
      this.closeDialog()
      }
      files: File[] = [];

      onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
      }
      
      onRemove(event:any) {
     
        this.files.splice(this.files.indexOf(event), 1);
      }
}
