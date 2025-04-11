import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  imports: [MatTableModule, RouterLink],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {
  title = 'assignment4';
  displayedColumns: string[] = ['name', 'petKind', 'age', 'details'];
  pets = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/pets').subscribe((response) => {
      this.pets = response._embedded.pets.map((p: any) => ({ ...p, details: p.id}));
    });
  }
}
