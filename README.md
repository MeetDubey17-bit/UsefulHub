# UsefulHub - Find Useful Websites

A React-based web application to discover and suggest curated productivity tools and websites.

## Features

- ✅ **Search Functionality**: Search websites by name or description
- ✅ **Filter by Category**: Filter websites by categories (All, Tech, Study, AI)
- ✅ **Clickable Cards**: Click on any website card to open it in a new tab
- ✅ **Suggest Website Form**: Add new websites with name, link, and category
- ✅ **Dark Mode**: Toggle between light and dark themes
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ✅ **Success Messages**: Get instant feedback when adding new websites

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd UsefulHub
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
UsefulHub/
├── src/
│   ├── App.jsx           # Main React component
│   ├── App.css           # Styling
│   └── index.jsx         # React entry point
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## How to Use

1. **Search**: Type in the search bar to find websites
2. **Filter**: Click on category buttons to filter results
3. **Visit**: Click on any website card to open it
4. **Suggest**: Fill out the form to suggest a new website
5. **Toggle Theme**: Click the sun/moon icon in the top-right corner

## Technologies Used

- React 18
- Vite
- CSS3 (Flexbox, Grid, Animations)
- JavaScript ES6+

## Default Websites

- **ChatGPT** (AI) - AI assistant
- **GeeksforGeeks** (Study) - Learn coding
- **Canva** (Tech) - Create designs

## License

MIT
