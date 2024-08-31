import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsIdService {

  public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient: HttpClient) { }

  studentid(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

  getstudentid(id:string): Observable<any> {
    return this._httpClient.get(this.baseUrl+"/"+id);

  }
  filteredStudentid(term: string): Observable<any> {
    return this._httpClient.get(this.baseUrl+"?filter=" + term);
  }

  sortedStudentid(column: string, order: string): Observable<any> {
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  deleteStudentid(id: string): Observable<any> {
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }

  createStudentid(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"?filter=",data)
  }

  getPaginatedStudents(page: number, limit:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+`?limit=${limit}&page=${page}`)
  }

  updateStudentid(data:any, id:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }

}
