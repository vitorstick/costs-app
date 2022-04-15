import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentInterface, CommentType, NewComment } from 'src/app/models';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCommentComponent implements OnInit {
  @Output() readonly addCommentEmitter: EventEmitter<NewComment> =
    new EventEmitter();

  @Input('existingComment')
  set existingComment(comment: CommentInterface | undefined) {
    if (comment) {
      this.comment = comment;
      this.createCommentForm();
    }
  }

  commentForm!: FormGroup;

  private comment!: CommentInterface;
  private readonly commentTypeEnum = CommentType;

  get commentType(): string[] {
    return Object.keys(this.commentTypeEnum);
  }

  get getTypeInvalid(): boolean {
    return this.commentForm?.get('type')?.invalid ?? true;
  }

  constructor() {}

  ngOnInit(): void {
    this.createCommentForm();
  }

  add() {
    if (this.commentForm.valid) {
      this.addCommentEmitter.emit(this.commentForm.getRawValue());
      this.commentForm.reset();
    }
  }

  private createCommentForm() {
    this.commentForm = new FormGroup({
      type: new FormControl(this.comment?.type ?? '', Validators.required),
      comment: new FormControl(this.comment?.comment ?? '', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
    });
  }
}
