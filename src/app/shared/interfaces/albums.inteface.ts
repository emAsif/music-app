export interface IAlbums {
  resultCount: number;
  results: IAlbum[];
}

export interface ITrack {
  resultCount: number;
  results: ITracks[];
}

export interface IAlbum extends  ITracksInfo {
  collectionType: string;
  amgArtistId?: number | null;
  copyright: string;
}

export interface ITracks extends ITracksInfo {
  kind: string;
  trackId: number;
  trackName: string;
  trackCensoredName: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  trackPrice: number;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackNumber: number;
  trackTimeMillis: number;
  isStreamable: boolean;
}

interface ITracksInfo {
  wrapperType: string;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
}

