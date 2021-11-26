import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface isInTable{
  is: boolean;
}

@Injectable({
  providedIn:  'root'
  })
export class ConfigService {
  
  private url: string;
  private resp: any;
  public answer!: isInTable;
  public is!: boolean;
  httpOptions!: object;
  
  constructor(private http: HttpClient) { 
  
    this.url = "https://script.google.com/macros/s/AKfycbxl-UnMq-kCYRbocHXMHqjluhweXs5emC10p24Qcxyx7HF7DEQ/exec";
  
  }
  
  public postAccess = async (object: object ) => {

    this.resp = this.http.post<any>(this.url, JSON.stringify(object));
    return this.resp.toPromise().then((data:isInTable) => { //toPromise not subscribe
      this.answer = {"is": data.is};
      console.log("answer");
      console.log(this.answer);
      return this.answer;
    });
    
  }

}
/*

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
};

 return this.http.post('http://localhost:3000/api/Users/login', data, httpOptions)
   .do( function(resp) {
        self.setSession(resp);
 });

*/

//export function getConfigAccess(id: string): any{
//  return new ConfigService(http).postAccess(id);
//}

/*

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
 
@Injectable()
export class ConfigService {
    private authtoken: string = '';
    constructor(private http: HttpClient, private url: string) {
        this.url = url;
    }
    public postAccess(object: object): any {
    //console.log(this.http.post(this.url, JSON.stringify(object)));
        const myHeaders = new HttpHeaders().set('Authorization', this.authtoken);
        return this.http.post(this.url, JSON.stringify(object), {headers:myHeaders});
    }
}
*/
