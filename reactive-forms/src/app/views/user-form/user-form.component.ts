import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  get fName() {return this.userForm.get('fName');}
  get lName() {return this.userForm.get('lName');}
  get mName() {return this.userForm.get('mName');}


  ngOnInit() {
    //this.userForm = new FormGroup({
      //fName: new FormControl('', Validators.required),
      //lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      //mName: new FormControl('', Validators.required),
      //hasMiddleName: new FormControl(false)
    //});

    this.userForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.minLength(5)]],
      lName: ['', [Validators.required, Validators.minLength(3)]],
      mName: ['', Validators.required],
      hasMiddleName: false
    });
    
  }

  myUser = {fName: 'Johnny', lName: 'Uribe', mName: 'secret', hasMiddleName: true};

  setValue() {
    this.userForm.setValue({
      fName: 'Cassandra',
      lName: 'Pamplona',
      mName: 'Casey',
      hasMiddleName: true
    });
  }


  setValue2(){
    this.userForm.setValue(this.myUser);
  }

  patchValue(){
    this.userForm.patchValue({
      fName: 'Casey'
    });
  }

}
