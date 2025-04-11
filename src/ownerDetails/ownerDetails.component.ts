import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  imports: [RouterLink, MatTableModule],
  templateUrl: './ownerDetails.component.html',
  styleUrl: './ownerDetails.component.css'
})
export class OwnerDetailsComponent implements OnInit {
  title = 'assignment4';
  owner : any;
  pets = [];
  displayedColumns: string[] = ['name', 'petKind', 'age', 'details'];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ownerId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:8080/api/owners/' + ownerId).subscribe((response) => {
      this.owner = response;
    });

    this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/pets').subscribe((response) => {
      this.pets = response._embedded.pets.map((p: any) => ({ ...p, details: p.id}));
    });
  }
}
