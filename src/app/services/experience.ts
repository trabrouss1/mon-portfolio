import { Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  
  experiences: ExperienceModel[];

  constructor() {
    this.experiences = [
      {
        id: 1,
        title: 'Développeur Full Stack',
        company: 'Institut Des Sciences Islamiques - (ISI)',
        startDate: new Date('2022-01-15'),
        endDate: null,
        description: 'Développement et maintenance d’applications web avec PHP (Symfony). Aujourd’hui, je travaille avec Java (Spring Boot) pour le backend afin de créer des applications modernes, performantes et maintenables.',
        logoUrl: 'assets/images/isi-logo.png'
      },
      {
        id: 2,
        title: 'Développeur Full Stack',
        company: 'Diaspora',
        startDate: new Date('2024-06-01'),
        endDate: null,
        description: 'Participation à la création de plusieurs applications (plus de détails dans la section Réalisations).',
        logoUrl: 'assets/imgs/logo_diaspora_night.jpg'
      }
    ];
  }

  getExperiences(): ExperienceModel[] {
    return this.experiences;
  }

  obtenirAnneeFormatee(dateDebut : Date, dateFin: Date): string {
    const debut = formatDate(dateDebut, 'yyyy', 'fr-FR');
    const fin = formatDate(dateFin, 'yyyy', 'fr-FR');
    return `${debut} - ${fin}`;
  }

}
