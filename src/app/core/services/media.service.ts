import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(private http: HttpClient, private _router: Router) { }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private getBase(): string {
    return environment.publicPath;
  }

  private xGet(): Observable<any> {
    const url = 'assets/fotos.json';
    return this.http.get<any>(url, { headers: this.createHeaders() }).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public getPersonData(): Observable<any> {
    return this.xGet();
  }
}
