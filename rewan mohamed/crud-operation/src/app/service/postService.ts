import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://json-placeholder.mock.beeceptor.com/posts';

@Injectable({
  providedIn: 'root',
})

export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<{id:number , title:String , body:String}[]> {
    return this.http.get<{id:number , title:String , body:String}[]>(baseUrl);
  }
   delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
