import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  imports: [MatTableModule, RouterLink],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent implements OnInit {
  title = 'assignment4';
  displayedColumns: string[] = ['firstName', 'lastName', 'details'];
  owners = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/owners').subscribe((response) => {
      this.owners = response._embedded.owners.map((o: any) => ({ ...o, details: o.id}));
    });
  }
}
