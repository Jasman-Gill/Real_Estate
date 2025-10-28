import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});
import { Property } from './models/property.model';
import { PropertyService } from './services/property.service';
import localeEnIN from '@angular/common/locales/en-IN';

registerLocaleData(localeEnIN, 'en-IN');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'en-IN' }],
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
    this.map = L.map('map').setView([31.3260, 75.5762], 12);
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
        .bindPopup(`<strong>${property.title}</strong><br>${property.address}<br><strong>₹${property.price.toLocaleString('en-IN')}</strong>`)
        .addTo(this.map);
      (marker as any).propertyId = property.id;

      marker.on('click', () => {
        this.selectedProperty = property;
      });
      this.markers.push(marker);
    });
  }
}
