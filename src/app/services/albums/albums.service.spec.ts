import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get albums', () => {
    const currentEndpoint = '/api/?term=Beatles&entity=album';
    service.getAlbums('Beatles', 'album').subscribe();
    const req = httpTestingController.expectOne({ method: 'GET', url: currentEndpoint });
    expect(req.request.method).toEqual('GET');
  });

  it('should get tracks', () => {
    const currentEndpoint = '/api/?term=Beatles';
    service.getAlbums('Beatles').subscribe();
    const req = httpTestingController.expectOne({ method: 'GET', url: currentEndpoint });
    expect(req.request.method).toEqual('GET');
  });
});
