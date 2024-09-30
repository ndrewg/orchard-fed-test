# Orchard FED Test Project

## Description

Assessment for Frontend Developer position at Filta Global

## Technologies Used

- HTML (Pug templating)
- CSS (SCSS for styling)
- JavaScript (ES6+)
- Vite (Build tool)
- Vituum (Vite plugin)
- ESLint (JavaScript linting)
- Stylelint (SCSS linting)
- Prettier (Code formatting)

## Project Structure

The project follows a modular structure:

- `src/`: Source files
  - `pages/`: Pug templates for pages
  - `layouts/`: Pug layouts
  - `components/`: Reusable Pug components
  - `styles/`: SCSS files
    - `components/`: Component-specific styles
    - `elements/`: Basic element styles
    - `tools/`: SCSS mixins and functions
    - `settings/`: SCSS variables and settings
  - `index.js`: Main JavaScript file

## Features

1. Responsive design using custom media query mixins
2. Image gallery with modal view
3. Modular SCSS architecture
4. Pug templating for HTML structure

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the development server:
   ```bash
   yarn dev
   ```
4. Build for production:
   ```bash
   yarn build
   ```

## Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn preview`: Preview production build
- `yarn lint:js`: Lint JavaScript files
- `yarn lint:scss`: Lint SCSS files
- `yarn lint:scss:fix`: Lint and fix SCSS files
- `yarn format`: Format all files with Prettier
- `yarn lint`: Run all linting scripts

## Linting and Formatting

This project uses ESLint for JavaScript linting, Stylelint for SCSS linting, and Prettier for code formatting. Configuration files are included in the project root.

## Browser Compatibility

The project is designed to be compatible with modern browsers. Specific browser support can be added to this section based on project requirements.

