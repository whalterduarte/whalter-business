import { Component } from '@angular/core';
import { FormControl, } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = new FormControl('');
}
