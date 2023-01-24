import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Character from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(public http:HttpClient) { }

  findCharacter(page: number):Observable<Character[]>{
    return this.http.get<Character[]>(`https://rickandmortyapi.com/api/character?page=${page}`)
  }

  findOneCharacter(id:number):Observable<Character>{
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
