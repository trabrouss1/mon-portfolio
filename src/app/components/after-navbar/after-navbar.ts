import { Component, inject } from '@angular/core';
import { CallsService } from '../../services/apis/calls';
import { response } from 'express';

@Component({
  selector: 'app-after-navbar',
  imports: [],
  templateUrl: './after-navbar.html',
  styleUrl: './after-navbar.css',
})
export class AfterNavbar {

  experience : string = 'trois (03)';

  private readonly apiCalls = inject(CallsService)

  downloadCv(){
    this.apiCalls.downloadCv().subscribe({
      next: (response: Blob) => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);

        const a = document.createElement("a")
        a.href = fileURL
        a.download = `Cv_Beh_Aboudramane_TRAORE.pdf`
        document.body.appendChild(a)
        a.click()
        window.open(fileURL);
        document.body.removeChild(a);
      },
      error: (error) => {
        console.error('Erreur lors de téléchargement du cv', error);
      }
    })

  }
}
