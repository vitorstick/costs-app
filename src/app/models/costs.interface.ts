import { CommentType, CostType } from './type.enum';

export interface CostViewModel {
  baseCurrency: BaseCurrencyInterface;
  daCurrency: DaCurrencyInterface;
  costs: CostInterface[];
}

export interface BaseCurrencyInterface {
  currency: string;
  exchangeRate: number;
}

export interface DaCurrencyInterface {
  currency: string;
}

export interface CostInterface {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItemInterface[];
}

export interface CostItemInterface {
  id: number;
  name: string;
  costItemAlias: {
    accountingCode: 'Acc-01';
  };
  annotation: AnnotationInterface;
  costs: CostItemCostInterface[];
  comments: CommentInterface[];
}

export interface AnnotationInterface {
  id: number;
  name: string;
}

export interface CostItemCostInterface {
  daStage: string;
  persona: string;
  type: CostType;
  amount: number;
}

export interface CommentInterface {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: CommentType;
  date: Date;
}

export type NewComment = Pick<CommentInterface, 'type' | 'comment'>;
