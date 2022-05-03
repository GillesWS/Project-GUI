import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lijsten } from './lijsten'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  lijsten : lijsten[] = [];

  getLijsten(): Observable<lijsten[]> {
    const url : string = "http://localhost:3000/lijsten";
    return this.http.get<lijsten[]>(url);
  }

  addLijst(lijsten: lijsten): Observable<lijsten>{
    const url = 'http://localhost:3000/lijsten';
    return this.http.post<lijsten>(url,lijsten);
  }

  updateLijst(lijsten: lijsten): Observable<lijsten>{
    const url = 'http://localhost:3000/lijsten' + lijsten.id;
    return this.http.put<lijsten>(url,lijsten);
  }

  deleteLijst(id: number): Observable<any>{
    const url = 'http://localhost:3000/lijsten/' + id;
    return this.http.delete<lijsten>(url);
  }

}

