import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  /** List of albums fetched from the API. */
  albums: Album[] = [];
  /** Whether the data is currently being loaded. */
  loading = false;
  /** Error message if the request fails. */
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  /**
   * Fetch the list of albums from the API.
   */
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

  /**
   * Delete an album and remove it from the list when the API call succeeds.
   *
   * @param album The album to delete.
   */
  deleteAlbum(album: Album): void {
    if (!confirm(`Are you sure you want to delete album "${album.title}"?`)) {
      return;
    }
    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== album.id);
      },
      error: () => {
        alert('Failed to delete album.');
      },
    });
  }
}