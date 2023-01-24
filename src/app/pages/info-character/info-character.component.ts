import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Character from 'src/app/interfaces/character.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {

  character!: Character;
  id!: number;

  constructor(
    public service: RickandmortyService,
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.active.params.subscribe(s=>{
      this.id = s['id'];
      this.find();
    })
  }

  find(){
    this.service.findOneCharacter(this.id)
    .subscribe({
      next: (data: Character)=>{
        console.log(data);
        this.character = data;
      }
    })
  }

  gotohome(){
    this.router.navigateByUrl('/')
  }
}
