import { NgModule } from "@angular/core";
import { ConfigService } from "../services/initialize.service";

export interface Subject {
  request(): void;
  secondRequest(): void;
}

export class RealSubject implements Subject {
  public request(): boolean {
      return true;
  }
  public secondRequest(): boolean{
      return true;
  }
}

export class proxied{
  constructor(public id: string){
    return {"id": this.id};
  }
}

@NgModule({
  providers:[ConfigService]
})
export class Proxy implements Subject {
  private realSubject: RealSubject;
  private status!: boolean;
  private data: proxied;
  private response!: any;
  
  constructor(realSubject: RealSubject, private prox: proxied, private httpService: ConfigService) {
      this.realSubject = realSubject;
      this.data = prox;
  }
  
  public request = async () => {
      await this.checkAccess();
      console.log(await this.response)
      var iser: boolean = await this.response.is;
      console.log("i'm iser: "+iser);
      if (iser) {
        this.status = true;
        console.log("i must call logaccess");
        this.logAccess();
        return this.realSubject.request();
      } else { 
        return false;
      }
  }
  
  public secondRequest(){
    if (this.status) {
        this.realSubject.request();
    }
  }
 
  private checkAccess = async () => {
      
    console.log("hi,i'm checkAcces, my data: "+JSON.stringify(this.data));

    this.response = await this.httpService.postAccess(this.data);//.then((resp:any)=>{
      //console.log("my answer: "+JSON.stringify(resp));
      //return resp.is;
    //});
      
  }
  
  private logAccess(){
  }

  /*private afterFAccess(resp:any){
    console.log("my answer: "+JSON.stringify(resp));
    return resp.is;
  }*/
  
 }
  
 export function isBoardFirst(subject: Proxy){
  console.log(subject.request());
  return subject.request();
 }
  
 export function isBoard(subject: Proxy){
  return subject.secondRequest();
 }

/*
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ]
})
export class InitModule {

}
*/

/*
///////////////////////////////////////
import { ConfigService } from "./http";
 
export interface Subject {
 request(): void;
 secondRequest(): void;
}
 
export class RealSubject implements Subject {
 public request(): boolean {
     return true;
 }
 public secondRequest(): boolean{
     return true;
 }
}
 
export interface proxy{
 id: string;
}
 
export class Proxy implements Subject {
 private realSubject: RealSubject;
 //private http!: HttpClient;
 private url: string = '';
 private status!: boolean;
 private data: proxy;
 private response!: any;
 
 constructor(realSubject: RealSubject, prox: any, private httpService: ConfigService) {
     this.realSubject = realSubject;
     this.data = prox;
 }
 
 public request(): boolean {
     var iser: boolean = this.checkAccess();
     console.log("i'm iser: "+iser);
     if (iser) {
         console.log("i must call logaccess");
         this.logAccess();
         return this.realSubject.request();
     } else { return false }
 }
 
 public secondRequest(): void{
   if (this.status) {
       this.realSubject.request();
   }
 }

 private checkAccess(): boolean {
     console.log("hi,i'm checkAcces, my data: "+this.data.id);
     var toid = this.data;
     //console.log(this.http.post(tourl,toid));
     try {
       console.log(toid);
       this.response = this.httpService.postAccess(toid);  //.postAccess(toid);
       console.log("my answer: "+this.response);
       //this.response = this.http.get<isInTable>(this.url+this.data.id);
       this.status = this.response.is;
      
       //response = JSON.stringify(response.getContentText());
       //response.slice(response.lastIndexOf("is")).substr(2, 20).includes("true");
       return this.status;
     } catch(er){
       console.log(er);
       return false;
     }
 }
 
 private logAccess(): void{
     console.log(this.data.id);
     console.log(this.response);
     console.log(this.status);
 }
 
}
 
export function isBoardFirst(subject: Proxy) : boolean{
 console.log(subject.request());
 return subject.request();
}
 
export function isBoard(subject: Proxy) : any{
 return subject.secondRequest();
}

*/