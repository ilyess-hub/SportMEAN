import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder,
  private userService :UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({

      nom: [ '' , [ Validators.minLength(3), Validators.required]],
      prenom: [ '' , Validators.maxLength(8) ],
      email: [ '' ,   Validators.required ],
      pwd: [ '' , Validators.minLength(8) ],
      confirmpwd: ['']

    },
      {

        validator: MustMatch ('pwd', 'confirmpwd')
    }
    );

  }

  signup() {
    alert('signup clicked');
    
    this.userService.signup(this.signupForm.value).subscribe();
    
  }

}
