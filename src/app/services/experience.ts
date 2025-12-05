import { Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience.model';

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
        company: 'Tech Solutions',
        startDate: new Date('2022-01-15'),
        endDate: null,
        description: 'Développement et maintenance d\'applications web en utilisant Angular et Node.js.'
      },
      {
        id: 2,
        title: 'Stagiaire Développeur Frontend',
        company: 'Web Innovators',
        startDate: new Date('2021-06-01'),
        endDate: new Date('2021-12-31'),
        description: 'Participation à la création d\'interfaces utilisateur réactives avec Angular.'
      }
    ];
  }

  getExperiences(): ExperienceModel[] {
    return this.experiences;
  }

}
