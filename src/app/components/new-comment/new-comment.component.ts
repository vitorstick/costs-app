import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentType } from 'src/app/models';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCommentComponent implements OnInit {
  @Output() readonly addComment: EventEmitter<string> = new EventEmitter();

  commentForm!: FormGroup;

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

  add() {}

  private createCommentForm() {
    this.commentForm = new FormGroup({
      type: new FormControl('', Validators.required),
      comment: new FormControl(''),
    });
  }
}
