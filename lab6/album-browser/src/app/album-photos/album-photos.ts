import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.fetchPhotos(id);
      }
    });
  }

  fetchPhotos(id: number): void {
    this.loading = true;
    this.error = '';
    this.photos = [];

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        console.log('PHOTOS:', data);
        this.photos = data;
        this.loading = false;
      },
      error: (e) => {
        console.log(e);
        this.error = 'Failed to load photos';
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}