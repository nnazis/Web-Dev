import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  /** List of photos for the current album. */
  photos: Photo[] = [];
  /** Loading indicator. */
  loading = false;
  /** Error message. */
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : NaN;
    if (!isNaN(id)) {
      this.fetchPhotos(id);
    }
  }

  /**
   * Fetch photos for the given album id from the API.
   *
   * @param id The album id.
   */
  fetchPhotos(id: number): void {
    this.loading = true;
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      },
    });
  }

  /** Navigate back to the previous page. */
  goBack(): void {
    this.location.back();
  }
}