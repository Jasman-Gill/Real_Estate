🏠 Real_Estate — Angular Real Estate Listings Demo

A modern, single-page Angular application for displaying real estate properties with live location mapping. Users can search, filter, and explore properties from a curated in-memory dataset — all visualized using a Leaflet map with interactive markers.
This project demonstrates frontend UI, data handling, and third-party library integration in Angular 20.


🧾 Overview

This project is a demo of a real estate landing page built using Angular 20 with standalone components. It uses a local in-memory dataset, rendered in a dynamic UI with list-based viewing and Leaflet map markers.

🗺️ The dataset contains example properties in Jalandhar, Punjab (India) and is provided by PropertyService.

The app is fully responsive and formatted to Indian locale (en-IN) for currency and number formatting.

✨ Features

🔍 Search and filter properties by title, type (house/villa/apartment), or address

🏘️ Property cards with essential details (bedrooms, bathrooms, etc.)

📍 Leaflet map integration with live markers and popups

📌 Clicking on a property or marker syncs the selection on map and list

🇮🇳 Locale-aware formatting for currency (₹) and numbers

🤏 Designed for frontend prototyping and learning with Angular

🧰 Tech Stack & Dependencies

Frontend: Angular 20

UI: Angular Bindings + CSS

Mapping: Leaflet (leaflet + @types/leaflet)

Locale Support: registerLocaleData (for en-IN)

Testing: Karma + Jasmine (default Angular setup)

🛠 Prerequisites

Node.js (LTS recommended, tested on Node 18+)

npm or another package manager

Angular CLI (optional): 
```bash
npm install -g @angular/cli
```

🚀 Quick Start

Clone the repository:
```bash
git clone <repo-url>
cd Real_Estate
```


Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm start
```

Open your browser at http://localhost:4200
.
The app will reload automatically with any file changes.

📜 Available npm Scripts
Command	Description
npm start	Run the development server (ng serve)
npm run build	Build the project for production
npm run watch	Build continuously in watch mode
npm test	Run unit tests with Karma + Jasmine
🧬 Data Model

The data model is defined in src/app/models/property.model.ts:
```bash
export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'villa' | 'apartment';
  lat: number;
  lng: number;
}
```


The dataset is currently hard-coded inside PropertyService.
Add, remove, or modify sample listings in src/app/services/property.service.ts.

🧠 How the App Works

The main logic lives in AppComponent (standalone)

On initialization, the component:

Fetches property data via PropertyService

Sets up filteredProperties and default map view

Filtering works via:

applyFilters() which applies search + type filter

Syncs filtered results with markers on the map

Searching is two-way bound with [(ngModel)]

Leaflet map is initialized in initMap() with tiles from OpenStreetMap

Markers are refreshed every time filters are applied
```bash
📁 Project Structure (Key Files)
src/
 ├── app/
 │    ├── app.component.ts     # Main Component with logic and map code
 │    ├── app.component.html   # Template with property list and search
 │    ├── app.component.css    # Component styles
 │    ├── models/property.model.ts  # Data interface
 │    └── services/property.service.ts  # Mock data service
 ├── main.ts                   # Angular bootstrap entry
 ├── index.html                # Root HTML
 └── styles.css                # Global styles
```

📝 Development Notes

Leaflet CSS must be included from node_modules/leaflet/dist/leaflet.css
(configured under styles in angular.json)

Marker icons are loaded via CDN (configured in app.component.ts)

You can replace the mock service with a backend API later

Built using standalone components (no NgModules)

🧪 Testing

Run unit tests with:
```bash
npm test
```

Tests are configured using Jasmine + Karma (default Angular setup).

🤝 Contributing

Feel free to fork and contribute. Suggested workflow:
```bash
git checkout -b feat/<feature-name>
# Make your changes
git commit -m "feat: add <something>"
git push origin feat/<feature-name>
# Then create a pull request
```

📜 License & Contact

This project does not include a license.
To make it open-source, consider adding a LICENSE (e.g., MIT).

For questions or suggestions, raise an issue or get in touch via GitHub.
