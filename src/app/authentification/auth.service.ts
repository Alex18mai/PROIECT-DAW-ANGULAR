import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authURL = `${environment.API_URL}/authentication`;

  constructor(private http: HttpClient, private router: Router, private jwtService: JwtHelperService) { }

  register(userData: any) : Observable<any>{
    return this.http.post<any>(`${this.authURL}/sign-up`, userData)
    .pipe(map(() => {
      this.router.navigate(['/login']);
    }));
  }

  login(userData: any) : Observable<any>{
    return this.http.post<any>(`${this.authURL}/login`, userData)

    .pipe(map((response : any) => {

      if(response?.token){
        console.log(response.token);
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      }

    }));
  }

  isLoggedIn(){
    const token = localStorage.getItem('token') || "";
    return !this.jwtService.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
