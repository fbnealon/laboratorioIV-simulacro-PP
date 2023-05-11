import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCountriesService {

  constructor(private http: HttpClient) {}

  traerPaises(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
