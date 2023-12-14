import { Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { AlbumsService } from '../../services/albums/albums.service';
import { IAlbum, IAlbums, ITracks } from '../../shared/interfaces/albums.inteface';
import { Routes } from '../../shared/enums/routes';
import { BackendValues } from '../../shared/enums/backend';
import { FilterKeys, FilterOptions } from '../../shared/enums/filterKeys';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})

export class AlbumsListComponent implements OnInit {
  public filteredAlbums: IAlbum[] = [];
  public isLoading: boolean;
  public searchText: string = '';

  private currentPosition: number = 0;
  private albums: IAlbum[];
  protected readonly Routes = Routes;
  protected readonly FilterKeys = FilterKeys;
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.albumsService
      .getAlbums<IAlbums>(BackendValues.beatles, BackendValues.album)
      .pipe(take(1))
      .subscribe({
        next: (albums: IAlbums) => {
          this.albums = albums.results;
          this.onScrollDown();
          this.isLoading = false;
        },
        error: (err) => (this.isLoading = false),
      });
  }

  public onScrollDown(): void {
    if (this.currentPosition < this.albums?.length) {
      const lastIndex: number = Math.min(
        this.currentPosition + FilterOptions.ItemsPerPage,
        this.albums.length,
      );
      const nextElements: IAlbum[] = this.albums.slice(
        this.currentPosition,
        lastIndex,
      );
      this.filteredAlbums = this.filteredAlbums.concat(nextElements);
      this.currentPosition = lastIndex;
    }
  }

  public sortAlbums(sortType: string): void {
    switch (sortType) {
      case FilterKeys.Asc:
        this.albums.sort((a, b) =>
          a.collectionName
            .toLowerCase()
            .localeCompare(b.collectionName.toLowerCase()),
        );
        break;
      case FilterKeys.Desc:
        this.albums.sort((a, b) =>
          b.collectionName
            .toLowerCase()
            .localeCompare(a.collectionName.toLowerCase()),
        );
    }

    this.filteredAlbums = this.albums.slice(0, this.currentPosition);
    this.searchText = '';
  }

  public filterData(): void {
    this.filteredAlbums = this.albums.filter((item: IAlbum) =>
      item.collectionName.toUpperCase().includes(this.searchText.toUpperCase()),
    );
  }
}
