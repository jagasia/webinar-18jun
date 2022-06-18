import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // template:`<h3>This is signup component</h3>
  // <h4>This is another line</h4>
  // <br/>
  // Another line
  // `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName:string='Raja';


  constructor() { }

  ngOnInit(): void {
  }

}
