import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string ='https://jsonplaceholder.typicode.com/';
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  createData(data: any){
    return this.http.post(this.api+'posts',JSON.stringify(data),this.options);
  }
  readData(){
    return this.http.get(this.api+'todos/1');
  }
  updateData(data: any){
    return this.http.put(this.api + 'posts/1', JSON.stringify(data), this.options);
  }
  deleteRead(){
    return this.http.delete(this.api + 'posts/1');
  }
}
