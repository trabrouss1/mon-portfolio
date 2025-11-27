import { Component } from '@angular/core';


interface Profil {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-card-profil',
  imports: [],
  templateUrl: './card-profil.html',
  styleUrl: './card-profil.css',
})

export class CardProfil {

  profils: Profil[] = [
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

  getIconSvg(iconId: string): string {
    const icons: { [key: string]: string } = {
      'frontend': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19.5 16.5c-.59-.04-.984-.187-1.312-.562-.657-.75-.657-1.688.257-2.461l1.54-1.364c2.355-2.082 2.355-5.496 0-7.578-1.739-1.527-4.07-2.285-6.493-2.285-2.828 0-5.781 1.031-8.062 3.05-4.239 3.75-4.239 9.888 0 13.638 2.11 1.863 4.953 2.792 7.765 2.812h.086c2.813 0 5.582-.914 7.555-2.66.914-.809.914-1.043.004-2.422-.215-.355-.637-.121-1.34-.168M5.25 9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.875 6.328a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M9 6.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m3 12.703a2.25 2.25 0 1 1 .001-4.501A2.25 2.25 0 0 1 12 19.453M15.375 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 0"
                            style="stroke:none;fill-rule:nonzero;fill:#000;fill-opacity:1"></path>
                    </svg>`,
      'backend': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>`,
      'fullstack': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      'design': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      'performance': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      'security': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    };
    return icons[iconId] || '';
  }

}