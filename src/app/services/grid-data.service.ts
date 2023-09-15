import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  url = "http://localhost:5000/grid_lists"

  constructor(private http: HttpClient) { }

  // Define a method to fetch data from the JSON file
  getData(): Observable<any> {
    return this.http.get(this.url); // Path to your JSON file
  }
}
