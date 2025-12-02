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
          annee: '2025-2026',
          ecole: 'ESATIC - École Supérieure Africaine des Technologies de l\'Information et de la Communication',
          description: `Actuellement en cours de Master 1 MBDS à l'ESATIC, je vis la spécialisation dans le domaine de la big data, des systèmes et du cloud computing.`,
          icon: 'diplome',
          color: 'text-orange-600',
        },
        {
          id: 'licence3miage2023',
          diplome: 'Licence - Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)',
          annee: '2019-2022',
          ecole: 'UPB - Université Polytechnique de Bingerville',
          description: `L'obtention de ma licence en MIAGE s'est faite à travers un parcours riche en apprentissages théoriques et pratiques.`,
          lien: 'https://www.upb.ci/',
          color: 'text-purple-600',
          icon: 'diplome',
        },
        {
          id: 'bac2018',
          diplome: 'Baccalauréat Serie D',
          annee: '2018',
          ecole: 'Collège Les Falaises, Abobo',
          description: `J'ai obtenu mon Baccalauréat Scientifique (BAC D) avec la mention Assez Bien au Collège Les Falaises à Abobo-Sagbe.`,
          color: 'text-blue-600',
          icon: 'diplome',
        }
      ];
  }

  getFormations(): FormationModel[] {
    return this.formations;
  }
}
