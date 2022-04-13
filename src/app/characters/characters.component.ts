import { Component, OnInit } from '@angular/core';
import {SwapiDataService} from "../services/sw-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersData:any = [];
  public characterImages:string[] = ['assets/img/luke.jpg', 'assets/img/c3po.jpg', 'assets/img/r2d2.jpg', 'assets/img/vader.jpg', 'assets/img/leia.jpg', 'assets/img/owen.jpeg', 'assets/img/beru.jpg', 'assets/img/r5d4.jpg', 'assets/img/biggs.jpeg', 'assets/img/obi.jpg'];

  constructor( public data:SwapiDataService ) { }

  ngOnInit(): void {
    this.data.getAllCharacters().subscribe((response:any)=> {
      this.charactersData = response['results'];
      console.log(this.charactersData)
    })

  }

}
