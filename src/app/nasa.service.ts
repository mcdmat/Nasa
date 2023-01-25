import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}
  public getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(
      'https://api.nasa.gov/planetary/apod?api_key=hzOQlel6mNSSakZjqFIv34avY8JTNibKpjKhI89d'
    );
  }
}
