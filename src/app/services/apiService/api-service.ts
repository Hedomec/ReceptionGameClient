import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public url: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${this.url}${endpoint}`);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.url}${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.put<T>(`${this.url}${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}${endpoint}`);
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.patch<T>(`${this.url}${endpoint}`, body);
  }
}

export interface ResponseApi {
  success: boolean;
  data: any;
  error: boolean;
  message: string;
}
