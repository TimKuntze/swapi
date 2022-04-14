import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwapiDataService {
  constructor(public http: HttpClient) {}

  getAllCharacters() {
    return this.http.get('https://swapi.dev/api/people/');
  }

  getCharacterById(id: number) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
}
