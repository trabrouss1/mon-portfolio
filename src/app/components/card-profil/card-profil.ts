import { Component, inject, OnInit } from '@angular/core';
import { ProfilModel } from '../../models/profil.model';
import { ProfilService } from '../../services/profil';


@Component({
  selector: 'app-card-profil',
  imports: [],
  templateUrl: './card-profil.html',
  styleUrl: './card-profil.css',
})

export class CardProfil implements OnInit {

  profils: ProfilModel[] = [];

  private profilService = inject(ProfilService)
  
  ngOnInit(): void {
    this.profils = this.profilService.getProfil();
  }

  getIconSvg(iconId: string = ''): string {
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