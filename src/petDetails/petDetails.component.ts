import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [RouterLink],
  templateUrl: './petDetails.component.html',
  styleUrl: './petDetails.component.css'
})
export class PetDetailsComponent implements OnInit {
  title = 'assignment4';
  pet : any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const petId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:8080/api/pets/' + petId).subscribe((response) => {
      this.pet = response;
    });
  }
}
