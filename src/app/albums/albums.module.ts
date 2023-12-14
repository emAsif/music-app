import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: 'album-details', component: AlbumDetailsComponent },
];

@NgModule({
  declarations: [
    AlbumsListComponent,
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    FormsModule,
  ]
})
export class AlbumsModule {}
