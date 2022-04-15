import {Component, OnInit} from '@angular/core';
import {SwapiDataService} from '../services/sw-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersData = [];

  constructor(public data: SwapiDataService) {
  }

  isShown: boolean = false ; // hidden by default

  ngOnInit(): void {
    this.getCharacters();

  }

  getCharacters() {
    this.data.getAllCharacters().subscribe((response: any) => {
      this.charactersData = response['results'];
      console.log(this.charactersData);
    })
  }

// This is a method to shuffle the array charactersData, so we get 3 random characters. The used method is the Fisher-Yates Shuffle
  shuffleCharacters() {
    let index = this.charactersData.length, randomIndex, temp;

    // While there remain elements to shuffle.
    while (--index > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * (index + 1));
      temp = this.charactersData[randomIndex];
      this.charactersData[randomIndex] = this.charactersData[index];
      this.charactersData[index] = temp;
    }
    console.log(this.charactersData);
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

}
