import { Component, OnInit } from '@angular/core';
import { ExternoService } from '../services/externo.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [
    ExternoService
  ]
})
export class ExternoComponent implements OnInit {

  public users: any[] = []
  public userId: number
  public user: any
  public fecha: any
  public response: any = ''
  public new_user: any

  constructor(
    private _es: ExternoService
  ) {
    this.userId = 2
    this.new_user = {
      'name': '',
      'job': ''
    }
  }

  ngOnInit(): void {
    this.fecha = new Date(2022, 7, 22)
    this.setUser()
    this.setAllUsers()
  }
  
  setAllUsers(): void {
    this._es.getUsers().subscribe(({ data }) => data.map((obj: any) => this.users.push(obj)))
  }

  setUser(): void {
    this._es.getUser(this.userId).subscribe(({ data }) =>  this.user = data)
  }

  onSubmit(form: any){
    this._es.addUser(this.new_user).subscribe({
      next: res => {
        console.log(res)
        this.response = res
        form.reset()
      },
      error: err => console.log(err)
    })
  }

}
