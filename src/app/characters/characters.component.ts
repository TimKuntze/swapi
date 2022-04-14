import {Component, OnInit} from '@angular/core';
import {SwapiDataService} from "../services/sw-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersData = [];
  public characterImages = ['assets/img/luke.jpg', 'assets/img/c3po.jpg', 'assets/img/r2d2.jpg', 'assets/img/vader.jpg', 'assets/img/leia.jpg', 'assets/img/owen.jpeg', 'assets/img/beru.jpg', 'assets/img/r5d4.jpg', 'assets/img/biggs.jpeg', 'assets/img/obi.jpg'];

  constructor(public data: SwapiDataService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.data.getAllCharacters().subscribe((response: any) => {
      this.charactersData = response['results'];
    })
  }

// This is a method to shuffle the array charactersData, so we get 3 random characters. The used method is the Fisher-Yates Shuffle
  shuffle() {
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

  reloadCurrentPage() {
    window.location.reload();
  }

}
