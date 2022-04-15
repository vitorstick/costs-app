import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommentInterface, NewComment } from 'src/app/models';

@Component({
  selector: 'app-cost-comment',
  templateUrl: './cost-comment.component.html',
  styleUrls: ['./cost-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCommentComponent {
  @Input('comment') comment: CommentInterface | undefined;

  @Output() readonly removeCommentEmitter: EventEmitter<number> =
    new EventEmitter();

  @Output() readonly addCommentEmitter: EventEmitter<NewComment> =
    new EventEmitter();

  editMode = false;

  remove() {
    if (this.comment?.id) {
      this.removeCommentEmitter.emit(this.comment.id);
    }
  }

  edit() {
    this.editMode = true;
  }

  addComment(newComment: NewComment) {
    if (this.comment?.id) {
      this.removeCommentEmitter.emit(this.comment.id);
    }
    this.addCommentEmitter.emit(newComment);
    this.editMode = false;
  }
}
