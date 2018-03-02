import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, PatternValidator } from '@angular/forms';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  formGroupAuthentifier: FormGroup;
  formGroupCreer: FormGroup;
  authentifie: boolean;
  pseudoIsCorect: boolean;
  mdpIsCorect: boolean;
  creerEmailIsCorect: boolean;
  creerPseudoIsCorect: boolean;
  creerMdpIsCorect: boolean;
  confirmMdpIsCorect: boolean;
  component = this;

  constructor(private cdRef: ChangeDetectorRef) {
    this.formGroupAuthentifier = new FormGroup({
      pseudo: new FormControl(),
      mdp: new FormControl()
    });
    this.formGroupCreer = new FormGroup({
      email: new FormControl(),
      pseudo: new FormControl(),
      mdp: new FormControl(),
      confirmMdp: new FormControl()
    });
    this.authentifie = false;
    this.pseudoIsCorect = true;
    this.mdpIsCorect = true;
    this.creerEmailIsCorect = true;
    this.creerPseudoIsCorect = true;
    this.creerMdpIsCorect = true;
    this.confirmMdpIsCorect = true;
  }

  authentification() {
    this.authentifie = true;
  }

  creation() {
    this.authentifie = true;
  }

  pseudoStyle(name) {
    let contenu: string;
    if ( name === 'pseudo' ) {
      contenu = this.formGroupAuthentifier.value.pseudo;
      if ( contenu === '' || ! /^\S*$/.test(contenu) ) {
        this.pseudoIsCorect = false;
        return '#ff9999';
      } else {
        this.pseudoIsCorect = true;
        return '';
      }
    } else if ( name === 'creerPseudo' ) {
      contenu = this.formGroupCreer.value.pseudo;
      if ( contenu === '' || ! /^\S*$/.test(contenu) ) {
        this.mdpIsCorect = false;
        return '#ff9999';
      } else {
        this.mdpIsCorect = true;
        return '';
      }
    } else if ( name === 'mdp' ) {
      contenu = this.formGroupAuthentifier.value.mdp;
      if ( contenu === '' || ! /^\S*$/.test(contenu) ) {
        this.creerPseudoIsCorect = false;
        return '#ff9999';
      } else {
        this.creerPseudoIsCorect = true;
        return '';
      }
    } else if ( name === 'creerMdp' ) {
      contenu = this.formGroupCreer.value.mdp;
      if ( contenu === '' || ! /^\S*$/.test(contenu) ) {
        this.creerMdpIsCorect = false;
        return '#ff9999';
      } else {
        this.creerMdpIsCorect = true;
        return '';
      }
    }
  }

  emailStyle() {
    let contenu: string;
    contenu = this.formGroupCreer.value.email;
    if ( contenu !== null && (contenu === '' || ! /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contenu)) ) {
      return '#ff9999';
    } else {
      return '';
    }
  }

  confirmMdpStyle() {
    let contenu: string;
    contenu = this.formGroupCreer.value.confirmMdp;
    if ( contenu !== null && contenu !== this.formGroupCreer.value.mdp ) {
      return '#ff9999';
    } else {
      return '';
    }
  }

  authentificationValide() {
    return this.formGroupAuthentifier.value.pseudo != null && this.formGroupAuthentifier.value.mdp != null && this.pseudoIsCorect && this.mdpIsCorect;
  }

  creationValide() {
    return this.formGroupCreer.value.email != null && this.formGroupCreer.value.pseudo != null && this.formGroupCreer.value.mdp != null && this.formGroupCreer.value.confirmMdp != null && this.creerEmailIsCorect && this.creerPseudoIsCorect && this.creerMdpIsCorect && this.confirmMdpIsCorect;
  }

}
