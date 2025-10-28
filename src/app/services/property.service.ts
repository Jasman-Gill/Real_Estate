import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
    private properties: Property[] = [
        { id: 1, title: 'Modern Downtown Apartment', address: '123 Main St, New York, NY', price: 850000, bedrooms: 2, bathrooms: 2, sqft: 1200, type: 'apartment', lat: 40.7580, lng: -73.9855 },
        { id: 2, title: 'Luxury Suburban House', address: '456 Oak Ave, Brooklyn, NY', price: 1250000, bedrooms: 4, bathrooms: 3, sqft: 2800, type: 'house', lat: 40.6782, lng: -73.9442 },
        { id: 3, title: 'Beachfront Villa', address: '789 Beach Rd, Queens, NY', price: 2100000, bedrooms: 5, bathrooms: 4, sqft: 3500, type: 'villa', lat: 40.7282, lng: -73.7949 },
        { id: 4, title: 'Cozy Studio Apartment', address: '321 Park Pl, Manhattan, NY', price: 525000, bedrooms: 1, bathrooms: 1, sqft: 650, type: 'apartment', lat: 40.7589, lng: -73.9851 },
        { id: 5, title: 'Family House with Garden', address: '654 Green St, Bronx, NY', price: 975000, bedrooms: 3, bathrooms: 2, sqft: 2100, type: 'house', lat: 40.8448, lng: -73.8648 }
    ];

    getProperties() {
        return this.properties;
    }
}
