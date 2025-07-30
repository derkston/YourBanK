# YourBanK - Banking Application

YourBanK is a modern banking application built with React, TypeScript, and Vite. It provides a comprehensive banking solution with user authentication, account management, and financial services.

## 🚀 Live Demo

Visit the live application: [YourBanK on GitHub Pages](https://derkston.github.io/YourBanK)

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **GitHub Pages** - Hosting and deployment

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── context/        # React Context for state management
│   ├── footer/         # Footer component
│   ├── header/         # Header component
│   ├── sections/       # Page sections
│   ├── ui/            # UI components (login, register, navbar)
│   └── container/     # Layout components
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── routes/            # Routing configuration
├── utils/             # Utility functions
└── App.tsx           # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/derkston/YourBanK.git
cd YourBanK
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

To build the application for production:

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every push to the main branch triggers a new deployment.

## 🔧 Configuration

### Vite Configuration

The project is configured with:
- Base URL for GitHub Pages: `/YourBanK/`
- React SWC plugin for fast refresh
- TypeScript support

### GitHub Pages

- Repository: https://github.com/derkston/YourBanK
- Live URL: https://derkston.github.io/YourBanK
- Branch: `gh-pages` (automatically generated)

## 📝 Features

- **User Authentication**: Login and registration system
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and professional banking interface
- **Type Safety**: Full TypeScript support
- **Fast Performance**: Optimized with Vite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Stepa Arkadevich**
- GitHub: [@derkston](https://github.com/derkston)
- Email: stepaarkadevich2019@gmail.com
