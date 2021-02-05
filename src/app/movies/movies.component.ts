import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  movies;
  ngOnInit(): void {
    this.apiService.getMovies().subscribe((data) => {
      console.log(data);
      this.movies = data['original_title'];
    });
  }

}
