import { Component, inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience';
import { ExperienceModel } from '../../models/experience.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.css',
  providers: [DatePipe]
})
export class CardExperience implements OnInit {

  experiences : ExperienceModel[] = [];

  private experienceService = inject(ExperienceService);

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

  formatDate(dateStr: Date | null | undefined): string {
    if (!dateStr) return "Présent";
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
  }

  calculateDuration(start: Date | undefined, end: Date | null | undefined): string {
    if (!start) return ''; // Si start est undefined, on retourne vide
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`;
    } else if (years > 0) {
      return `${years} an${years > 1 ? 's' : ''}`;
    } else {
      return `${remainingMonths} mois`;
    }
  }
  
}
