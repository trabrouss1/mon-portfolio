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
        description: `Il faut imaginer le front-end comme la vitrine et les rayons de votre boutique préférée. 
        Cette boutique est sculptée numériquement avec des outils tels que Javascript, TypeScript, React Js, Next Js etc. 
        On façonne l'apparence et l'interactivité, peignant des histoires visuelles avec Tailwind CSS, Shadcn UI et 
        d'autres librairies pour ainsi créer des expériences utilisateur captivantes ! 🎨`,
        icon: 'frontend',
      },
      {
        id: 'backend',
        title: 'Backend',
        description: `Le backend est le cœur de toute application. C'est là que réside la logique métier, la gestion des données 
        et la sécurité. Avec Node.js, Express, NestJS et des bases de données comme MongoDB ou PostgreSQL, je construis des 
        architectures robustes et scalables qui alimentent vos applications ! 🔧`,
        icon: 'backend',
      },
      {
        id: 'fullstack',
        title: 'Full Stack',
        description: `En combinant frontend et backend, je crée des solutions complètes de bout en bout. De la conception de l'interface 
        utilisateur à l'architecture serveur, en passant par l'intégration d'APIs et le déploiement, je maîtrise chaque étape 
        du développement web moderne ! 🚀`,
        icon: 'fullstack',
      },
      {
        id: 'design',
        title: 'UI/UX Design',
        description: `Le design n'est pas seulement une question d'esthétique, c'est une question d'expérience. Je conçois des 
        interfaces intuitives et élégantes qui placent l'utilisateur au centre. Chaque pixel, chaque interaction est pensée 
        pour offrir une expérience fluide et mémorable ! ✨`,
        icon: 'design',
      },
      {
        id: 'performance',
        title: 'Performance',
        description: `La vitesse est essentielle dans le web moderne. J'optimise chaque aspect de vos applications pour garantir des 
        temps de chargement rapides, une navigation fluide et une expérience utilisateur optimale sur tous les appareils. 
        Performance et qualité vont de pair ! ⚡`,
        icon: 'performance',
      },
      {
        id: 'security',
        title: 'Sécurité',
        description: `La sécurité n'est pas une option, c'est une priorité. J'implémente les meilleures pratiques de sécurité : 
        authentification robuste, protection contre les failles courantes, encryption des données sensibles et conformité aux 
        standards de l'industrie pour protéger vos utilisateurs ! 🔒`,
        icon: 'security',
      },
    ];
  }

  getProfil(): ProfilModel[] {
    return this.profil;
  }
}
