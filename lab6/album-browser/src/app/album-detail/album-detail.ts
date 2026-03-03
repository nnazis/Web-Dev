import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {

  album?: Album;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    if (!isNaN(id)) {
      this.loadAlbum(id);
    }
  });
}

  loadAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  save(): void {
    if (!this.album) return;

    const updated = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editedTitle;
      alert('Saved successfully');
    });
  }

  goBack(): void {
    this.location.back();
  }
}