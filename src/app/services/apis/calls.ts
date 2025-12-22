import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallsService {

  private readonly httpClient = inject(HttpClient)

  downloadCv(): Observable<Blob> {
    return this.httpClient.get(`/imgs/CV_Beh Aboudramane_TRAORE.pdf`, 
      { responseType: 'blob' }
    );
  }
}
