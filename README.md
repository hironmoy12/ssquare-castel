# LUXE Estate — Real Estate Web App

A premium luxury real estate web application built with **React + Vite**.

## Features

- **Home** — Hero section, featured properties, stats, testimonials, CTA
- **Properties** — Full listings with search, filter by type/status/price, and sort
- **Property Detail** — Image gallery, specs, features, agent contact form
- **About** — Company story, stats, team profiles
- **Contact** — Enquiry form with validation and success state
- React Router v6 for client-side navigation
- Fully responsive design (mobile, tablet, desktop)
- Luxury dark aesthetic with gold accents (Cormorant Garamond + DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── PropertyCard.jsx / .css
│   └── Footer.jsx / .css
├── pages/
│   ├── Home.jsx / .css
│   ├── Properties.jsx / .css
│   ├── PropertyDetail.jsx / .css
│   ├── About.jsx / .css
│   └── Contact.jsx / .css
├── data/
│   └── properties.js
├── App.jsx
├── main.jsx
└── index.css
```

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Lucide React (icons)
- Google Fonts (Cormorant Garamond, DM Sans)
