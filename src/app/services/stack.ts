import { Injectable } from '@angular/core';
import { StackModel } from '../models/stack.model';

@Injectable({
  providedIn: 'root',
})
export class StackService {

  stacks: StackModel[];

  constructor() {
    this.stacks = [
      { nom: 'Angular', iconeUrl: 'icons/angular.svg', couleur: '#DD0031'},
      { nom: 'TypeScript', iconeUrl: 'icons/typescript.png', couleur: '#3178C6'},
      { nom: 'Tailwind CSS', iconeUrl: 'icons/tailwindcss.png', couleur: '#06B6D4'},
      { nom: 'Java', iconeUrl: 'icons/java.png', couleur: '#FF9900' },
      { nom: 'SpringBoot', iconeUrl: 'icons/spring_boot.png', couleur: '#E0234E'},
      { nom: 'PostgreSQL', iconeUrl: 'icons/postgresql.png', couleur: '#336791'},
      { nom: 'Docker', iconeUrl: 'icons/docker.svg', couleur: '#2496ED'},
      { nom: 'Git', iconeUrl: 'icons/git.png', couleur: '#F05032'},
      { nom: 'AWS', iconeUrl: 'icons/aws.jpeg', couleur: '#FF9900'},
      { nom: 'Symfony', iconeUrl: 'icons/symfony.svg', couleur: '#FF9900'},
    ];
  }

  getStacks(): StackModel[] {
    return this.stacks;
  }
  
}
