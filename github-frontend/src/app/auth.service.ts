
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//De tanto hacer pruebas, aqui si en caso ya no te deja mas solicitudes, puedes generar tu clave token en github
export class AuthService {

  //private githubToken: string = '******'; 

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
   //   'Authorization': `Bearer ${this.githubToken}`
    });
  }

  searchGithubRepo(username: string) {
    const headers = this.getHeaders();
    return this.http.get(`http://localhost:8080/api/github-repo?username=${username}`, { headers });
  }
}
