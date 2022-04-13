import { Component, OnInit } from '@angular/core';
import {SwapiDataService} from "../services/sw-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersData:any = [];
  public characterImages:string[] = ['assets/img/luke-skywalker.jpg', 'assets/img/c3po.jpg', 'assets/img/r2d2.jpg', 'assets/img/dart vader.jpg', 'assets/img/leia-organa.jpg', 'assets/img/owen-lars.jpg', 'assets/img/beru-whitesun-lars.jpg', 'assets/img/r5-d4-droid.jpg', 'assets/img/biggs-bust-darklighter.jpg', 'assets/img/obi-wan-kenobi-ben.jpg'];

  constructor( public data:SwapiDataService ) { }

  ngOnInit(): void {
    this.data.getAllCharacters().subscribe((response:any)=> {
      this.charactersData = response['results'];
      console.log(this.charactersData)
    })

  }

}
