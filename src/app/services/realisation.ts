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
        languages: ["Spring Boot", "Postgresql", "Flyway", "Redis"],
        imageUrl: 'imgs/markaz-manager.png',
        link: 'https://markaz-manager.isi.ci',
        role: 'Backend Developer',
        company : 'Institut des Sciences Islamiques'
      },
      {
        id: 2,
        name: 'SIGE',
        description: 'Un Système Intégré de Gestion des Ecoles (SIGE) permettant la gestion complète des écoles (inscriptions, des cours et des notes etc..). Avec du multi-tenant pour gérer plusieurs écoles depuis une seule plateforme.',
        languages: ["Symfony", "Mysql", "Bootstrap"],
        imageUrl: 'imgs/sige.png',
        link: "https://app.sige.africa",
        role: 'Full Stack Developer',
        company: 'Diaspora'
      },
      {
        id: 3,
        name: 'Espace élève',
        description: 'Une plateforme web dédiée aux élèves de l\'Institut des Sciences Islamiques pour accéder à leurs ressources éducatives, suivre leurs progrès.',
        languages: ["Angular", "TailwindCss"],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        role: 'Frontend Developer',
        company: 'Institut des Sciences Islamiques'
      },
      {
        id: 4,
        name: 'Portfolio',
        description: 'Mon portfolio pour présenter mes compétences, projets et expériences professionnelles de manière attrayante et accessible en ligne.',
        languages: ["Angular", "TailwindCss"],
        imageUrl: 'imgs/portfolio.png',
        link: 'https://tba-portfolio.vercel.app/',
        role: 'Frontend Developer',
        company: 'Perso'
      },
      {
        id: 5,
        name: 'Keneya',
        description: 'Une plateforme de gestion de centre de santé qui permet aux professionnels de la santé de gérer les dossiers des patients, les rendez-vous, les prescriptions et les facturations de manière efficace et sécurisée.',
        languages: ["Spring Boot", "Postgresql"],
        imageUrl: 'imgs/keneya.png',
        link: 'https://keneya-v1-dev.diaspora-expertise.com',
        role: 'Backend Developer',
        company: 'Diaspora'
      },
      {
        id: 6,
        name: 'Immo',
        description: 'Une plateforme de gestion immobilière qui permet aux propriétaires de suivre et gérer facilement leurs biens, de la location à l’entretien, en passant par le suivi des paiements et des contrats, tout en offrant des outils d’organisation et de communication centralisés.',
        languages: ["Symfony", "Mysql", "Bootstrap"],
        imageUrl: 'imgs/immo_login.png',
        link: 'https://immo.youstra.ci',
        role: 'Full Stack Developer',
        company: 'Diaspora'
      },
      {
        id: 7,
        name: 'Labayk',
        description: 'Application mobile et web destinée aux agences organisant les voyages pour le Hajj et la Omra. Elle permet de gérer efficacement les voyages religieux en prenant en charge la répartition manuelle et automatique des pèlerins pour les vols et les chambres, le suivi des échéanciers de versements, ainsi que la gestion de plusieurs agences avec une seule application. etc...',
        languages: ["Spring Boot", "Postgresql"],
        imageUrl: 'imgs/labayk.png',
        link: 'https://labayk.youstra.ci',
        role: 'Backend Developer',
        company: 'Diaspora'
      },
    ];
  }

  getRealisations(): RealisationModel[] {
    return this.realisations;
  }
}
