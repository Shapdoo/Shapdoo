import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: UsuarioModel = new UsuarioModel('','','','')
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('submit enviado', this.usuario)
    form.reset()
  }

}
