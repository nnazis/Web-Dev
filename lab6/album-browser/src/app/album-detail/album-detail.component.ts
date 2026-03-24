import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  /** The album currently loaded, if any. */
  album?: Album;
  /** Loading indicator for API calls. */
  loading = false;
  /** Error message when a fetch fails. */
  error = '';
  /** Two-way bound input for the album title. */
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : NaN;
    if (!isNaN(id)) {
      this.loadAlbum(id);
    }
  }

  /**
   * Load the album details from the server.
   *
   * @param id The album id.
   */
  loadAlbum(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.loading = false;
      },
    });
  }

  /**
   * Save the updated album title back to the server.  The API returns the
   * updated album which we then use to update the UI.  JSONPlaceholder does not
   * persist the change, so we simply update the local state.
   */
  save(): void {
    if (!this.album) {
      return;
    }
    const updated: Album = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (album) => {
        this.album = album;
        alert('Album title saved.');
      },
      error: () => {
        alert('Failed to save album.');
      },
    });
  }

  /**
   * Navigate back to the previous page.  Equivalent to history.back().
   */
  goBack(): void {
    this.location.back();
  }
}