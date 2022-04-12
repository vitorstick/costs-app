import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CostInterface } from 'src/app/models';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostElementComponent implements OnInit {
  @Input('cost') cost: CostInterface | undefined;

  constructor() {}

  ngOnInit(): void {}
}
