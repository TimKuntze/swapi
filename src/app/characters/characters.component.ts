import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../services/sw-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  /**
   * Array where server data from the API service is pushed into.
   */
  public charactersData: any = [];
  /**
   * Boolean to determine if details component is shown.
   */
  isShown: boolean = false;

  constructor(public data: SwapiDataService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Get characters data from sw-api service and store it in the charactersData array.
   */
  getCharacters() {
    this.data.getAllCharacters().subscribe((response: any) => {
      this.charactersData = response['results'];
    })
  }

  /**
   * Method to shuffle the array charactersData, so we get 3 random characters. The used method is the Fisher-Yates Shuffle.
   */
  shuffleCharacters() {
    let index = this.charactersData.length, randomIndex, temp;
    while (--index > 0) {
      randomIndex = Math.floor(Math.random() * (index + 1));
      temp = this.charactersData[randomIndex];
      this.charactersData[randomIndex] = this.charactersData[index];
      this.charactersData[index] = temp;
    }
  }

  /**
   * Toggle to let component details be shown.
   */
  toggleShow() {
    this.isShown = true;
  }

  /**
   * Toggle to let component details not be shown.
   */
  toggleClose() {
    this.isShown = false;
  }

}

