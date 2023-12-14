import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumsService } from '../../services/albums/albums.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const activatedRouteMock = {
  queryParamMap: of({
    get: (id: string) => '1713154528',
    id: '1713154518'
  })
};

const mockTracks = {
  resultCount: 34,
  results: [
    {
      collectionId: 1713154518,
      artistName: "The Beatles",
      wrapperType: "track",
      kind: "song",
      trackName: "The Beatles",
      collectionName: "The Beatles 1967–1970 (2023 Edition) [The Blue Album]",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154559,
      artistName: "The Beatles",
      wrapperType: "audio",
      trackName: "The Beatles",
      collectionName: "The Beatles 1967–1970 (2023 Edition) [The Blue Album]",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154528,
      artistName: "The Beatles",
      wrapperType: "track",
      trackName: "The Beatles",
      collectionName: "The Beatles 1967–1970 (2023 Edition) [The Blue Album]",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154528,
      artistName: "The Beatles",
      trackName: "The Beatles",
      wrapperType: "track",
      collectionName: "The Beatles 1967–1970 (2023 Edition) [The Blue Album]",
      artworkUrl100: "https://is1-ssl.jpg",
    },
    {
      collectionId: 1713154528,
      artistName: "The Beatles",
      trackName: "The Beatles",
      wrapperType: "track",
      collectionName: "The Beatles 1967–1970 (2023 Edition) [The Blue Album]",
      artworkUrl100: "https://is1-ssl.jpg",
    }
  ]
}

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;
  let mockAlbumsServiceSpy = jasmine.createSpyObj('AlbumsService', ['getAlbums']);
  mockAlbumsServiceSpy.getAlbums.and.returnValue(of(mockTracks));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AlbumsService, useValue: mockAlbumsServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        }
      ]
    });
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load album details', () => {
    component.tracks$.subscribe(albums => {
      albums.forEach(album => {
        expect(album.collectionId).toEqual(1713154528);
        expect(album.artistName).toEqual('The Beatles');
        expect(album.wrapperType).toEqual('track');
      })
    })
  });
});
