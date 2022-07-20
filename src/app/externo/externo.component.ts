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

  constructor(
    private _extService: ExternoService
  ) {
    this.userId = 2
  }

  ngOnInit(): void {
    this.setUser()
    this.setAllUsers()
  }
  
  setAllUsers(): void {
    this._extService.getUsers().subscribe(({ data }) => data.map((obj: any) => this.users.push(obj)))
  }

  setUser(): void {
    this._extService.getUser(this.userId).subscribe(({ data }) =>  this.user = data)
  }

}
