import { Component, Input } from '@angular/core';

interface Formation {
  id: string;
  diplome: string;
  annee: number;
  ecole: string;
  description: string;
  lien?: string;
  icon?: string;
  color?: string;
}

@Component({
  selector: 'app-card-formation',
  imports: [],
  templateUrl: './card-formation.html',
  styleUrl: './card-formation.css',
})
export class CardFormation {

  @Input() formations: Formation[] = [
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

  getIconSvg(iconId: string): string {
    const icons: { [key: string]: string } = {
      'master1': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />`,
      'certification': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>`
    };
    return icons[iconId] || '';
  }
}
