import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import { Property } from './models/property.model';
import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  selectedProperty!: Property;
  filterType = 'all';
  searchQuery = '';
  map!: L.Map;
  markers: L.Marker[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
    this.filteredProperties = [...this.properties];
    this.selectedProperty = this.properties[0];
    setTimeout(() => this.initMap(), 200);
  }

  setFilter(type: string) {
    this.filterType = type;
    this.applyFilters();
  }

  search() {
    this.applyFilters();
  }

  applyFilters() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProperties = this.properties.filter(p => {
      const matchType = this.filterType === 'all' || p.type === this.filterType;
      const matchSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query);
      return matchType && matchSearch;
    });
    this.updateMapMarkers();
  }

  selectProperty(property: Property) {
    this.selectedProperty = property;
    this.map.setView([property.lat, property.lng], 13);
    this.markers.forEach(marker => {
      if ((marker as any).propertyId === property.id) marker.openPopup();
    });
  }

  initMap() {
    this.map = L.map('map').setView([40.7589, -73.9851], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    this.updateMapMarkers();
  }

  updateMapMarkers() {
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    this.filteredProperties.forEach(property => {
      const marker = L.marker([property.lat, property.lng])
        .bindPopup(`<strong>${property.title}</strong><br>${property.address}<br><strong>$${property.price.toLocaleString()}</strong>`)
        .addTo(this.map);
      (marker as any).propertyId = property.id;

      marker.on('click', () => {
        this.selectedProperty = property;
      });
      this.markers.push(marker);
    });
  }
}
