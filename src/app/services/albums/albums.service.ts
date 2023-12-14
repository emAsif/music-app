import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { IAlbums } from '../../shared/interfaces/albums.inteface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  baseUrl: string = '/api';
  constructor(private http: HttpClient) {}

  public getAlbums<T>(term: string, entity?: string): Observable<T> {
    let url = `${this.baseUrl}/?term=${term}`;
    if (entity) {
      url += `&entity=${entity}`;
    }

    return this.http.get(url) as Observable<T>;
  }
}
