import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

interface UserResponse {
  Type: any;
}

@Component({
  selector: 'app-form',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent {

  url;
  data: any= {};
  formGroupAdr: FormGroup;

  constructor(private http: HttpClient) {
    this.formGroupAdr = new FormGroup({
      ville: new FormControl(),
      distance: new FormControl(),
      typeSaisie: new FormControl()
    });
  }

  creationAdresse() {
    if ( this.formGroupAdr.value.typeSaisie !== 'position' ) {
      if ( this.formGroupAdr.value.ville !== null && this.formGroupAdr.value.ville !== '' ) {
         this.url = 'https://data.nantes.fr/api/publication/23440003400026_J327/tourinsoft_restaurant_table/content';
      }
    } else {
      this.url = 'https://data.nantes.fr/api/publication/23440003400026_J327/tourinsoft_restaurant_table';
    }
    this.getData();
  }

  getData() {
    this.http.get<UserResponse>(this.url).subscribe( data => {
       this.data = data.Type;
    });
  }

  getPosition() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position){
         console.log(position.coords.latitude + ' ' + position.coords.longitude);
       });
     }
   }

}
