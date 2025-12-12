import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardStack } from "../card-stack/card-stack";

@Component({
  selector: 'app-stack',
  imports: [CardStack],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {

}
