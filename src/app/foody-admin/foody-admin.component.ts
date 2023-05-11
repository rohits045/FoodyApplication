import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foody-admin',
  templateUrl: './foody-admin.component.html',
  styleUrls: ['./foody-admin.component.css']
})
export class FoodyAdminComponent {

  constructor(private router :Router){}
admin_id=localStorage.getItem("_a_email");

showDetails(){
    this.router.navigate(['/app-details'])
}
}
