import { Component, inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience';
import { ExperienceModel } from '../../models/experience.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-experience',
  imports: [DatePipe],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.css',
})
export class CardExperience implements OnInit {

  experiences : ExperienceModel[] = [];

  private experienceService = inject(ExperienceService);

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

}
