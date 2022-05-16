import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IPostDetails} from '../../interfaces/IPostDetails';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let {state: {data}} = history;
      this.postDetailsObj = data as IPostDetails;
    })
  }

}
