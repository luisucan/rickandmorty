import { Component, OnInit } from '@angular/core';
import Character from 'src/app/interfaces/character.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {

  page: number = 1;

  data:Character[] = [];
  constructor(private _service: RickandmortyService ) { }

  ngOnInit(): void {
    this.findCharacters(this.page);
  }

  findCharacters(page:number){
    this.data = [];
    this._service.findCharacter(page)
    .subscribe({
      next: (data: any) => {
        console.log(data)
        this.data = data.results;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onChangePage(page:number){
    this.page = page;
    this.findCharacters(page);
  }
}
