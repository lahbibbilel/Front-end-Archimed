import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  fetchData(prompt: string) {
    return this.http.post<{ response: string }>(this.apiUrl, { content: prompt });
  }
}
