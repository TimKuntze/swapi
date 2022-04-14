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

  async getCharacters(selected:any) {
    let chars = [];
    for(let i = 0; i < selected.characters.length; i++){
      const char = await this.http.get(selected.characters[i]).toPromise();
      chars.push(char);
    }
    return chars;
  }

  getCharacterById(id: number) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
}
