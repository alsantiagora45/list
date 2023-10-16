import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datos: any;
 
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
  this.fetchData();
  }
 
  fetchData() {
  const headers = new HttpHeaders({
  'Authorization': 'Token 6f80e8207c1e9c4a4167fc135d8a02bf1597c749',
  'Content-Type': 'application/json',
  });
 
  const requestOptions = {
  headers: headers,
  };
 
  this.http.get("https://userspre.faisan.app/saam/celulas?org=774", requestOptions)
  .subscribe(
  (result) => {
  this.datos = result;
  },
  (error) => {
  console.error('Error al obtener datos de la API', error);
  }
  );
  }
 }
