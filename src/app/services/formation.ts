import { Injectable } from '@angular/core';
import { FormationModel } from '../models/formation.model';

@Injectable({
  providedIn: 'root',
})
export class formationService {

  formations: FormationModel[];

  constructor() {
    this.formations = [
        {
          id: 'master1mbds2025',
          diplome: 'Master 1 - Mobiquité, Big Data, Système et Cloud (MBDS)',
          startDate: new Date('2025-09-01'),
          endDate: new Date('2026-06-30'),
          ecole: 'ESATIC - École Supérieure Africaine des Technologies de l\'Information et de la Communication',
          description: `Actuellement en Master 1 MBDS à l’ESATIC, je souhaite, en complément de mon profil de développeur, approfondir mes connaissances dans les domaines du big data, des systèmes et du cloud computing.`,
          icon: 'diplome',
          color: 'text-orange-600',
        },
        {
          id: 'licence3miage2023',
          diplome: 'Licence - Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)',
          startDate: new Date('2019-09-01'),
          endDate: new Date('2022-06-30'),
          ecole: 'UPB - Université Polytechnique de Bingerville',
          description: `L'obtention de ma licence en MIAGE s'est faite à travers un parcours riche en apprentissages théoriques et pratiques.`,
          lien: 'https://www.upb.ci/',
          color: 'text-purple-600',
          icon: 'diplome',
        },
        {
          id: 'bac2018',
          diplome: 'Baccalauréat Serie D',
          startDate: new Date('2018-06-01'),
          endDate: null,
          ecole: 'Collège Les Falaises, Abobo',
          description: `Baccalauréat Scientifique (BAC D) – Mention Assez Bien, Collège Les Falaises, Abobo-Sagbé.`,
          color: 'text-blue-600',
          icon: 'diplome',
        }
      ];
  }

  getFormations(): FormationModel[] {
    return this.formations;
  }
}
