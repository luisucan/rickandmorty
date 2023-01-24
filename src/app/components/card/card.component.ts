import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Character from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  character!: Character;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(id:number){
    this.router.navigateByUrl(`details/${id}`)
  }
}
