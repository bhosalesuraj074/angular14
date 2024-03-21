import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../Services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs :any;
  constructor(private _giphyService : GiphyService ) { }

  ngOnInit(): void {
     console.log('hello ji');
     
       this.getGiphys('mumbai indians');
  }

  getGiphys(serach:string){
  
     this._giphyService.getGifs(serach).subscribe((res:any) => {
      this.gifs = res.data;
     });

     
  }

}
