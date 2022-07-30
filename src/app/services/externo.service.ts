import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExternoService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = "https://reqres.in/api/users"
    }

    getUsers(): Observable<any> {
        return this._http.get(this.url)
    }

    getUser(userId: number): Observable<any> {
        return this._http.get(`${this.url}/${userId}`)
    }

    addUser(user: any): Observable<any> {
        const json = JSON.stringify(user)
        const headers = new HttpHeaders().set('Content-type', 'application/json')
        return this._http.post(this.url, json, { headers: headers })
    }

}