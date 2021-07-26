import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  characters: any[];
  constructor( private httpClient: HttpClient ) { }

  ngOnInit(){
   return this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
   .subscribe( res => {
     console.log(res);
     this.characters = res.results;
   });
  }
}
