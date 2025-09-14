# Globalwebix Frontend

This is the frontend application for the Globalwebix project. It is built using React, Vite, and Tailwind CSS, and provides a modern, responsive user interface for the platform.

## Project Structure

```
frontend/
├── public/                # Static assets (images, logos, etc.)
├── src/
│   ├── assets/            # Images, SVGs, and other media
│   ├── components/        # Reusable React components
│   ├── pages/             # Page-level React components
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   ├── App.css, index.css # Global styles
│   └── tailwind.config.js # Tailwind CSS configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
	```bash
	git clone <repo-url>
	cd Globalwebix/frontend
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Features
- Modern React (with hooks and functional components)
- Vite for fast development and builds
- Tailwind CSS for utility-first styling
- Organized folder structure for scalability
- Responsive design and reusable UI components

## Folder Details
- **assets/**: Images, SVGs, and other static resources
- **components/**: UI components like Header, Footer, HeroSection, etc.
- **pages/**: Page-level components (expand as needed)

## Customization
- Update `tailwind.config.js` to customize Tailwind settings
- Add or modify components in `src/components/`
- Place new images or SVGs in `src/assets/`

## License

This project is for demonstration and internal use. Please contact the maintainer for licensing details.

## Maintainer
- [Pratik Mandge](mailto:pratikmandgebussiness@gmail.com)
