import { Component, inject, OnInit } from '@angular/core';
import { StackService } from '../../services/stack';
import { StackModel } from '../../models/stack.model';


@Component({
  selector: 'app-card-stack',
  imports: [],
  templateUrl: './card-stack.html',
  styleUrl: './card-stack.css',
})
export class CardStack implements OnInit {
  
  stacks: StackModel[] = [];

  private stackService = inject(StackService);

  ngOnInit(): void {
    this.stacks = this.stackService.getStacks();
  }

}

