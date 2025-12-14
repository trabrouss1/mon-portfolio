import { Injectable } from '@angular/core';
import { ProfilModel } from '../models/profil.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  
  profil: ProfilModel[];
  
  constructor() {
    this.profil = [
      {
        id: 'frontend',
        title: 'Frontend',
        description: `Le frontend représente la vitrine et l’expérience vécue par l’utilisateur, à l’image des rayons d’une boutique moderne et bien organisée.
        C’est la partie visible de l’application, celle qui capte l’attention et facilite la navigation.
        Je conçois des interfaces dynamiques, performantes et intuitives à l’aide de technologies modernes telles que JavaScript, TypeScript, et Angular.
        Chaque composant est pensé pour offrir une interaction fluide et une expérience utilisateur optimale.
        Pour le design et l’ergonomie, j’utilise Tailwind CSS, Shadcn UI et d’autres bibliothèques UI afin de créer des interfaces élégantes, cohérentes et accessibles, tout en respectant les bonnes pratiques du web moderne. 🎨`,
        icon: 'frontend',
      },
      {
        id: 'backend',
        title: 'Backend',
        description: `Le backend constitue le cœur de toute application.
        C’est là que se trouvent la logique métier, la gestion des données et les mécanismes de sécurité qui garantissent le bon fonctionnement du système.
        À l’aide de Java (SpringBoot) et PHP (symfony), je conçois des API robustes, maintenables et évolutives, capables de répondre aux besoins métiers les plus exigeants.
        Je m’appuie sur des bases de données performantes telles que Mysql et PostgreSQL pour assurer une gestion efficace et fiable des données.`,
        icon: 'backend',
      },
      {
        id: 'fullstack',
        title: 'Full Stack',
        description: `En combinant le frontend et le backend, je conçois des solutions complètes de bout en bout, pensées pour être performantes, fiables et évolutives.
        De la conception des interfaces utilisateur à la mise en place de l’architecture serveur, en passant par l’intégration d’API et le déploiement, je maîtrise l’ensemble du cycle du développement web moderne. 🚀`,
        icon: 'fullstack',
      }
    ];
  }

  getProfil(): ProfilModel[] {
    return this.profil;
  }
}
