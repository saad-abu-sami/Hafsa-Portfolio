# Agricultural Portfolio Website

A professional, nature-inspired portfolio website built for an agricultural university student. This project uses React, Tailwind CSS, Material UI, and Framer Motion to deliver a modern, responsive, and animated user experience.

## 🏗 Architecture

- **Framework**: React (Vite) for fast development and optimized production builds.
- **Styling**: Tailwind CSS for utility-first styling and custom design tokens (colors, fonts).
- **Components**: Material UI (MUI) for accessible, pre-built components like Cards, Buttons, and TextFields.
- **Animations**: Framer Motion for complex animations (hero reveal, scroll effects) and CSS keyframes for simple effects (floating leaves).
- **Icons**: MUI Icons for consistent iconography.
- **Routing/Navigation**: Single-page smooth scrolling using `react-scroll`.

## 🚀 How to Run Locally

1.  **Install Dependencies**:
    Open your terminal in the project folder and run:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will start the server at `http://localhost:3000` (or similar).

## 📦 How to Build & Deploy

To create a production-ready static version of the website:

1.  **Build the Project**:
    ```bash
    npm run build
    ```
    This creates a `dist` folder containing the optimized files.

2.  **Open Locally (Static)**:
    - You can open the `dist/index.html` file directly in your browser.
    - Note: Some browsers restrict file access (CORS) for local files. If you see issues, use a simple static server:
      ```bash
      npx serve dist
      ```

## 🎨 Customization Guide

### 1. Personal Details
Edit the following files to update your information:
- **Name & Title**: `src/sections/Hero.jsx`
- **About Info**: `src/sections/About.jsx`
- **Skills**: `src/sections/Skills.jsx`
- **Projects**: `src/sections/Projects.jsx`
- **Experience**: `src/sections/Experience.jsx`
- **Social Links**: `src/components/Footer.jsx`

### 2. Images
- Replace placeholder images in `src/sections/Hero.jsx` (Profile) and `src/sections/Projects.jsx` (Project thumbnails).
- Place your images in the `public` folder or `src/assets` and reference them.

### 3. Colors
The color palette is defined in `tailwind.config.js`. You can change these hex codes to adjust the theme:

```javascript
colors: {
  primary: {
    DEFAULT: '#2E7D32', // Main Green
    light: '#4CAF50',
    dark: '#1B5E20',
  },
  secondary: {
    DEFAULT: '#81C784', // Light Green accent
  },
  earth: {
    DEFAULT: '#795548', // Brown/Soil
  },
  background: {
    DEFAULT: '#F1F8E9', // Very light green tint
  }
}
```

### 4. Fonts
The project uses **Inter** for body text and **Playfair Display** for headings.
- To change fonts, update the Google Fonts link in `index.html` and the `fontFamily` settings in `tailwind.config.js`.

## ✨ Animations

- **Fade In**: Elements fade in as you scroll (handled by Framer Motion `whileInView`).
- **Float**: Leaves in the Hero and Footer float gently using CSS keyframes defined in `tailwind.config.js`.
- **Hover Effects**: Cards lift up and cast shadows on hover.

## 🔍 SEO Settings

Update the meta tags in `index.html` for better search engine visibility:
- `<title>`: Your Name | Portfolio
- `<meta name="description">`: A brief summary of who you are and what you do.

## 🌿 Favicon

1. Create a 32x32px or 64x64px image (PNG or ICO).
2. Name it `leaf-icon.svg` (or `.png` / `.ico`).
3. Place it in the `public` folder.
4. Update the link in `index.html`: `<link rel="icon" ... />`.

---

**Enjoy your new portfolio!** 🌱
