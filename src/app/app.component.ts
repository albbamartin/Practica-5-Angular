import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miAPP';

  user: FormGroup;
  constructor(){
    this.user = new FormGroup({

      inNombre: new FormControl('', Validators.required),
      inApellidos: new FormControl('', Validators.required),
      inEdad: new FormControl('', Validators.required),
      inDNI: new FormControl('', Validators.required),
      inCumpleanos: new FormControl('', Validators.required),
      inColor: new FormControl('', Validators.required),
      inSexo: new FormControl('', Validators.required)

    });
  }

  onSubmit() {
    console.log(this.user.value);
    }

  ngOnInit(): void {}
}
