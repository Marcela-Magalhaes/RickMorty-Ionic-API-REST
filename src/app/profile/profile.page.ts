import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  character: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient ) { }

  ngOnInit() {
    const characterId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('~ characterId', characterId);
    this.httpClient.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .subscribe( res => {
        // console.log(res);
        this.character = res;
        console.log('~ this.character', this.character);
      });
  }
}

