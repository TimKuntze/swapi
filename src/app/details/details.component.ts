import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiDataService } from '../services/sw-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public data:SwapiDataService) { }


  selectedCharacter:any = [];

  characterImages:any = ['assets/img/luke-skywalker.jpg', 'assets/img/c3po.jpg', 'assets/img/r2d2.jpg', 'assets/img/dart vader.jpg', 'assets/img/leia-organa.jpg', 'assets/img/owen-lars.jpg', 'assets/img/beru-whitesun-lars.jpg', 'assets/img/r5-d4-droid.jpg', 'assets/img/biggs-bust-darklighter.jpg', 'assets/img/obi-wan-kenobi-ben.jpg'];
  characterImage:any = [];

  ngOnInit(){

    this.route.paramMap.subscribe(param =>{
      let characterId = param.get('id');
      console.log(characterId);

      if(characterId){
        this.data.getCharacterById(parseInt(characterId) + 1).subscribe(async(response:any)=>{
          this.selectedCharacter = response;
          console.log(this.selectedCharacter)
        });
      }
      if(characterId){
        this.characterImage = this.characterImages[characterId];
        console.log(this.characterImage);
      }

    });
  }



}
