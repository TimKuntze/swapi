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
    });
  }



}
