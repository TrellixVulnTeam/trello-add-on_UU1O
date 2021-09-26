import { HttpClient } from '@angular/common/http';

interface Subject {
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

export class Proxy implements Subject {
  private realSubject: RealSubject;
  private http!: HttpClient;
  private url: string = GIT_GAS_URL;
  private status!: boolean;
  private data: object;

  constructor(realSubject: RealSubject, id: string) {
      this.realSubject = realSubject;
      this.data = {id};
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
      this.http.get<isInTable>(this.url, this.data).subscribe(response => {
        this.status = response.is;
        console.log(this.status);
        //response = JSON.stringify(response.getContentText());
        //response.slice(response.lastIndexOf("is")).substr(2, 20).includes("true");
      })
      return this.status;
  }
}

export function isBoardFirst(subject: Subject) : any{
  return subject.request();
}

export function isBoard(subject: Subject) : any{
  return subject.secondRequest();
}
