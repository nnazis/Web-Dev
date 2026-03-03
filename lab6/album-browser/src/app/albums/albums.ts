import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = false;
  error = '';

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
) {}

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.fetchAlbums();
    })
  }

  fetchAlbums(): void {
    this.loading = true;

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
      },
    });
  }

  deleteAlbum(album: Album): void {
    if (!confirm(`Are you sure you want to delete album "${album.title}"?`)) return;

    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== album.id);
      },
      error: () => alert('Failed to delete album.'),
    });
  }
}