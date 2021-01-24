import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sended : boolean = false;

  contactForm : FormGroup = new FormGroup({
    name     : new FormControl('', [Validators.required]),
    email    : new FormControl('', [Validators.required, Validators.email]),
    subject  : new FormControl('', [Validators.required]),
    message  : new FormControl('', [Validators.required])
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  submit() : void {
    console.log(this.contactForm.value)
    this.sended = true;
  }

}
