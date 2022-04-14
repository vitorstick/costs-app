import { Component, Input, OnInit } from '@angular/core';
import {
  BaseCurrencyInterface,
  CommentInterface,
  CostItemInterface,
  DaCurrencyInterface,
  NewComment,
} from 'src/app/models';

@Component({
  selector: 'app-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss'],
})
export class CostItemComponent implements OnInit {
  @Input('costItem') costItem: CostItemInterface | undefined;
  @Input('baseCurrency') baseCurrency: BaseCurrencyInterface | undefined;
  @Input('daCurrency') daCurrency: DaCurrencyInterface | undefined;
  // TODO: LOGGED IN USER FOR AUTHOR?
  @Input('author') author: string = 'Mr. John Doe';

  get commentsNumber(): number {
    return this.costItem?.comments?.length ?? 0;
  }

  get comments(): CommentInterface[] {
    return this.costItem?.comments ?? [];
  }

  constructor() {}

  ngOnInit(): void {}

  addComment(newComment: NewComment) {
    const comment: CommentInterface = {
      ...newComment,
      date: new Date(),
      // TODO: NEED TO GENERATE ID
      id: this.comments.length + 101,
      daStage: '',
      persona: '',
      author: this.author,
    };

    this.costItem?.comments?.push(comment);
  }
}
