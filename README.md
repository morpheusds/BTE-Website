# BTE International Website

A beautiful, fully mobile responsive React website for BTE International - a leading supplier of nature identical flavours, premium fruits, and authentic herbs to the B2B industry.

## Features

- **Modern & Slick Design**: Professional UI with smooth animations and transitions
- **Fully Mobile Responsive**: Optimized for all screen sizes and devices
- **Animated Natural Elements**: Beautiful floating leaves and herbs throughout the site
- **Smooth Scrolling**: Elegant navigation with smooth scroll behavior
- **Interactive Components**: Hover effects, form validation, and dynamic content
- **Performance Optimized**: Built with Vite for fast loading and optimal performance

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Production-ready motion library for React
- **React Icons**: Popular icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BTE-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
BTE-Website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Values.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingElements.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Sections

1. **Hero**: Eye-catching landing section with call-to-action buttons
2. **About**: Company overview with key features and statistics
3. **Products**: Detailed product categories with hover animations
4. **Values**: Core values and certifications
5. **Contact**: Contact form and information
6. **Footer**: Links, social media, and company details

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- Primary green colors for nature/organic theme
- Natural stone colors for text and backgrounds

### Content

Update the content in each component file to match your specific requirements:
- Company information in `About.jsx`
- Product details in `Products.jsx`
- Contact information in `Contact.jsx` and `Footer.jsx`

## License

© 2025 BTE International. All rights reserved.
