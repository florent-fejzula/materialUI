import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  reactiveForm!: FormGroup;
  formStatus!: string;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      country: new FormControl('poland'),
      gender: new FormControl('male'),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
    });

    // this.reactiveForm.get('personalDetails.firstname')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.reactiveForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    this.reactiveForm.statusChanges.subscribe(value => {
      console.log(value);
      this.formStatus = value;
    });

    // setTimeout(() => {
    //   this.reactiveForm.setValue({
    //     personalDetails: {
    //       firstname: 's',
    //       lastname: 'b',
    //       email: 'abcexample@hotmail.com'
    //     },
    //     country: 'poland',
    //     gender: 'male',
    //     skills: ['smth']
    //   });  
    // }, 2000);

    setTimeout(() => {
      this.reactiveForm.patchValue({
        personalDetails: {
          email: 'abcexample@hotmail.com'
        }
      });  
    }, 2000);

  }

  get skillFormArray () {
    return this.reactiveForm.get('skills') as FormArray
  }

  get personalDetailsControl() {
    return this.reactiveForm.get('personalDetails.firstname') as FormControl
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  noSpaceAllowed(control: FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed: true}
    }
    return null;
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
      country: 'poland',
      gender: 'male'
    });
  }

}
