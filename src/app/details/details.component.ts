import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiDataService } from '../services/sw-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public data: SwapiDataService) {
  }

  /**
   * Array where selected character data is pushed into.
   */
  selectedCharacter: any = [];

  ngOnInit() {

    /**
     * Method to the id of the clicked character
     * @param  {Number} characterID of the clicked character.
     */
    this.route.paramMap.subscribe(param => {
      let characterId = param.get('id');

      if (characterId) {
        this.data.getCharacterById(parseInt(characterId)).subscribe(async (response: any) => {
          this.selectedCharacter = response;
        });
      }
    });
  }
}
