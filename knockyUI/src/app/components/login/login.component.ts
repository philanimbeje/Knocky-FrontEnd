import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login';
import { RoleModel } from 'src/app/models/role';
import { UserModel } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login/login.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginModel = {
    Username: '',
    Password: '',
  };
  role: RoleModel = null;
  user: UserModel;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private session: SessionService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.log('Submit Login');
    this.loginService.login(this.loginCredentials).subscribe((data: UserModel) => this.user = data);
    this.validateLogin(this.user);
  }

  // tslint:disable-next-line: typedef
  validateLogin(userDetails: UserModel) {
    if (userDetails) {
      this.session.setSessionUser(userDetails);
      this.showSuccessMessage('Login Successful', 'Welcome!');
      this.router.navigate(['/home']);
    } else {
      this.showFailMessage('Login Failed', 'Credentials not recognised. Please try again');
      this.router.navigate(['']);
    }
  }

  // tslint:disable-next-line: typedef
  showSuccessMessage(title: string, message: string) {
    this.toastr.success(message, title);
  }

  // tslint:disable-next-line: typedef
  showFailMessage(title: string, message: string) {
    this.toastr.error(message, title);
  }

}
