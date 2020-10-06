import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UserModel = null;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private session: SessionService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    console.log('HomePage');
    this.user = this.session.getSessionUser();
    this.validateUser();
  }

  // tslint:disable-next-line: typedef
  validateUser() {
    if (this.user === null) {
      this.showFailMessage('User Error', 'Loading User Information Failed');
      this.router.navigate(['']);
    }
  }

  // tslint:disable-next-line: typedef
  logOut() {
    this.router.navigate(['']);
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
