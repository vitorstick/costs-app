import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CommentInterface } from 'src/app/models';

@Component({
  selector: 'app-cost-comment',
  templateUrl: './cost-comment.component.html',
  styleUrls: ['./cost-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCommentComponent implements OnInit {
  @Input('comment') comment: CommentInterface | undefined;

  constructor() {}

  ngOnInit(): void {}
}
