
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@
Injectable({
  providedIn: 'root'
})
export class ApiService {


  private api = 'https://enniosaenz.com/phpmailer/php-mailer.php';
  // private url = 'https://enniosaenz.com/php/contact-form.php';//https://ofiplazasandionisio.com/

  constructor(private http: HttpClient) { 
    
  }

  SendEmail(data:any) {
    console.log(data);
    data["to"] = "info@grupoinvertur.com";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'//'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(this.api, data, httpOptions);
    }
}
