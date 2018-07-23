import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Headers} from '@angular/http';

import {Employeedetails} from './employeedetails';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequesterService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}
  employeeUrl = 'http://172.28.102.69:7001/com-springmvc/user';
  getEmployees(): Observable<Employeedetails[]> {
    return this.http.get<Employeedetails[]>(this.employeeUrl);
  }


  create(employeedetails: Employeedetails): Promise<Employeedetails> {
    return this.http
      .post(this.employeeUrl, JSON.stringify(employeedetails), {headers: this.headers})
      .toPromise()
      .then(res => employeedetails)
      .catch(this.handleError);
  }

  update(employeedetails: Employeedetails): Promise<Employeedetails> {
    return this.http
      .put(this.employeeUrl, JSON.stringify(employeedetails), {headers: this.headers})
      .toPromise()
      .then(() => employeedetails)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
