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
          id: 'master1-mbds-2025',
          diplome: 'Master 1 en MBDS - Mobiquité, Big Data, Système et Cloud',
          annee: 2025-2026,
          ecole: 'ESATIC - École Supérieure Africaine des Technologies de l\'Information et de la Communication',
          description: `Spécialisation en développement web et mobile avec un focus sur les architectures modernes et les bonnes pratiques de développement.`,
          icon: 'master1',
          color: 'text-orange-600',
        },
        {
          id: 'licence3-miage-2023',
          diplome: 'Licence 3 en MIAGE - Méthodes Informatiques Appliquées à la Gestion des Entreprises',
          annee: 2023,
          ecole: 'UPB - Université Polytechnique de Bingerville',
          description: `Formation complète en programmation, algorithmique et développement logiciel avec mention très bien.`,
          lien: 'https://www.upb.ci/',
          color: 'text-purple-600',
          icon: 'master1',
        },
        {
          id: 'aws-solutions-architect-2023',
          diplome: 'AWS Certified Solutions Architect – Associate',
          annee: 2023,
          ecole: 'Amazon Web Services (AWS)',
          description: `Certification professionnelle validant l'expertise en conception et déploiement d'applications évolutives sur AWS.`,
          lien: 'https://www.credly.com/badges/your-badge-id',
          color: 'text-blue-600',
          icon: 'certification',
        },
        {
          id: 'mongodb-developer-2023',
          diplome: 'MongoDB Certified Developer',
          annee: 2023,
          ecole: 'MongoDB University',
          description: `Expertise certifiée en conception de schémas, optimisation de requêtes et gestion de bases de données MongoDB.`,
          lien: 'https://www.credly.com/badges/your-badge-id',
          color: 'text-green-600',
          icon: 'certification',
        },
        {
          id: 'React-Adv-2023',
          diplome: 'React Advanced Certification',
          annee: 2023,
          ecole: 'MongoDB University',
          description: `Certification avancée couvrant hooks, performance, patterns avancés et meilleures pratiques React.`,
          lien: 'https://www.credly.com/badges/your-badge-id',
          color: 'text-red-600',
          icon: 'certification',
        }
      ];
  }

  getFormations(): FormationModel[] {
    return this.formations;
  }
}
