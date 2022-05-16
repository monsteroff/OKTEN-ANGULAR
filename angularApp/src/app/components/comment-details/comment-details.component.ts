import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ICommentDetails} from '../../interfaces/ICommentDetails';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(v => {
      // let state = this.router.getCurrentNavigation()?.extras.state
      // if (state != undefined) this.commentDetailsObj = state['data'];
      this.commentDetailsObj = this.router.getCurrentNavigation()?.extras?.state?.['data'] as ICommentDetails;
    })
  }

  ngOnInit(): void {

  }

}
