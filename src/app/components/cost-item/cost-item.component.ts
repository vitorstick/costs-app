import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  CommentInterface,
  CostItemInterface,
  CostType,
  NewComment,
  PaymentCurrenciesInterface,
} from 'src/app/models';

@Component({
  selector: 'app-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostItemComponent {
  @Input('costItem') costItem: CostItemInterface | undefined;
  @Input('selectedPaymentCurrencies')
  selectedPaymentCurrencies: PaymentCurrenciesInterface | null = null;
  // TODO: LOGGED IN USER FOR AUTHOR?
  @Input('author') author: string = 'Mr. John Doe';

  get commentsNumber(): number {
    return this.costItem?.comments?.length ?? 0;
  }

  get comments(): CommentInterface[] {
    return this.costItem?.comments ?? [];
  }

  get quotedCost(): number {
    const costItem = this.costItem?.costs?.find(
      (cost) => cost.type === CostType.Quoted
    );
    return costItem?.amount ?? 0;
  }

  get screenedCost(): number {
    const costItem = this.costItem?.costs?.find(
      (cost) => cost.type === CostType.Screened
    );
    return costItem?.amount ?? 0;
  }

  get screenedCostFromForm(): number {
    return this.screenedCostForm.get('screenedCost')?.value ?? 0;
  }

  screenedCostForm!: FormGroup;

  ngOnInit(): void {
    this.createScreenedCostForm();
  }

  addComment(newComment: NewComment) {
    // INSTEAD OF THIS WE SHOULD PASS IT TO THE SMART COMPONENT AND USE A SERVICE TO CALL THE API
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

  getExchangeRateValue(fromCurrency: number, rate: number): number {
    // return CalculationHelper.getValueInCurrency(fromCurrency, rate);
    return 0;
  }

  removeComment(commentId: number) {
    // INSTEAD OF THIS WE SHOULD PASS IT TO THE SMART COMPONENT AND USE A SERVICE TO CALL THE API
    const filteredComments = this.costItem?.comments?.filter(
      (comment) => comment.id !== commentId
    );
    if (this.costItem) {
      this.costItem.comments = [...(filteredComments ?? [])];
    }
  }

  private createScreenedCostForm() {
    this.screenedCostForm = new FormGroup({
      screenedCost: new FormControl(this.screenedCost, Validators.required),
    });
  }
}
