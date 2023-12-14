import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { AlbumsService } from '../../services/albums/albums.service';
import { ITrack, ITracks } from '../../shared/interfaces/albums.inteface';
import { Routes } from '../../shared/enums/routes';
import { BackendValues } from '../../shared/enums/backend';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent {
  protected readonly Routes = Routes;

  tracks$: Observable<ITracks[]> = this.activatedRoute.queryParamMap.pipe(
    map((params: ParamMap) => +params?.get('id')),
    switchMap((collectionId: number) => this.getTracks(collectionId)));
  constructor(private activatedRoute: ActivatedRoute, private albumsService: AlbumsService) {}

  private getTracks(collectionId: number): Observable<ITracks[]> {
      return this.albumsService.getAlbums<ITrack>(BackendValues.beatles).pipe(
        map((tracks: ITrack) => tracks.results.filter((track: ITracks) => {
          return track.collectionId == collectionId;
        }))
      );
  }
}
