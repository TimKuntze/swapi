import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwapiDataService {
  constructor(public http: HttpClient) {}

  /**
   * Get character data from the Star Wars API
   */
  getAllCharacters() {
    return this.http.get('https://www.swapi.tech/api/people');
  }

  /**
   * Get IDs of the Star Wars characters.
   */
  getCharacterById(id: number) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
}
