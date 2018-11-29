import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }
    getLatestMovies(page = 1){
      return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
}
    getMovieDetails(filmeid){
      return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey());
}
    getApiKey(): string{
      return "d4025668ff6b6d9e4e6e94f4d23df051";

}
}
