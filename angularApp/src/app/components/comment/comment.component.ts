import {Component, Input, OnInit} from '@angular/core';

import {IComment} from '../../interfaces/IComment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateMe(comment: IComment) {
    return this.router.navigate(
      ['comment-details', comment.id],
      {
        relativeTo: this.activatedRoute,
        state: {data: comment}
      }
    )
  }
}
