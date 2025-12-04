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
        name: 'Markaz Manager',
        description: 'Un progiciel de gestion intégré (ERP) conçu sur mesure pour l’Institut des Sciences Islamiques afin de faciliter et d’automatiser les tâches quotidiennes.',
        model: 'App Web',
        languages: ["Spring Boot", "TailwindCss", "Livewire", "Alpine", "Mysql"],
        imageUrl: 'imgs/markaz-manager.png',
        link: 'markaz-manager.isi.ci'
      },
      {
        id: 2,
        name: 'SIGE',
        description: 'Un Système Intégré de Gestion des Ecoles (SIGE) permettant la gestion complète des écoles (inscriptions, des cours et des notes etc..). Avec du multi-tenant pour gérer plusieurs écoles depuis une seule plateforme.',
        model: 'App Web',
        languages: ["Spring Boot", "TailwindCss", "Livewire", "Alpine", "Mysql"],
        imageUrl: 'imgs/sige.png',
        link: "app.sige.africa"
      },
      {
        id: 3,
        name: 'Espace élève',
        description: 'Une plateforme web dédiée aux élèves de l\'Institut des Sciences Islamiques pour accéder à leurs ressources éducatives, suivre leurs progrès.',
        model: 'App Web',
        languages: ["Spring Boot", "TailwindCss", "Livewire", "Alpine", "Mysql"],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      },
    ];
  }

  getRealisations(): RealisationModel[] {
    return this.realisations;
  }
}
