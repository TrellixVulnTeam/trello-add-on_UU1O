import { HttpClient } from '@angular/common/http';

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

interface isInTable{
    is: boolean;
}

export interface proxy{
  id: string;
}

export class Proxy implements Subject {
  private realSubject: RealSubject;
  private prox!: proxy;
  private http!: HttpClient;
  private url: string;
  private status!: boolean;
  private data: proxy;
  private response!: any;

  constructor(realSubject: RealSubject, prox: any) {
      this.realSubject = realSubject;
      this.data = prox;
      this.url = "https://script.google.com/macros/s/AKfycbxl-UnMq-kCYRbocHXMHqjluhweXs5emC10p24Qcxyx7HF7DEQ/exec";
  }

  public request(): void {
      if (this.checkAccess()) {
          this.realSubject.request();
      }
  }

  public secondRequest(): void{
    if (this.status) {
        this.realSubject.request();
    }
  }

  private checkAccess(): boolean {
      this.response = this.http.post<isInTable>(this.url, this.data);
      //this.response = this.http.get<isInTable>(this.url+this.data.id);
      this.status = this.response.is;
      console.log(this.data.id);
      console.log(this.response);
      console.log(this.status);
      //response = JSON.stringify(response.getContentText());
      //response.slice(response.lastIndexOf("is")).substr(2, 20).includes("true");
      return this.status;
  }

}

export function isBoardFirst(subject: Subject) : any{
  return subject.request();
}

export function isBoard(subject: Subject) : any{
  return subject.secondRequest();
}
