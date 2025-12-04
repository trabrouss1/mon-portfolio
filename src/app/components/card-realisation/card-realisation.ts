import { Component, inject, OnInit } from '@angular/core';
import { RealisationService } from '../../services/realisation';
import { RealisationModel } from '../../models/realisation.model';

@Component({
  selector: 'app-card-realisation',
  imports: [],
  templateUrl: './card-realisation.html',
  styleUrl: './card-realisation.css',
})

export class CardRealisation implements OnInit {

  realisations: RealisationModel[] = [];
  
  private realisationService = inject(RealisationService)
  
  ngOnInit(): void {
    this.realisations = this.realisationService.getRealisations();
  }
  
}
