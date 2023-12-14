import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsListComponent } from './albums-list.component';
import { AlbumsService } from '../../services/albums/albums.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';
import { NgOptimizedImage } from '@angular/common';
import { FilterKeys } from '../../shared/enums/filterKeys';

const mockAlbum = {
  resultCount: 34,
  results: [
    {
      collectionId: 1713154518,
      artistName: "The Beatles",
      collectionName: "abc",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154559,
      artistName: "The Beatles",
      collectionName: "bcd",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154528,
      artistName: "The Beatles",
      collectionName: "cde",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 17131548,
      artistName: "The Beatles",
      collectionName: "def",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 171314559,
      artistName: "The Beatles",
      collectionName: "efg",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 171315458,
      artistName: "The Beatles",
      collectionName: "fgh",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154518,
      artistName: "The Beatles",
      collectionName: "ghi",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154559,
      artistName: "The Beatles",
      collectionName: "hij",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154528,
      artistName: "The Beatles",
      collectionName: "ijk",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 17131548,
      artistName: "The Beatles",
      collectionName: "jkl",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 171314559,
      artistName: "The Beatles",
      collectionName: "klm",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 171315458,
      artistName: "The Beatles",
      collectionName: "lmn",
      artworkUrl100: "https://is1-ssl.jpg",
    }
  ]
}
describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;
  let mockAlbumsService;

  beforeEach(() => {
    mockAlbumsService = {
      getAlbums: jasmine.createSpy().and.returnValue(of(mockAlbum))
    }

    TestBed.configureTestingModule({
      declarations: [AlbumsListComponent],
      imports: [FormsModule, InfiniteScrollModule, RouterTestingModule, NgOptimizedImage],
      providers: [
        { provide: AlbumsService, useValue: mockAlbumsService }
      ]
    });
    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get allAlbums and display first 6 results', () => {
    expect(mockAlbumsService.getAlbums).toHaveBeenCalled();
    expect((component as any).albums.length).toBeGreaterThan(0);
    expect(component.filteredAlbums.length).toBe(6);
  });

  it('should sort Asc', () => {
    component.sortAlbums(FilterKeys.Asc);
    expect(component.filteredAlbums[0].collectionName).toBe('abc')
    expect(component.filteredAlbums[1].collectionName).toBe('bcd')
    expect(component.filteredAlbums[2].collectionName).toBe('cde')
    expect(component.filteredAlbums.length).toEqual(6)
  });

  it('should sort Desc', () => {
    component.sortAlbums(FilterKeys.Desc);
    expect(component.filteredAlbums[0].collectionName).toBe('lmn')
    expect(component.filteredAlbums[1].collectionName).toBe('klm')
    expect(component.filteredAlbums[2].collectionName).toBe('jkl')
    expect(component.filteredAlbums.length).toEqual(6)
  });

  it('should sort Desc', () => {
    component.searchText = 'de'
    component.filterData();
    expect(component.filteredAlbums.length).toEqual(2)
  });

  it('should load 6 more results when scrolled', () => {
    component.onScrollDown();
    expect(component.filteredAlbums.length).toEqual(12)
    expect((component as any).currentPosition).toEqual(12)
  });
});
