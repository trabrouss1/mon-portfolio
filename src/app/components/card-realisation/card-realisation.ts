import { Component } from '@angular/core';
import { RealisationService } from '../../services/realisation';
import { RealisationModel } from '../../models/realisation.model';

@Component({
  selector: 'app-card-realisation',
  imports: [],
  templateUrl: './card-realisation.html',
  styleUrl: './card-realisation.css',
})
export class CardRealisation {
  
  realisations: RealisationModel[] = [];

  constructor(private realisationService: RealisationService) {
    this.realisations = this.realisationService.getRealisations();
  }
}
