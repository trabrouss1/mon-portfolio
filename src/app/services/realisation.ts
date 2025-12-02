import { Injectable } from '@angular/core';
import { RealisationModel } from '../models/realisation.model';

@Injectable({
  providedIn: 'root',
})
export class RealisationService {

  realisations: RealisationModel[];

  constructor() {
    this.realisations = [
      {
        id: 1,
        name: 'Portfolio Personnel',
        description: 'Un site web personnel pour présenter mes compétences et projets.',
        model: 'App Web',
        symbol: 'P',
        language: 'TypeScript',
      },
      {
        id: 2,
        name: 'Application de Gestion de Tâches',
        description: 'Une application web pour gérer les tâches quotidiennes avec une interface utilisateur intuitive.',
        model: 'App Web',
        symbol: 'D',
        language: 'JavaScript',
      },
      {
        id: 3,
        name: 'E-commerce Platform',
        description: 'Une plateforme de commerce électronique complète avec panier d\'achat et paiement en ligne.',
        model: 'App Web',
        symbol: 'A',
        language: 'Angular',
      },
    ];
  }

  getRealisations(): RealisationModel[] {
    return this.realisations;
  }
}
