import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts: Post[] = [];
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this._demoService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

}
