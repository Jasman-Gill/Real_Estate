import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
    private properties: Property[] = [
        {
            id: 1,
            title: '3BHK Elegant Home - Model Town',
            address: '12 Model Town, Jalandhar, Punjab',
            price: 8500000,
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1650,
            type: 'house',
            lat: 31.3321,
            lng: 75.5735
        },
        {
            id: 2,
            title: 'Luxury 4BHK Villa - Kartarpur Road',
            address: '45 Kartarpur Rd, Jalandhar, Punjab',
            price: 14500000,
            bedrooms: 4,
            bathrooms: 4,
            sqft: 3200,
            type: 'villa',
            lat: 31.2945,
            lng: 75.5897
        },
        {
            id: 3,
            title: 'Cozy 2BHK Apartment - Civil Lines',
            address: '7 Civil Lines, Jalandhar, Punjab',
            price: 4200000,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 980,
            type: 'apartment',
            lat: 31.3268,
            lng: 75.5760
        },
        {
            id: 4,
            title: 'Family House near Guru Nanak Nagar',
            address: '88 GN Nagar, Jalandhar, Punjab',
            price: 6800000,
            bedrooms: 3,
            bathrooms: 3,
            sqft: 1800,
            type: 'house',
            lat: 31.3390,
            lng: 75.5778
        },
        {
            id: 5,
            title: 'Modern Studio - Nayagaon',
            address: '22 Nayagaon, Jalandhar, Punjab',
            price: 2550000,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 550,
            type: 'apartment',
            lat: 31.3562,
            lng: 75.5601
        }
    ];

    getProperties() {
        return this.properties;
    }
}
