# 🌟 Nabin's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my project## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for custom configurations:

```env
# Optional: Google Analytics ID
REACT_APP_GA_ID=your_ga_id_here

# Optional: Contact form endpoint
REACT_APP_CONTACT_ENDPOINT=your_endpoint_here
```

### Tailwind CSS Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette for consistent theming
- Responsive breakpoints for optimal layouts
- Custom animations and transitions
- Dark mode support with class strategy

### PWA Configuration
The app is configured as a PWA with:
- Offline functionality via service workers
- App-like experience when installed
- Fast loading with strategic caching
- Cross-platform compatibility

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using the `gh-pages` package. The deployment process:

1. **Automatic Build**: Production build is created with optimizations
2. **Asset Optimization**: Images and code are compressed and optimized  
3. **GitHub Pages Deploy**: Built files are pushed to `gh-pages` branch
4. **Live Update**: Changes go live at [https://nabin216.github.io/Nabin](https://nabin216.github.io/Nabin)

### Manual Deployment
```bash
# Build and deploy in one command
npm run deploy

# Or step by step
npm run build
npx gh-pages -d build
```

## 🔍 SEO Optimizations, research, experience, and skills as a software developer, cybersecurity researcher, and AI enthusiast.

🔗 **Live Site**: [https://nabin216.github.io/Nabin](https://nabin216.github.io/Nabin)

![Portfolio Screenshot](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=react)
![Build Status](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?style=for-the-badge&logo=github)

## 🌟 Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing in any environment
- **SEO Optimized**: Structured data, meta tags, and optimized content for better search engine visibility
- **PWA Support**: Installable as a Progressive Web App with offline capabilities
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets for fast loading
- **Accessibility**: WCAG compliant with proper semantic HTML for all users
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Easy way for visitors to get in touch
- **AI Chatbot**: Interactive chatbot to answer visitor questions about my experience and skills

## 🎯 About Me

I'm a passionate B.Tech Computer Science & Engineering student at Koneru Lakshmaiah Education Foundation University with a strong focus on:

- **Cybersecurity** (90% proficiency) - Threat detection and mitigation strategies
- **Blockchain Development** (85% proficiency) - Secure certificate validation systems  
- **Full-Stack Development** (95% proficiency) - Modern web applications
- **Machine Learning** (80% proficiency) - AI applications in security
- **Cloud Computing** (75% proficiency) - Scalable infrastructure solutions

### 🏆 Key Achievements
- 🥈 **2nd Position** in Kavach National Hackathon (Ministry of Home Affairs, India - Nov 2023)
- 🎓 **Study in India Scholarship** - Fully funded scholarship for academic excellence (2021-2025)
- 📚 **Technical Coordinator** - Winter School on Speech and Audio Processing (Nov 2024)
- 🎯 **CGPA**: 8.99/10 (3.60/4.0)

## 🚀 Technologies Used

## 🚀 Technologies Used

### Core Technologies
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animation**: Framer Motion for smooth transitions and animations
- **Icons**: React Icons, Heroicons for beautiful UI elements
- **Routing**: React Router v7 with HashRouter for GitHub Pages compatibility
- **SEO**: React Helmet Async, Structured Data for better search engine visibility

### Development & Build Tools
- **Build Tool**: Create React App with custom configurations
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **TypeScript**: Type-safe development with strict configurations
- **ESLint**: Code quality and consistency enforcement
- **Sharp**: Image optimization for better performance

### Deployment & Performance
- **Hosting**: GitHub Pages with automated deployment
- **PWA**: Service Workers, Workbox for offline capabilities
- **Performance**: Lazy Loading, Code Splitting for optimal loading times
- **Analytics**: Google Analytics integration for visitor insights

## 📋 Pages

- **Home**: Introduction and overview of my skills and expertise
- **About**: Detailed information about my education, technical skills, research interests, and achievements
- **Projects**: Showcase of my projects including blockchain applications, cybersecurity tools, and web development
- **Research**: My research work and publications in cybersecurity and blockchain
- **Experience**: Professional experience, internships, and skills
- **Contact**: Contact form and information to reach out to me

## 🛠️ Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nabin216/Nabin.git
   cd Nabin/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Builds and deploys to GitHub Pages |
| `npm test` | Launches the test runner |
| `npm run generate-icons` | Generates PWA icons |

## � Project Structure

```
portfolio/
├── public/                 # Static assets and PWA files
│   ├── index.html         # Main HTML template
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # Search engine directives
│   └── sitemap.xml        # Site structure for SEO
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── sections/      # Page sections (About, Hero, etc.)
│   │   └── ui/            # UI elements (buttons, forms)
│   ├── pages/             # Route components
│   ├── styles/            # Global styles and Tailwind config
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and helpers
│   └── context/           # React context providers
├── build/                 # Production build output
└── scripts/               # Build and deployment scripts
```

## �🔍 SEO Optimizations

- **Meta Tags**: Comprehensive meta tags for better search engine indexing
- **Structured Data**: JSON-LD for rich search results and better visibility
- **Sitemap**: XML sitemap for search engine crawling with all important pages
- **Robots.txt**: Directives for search engine crawlers with proper sitemap reference
- **Performance**: Optimized for Core Web Vitals with fast loading times
- **Mobile Friendly**: Responsive design for all devices and screen sizes
- **Google Search Console**: Verified and configured for monitoring search performance

## 📱 PWA Features

- **Offline Support**: Works without an internet connection
- **Installable**: Can be installed on devices as a standalone app
- **Fast Loading**: Caches assets for quick loading and better user experience
- **Responsive**: Adapts to different screen sizes and orientations

## 🎨 Design Features

- **Dark/Light Mode**: Toggle between themes based on user preference
- **Responsive Layout**: Adapts to different screen sizes using Tailwind's responsive classes
- **Animations**: Smooth transitions and animations using Framer Motion
- **Accessibility**: High contrast colors and proper semantic HTML
- **Modern UI**: Clean, modern design with attention to typography and spacing

## 🧩 Components

- **Layout**: Main layout component with navbar, footer, and content area
- **Hero**: Eye-catching introduction section with animated elements
- **Projects**: Grid layout of projects with filtering capability
- **Experience**: Timeline of professional experience
- **Research**: Showcase of research papers and publications
- **Contact**: Contact form with validation and submission handling
- **AIChatbot**: Interactive chatbot to answer visitor questions
- **LazyImage**: Component for lazy loading images for better performance

## 🔒 Security Features

- **Form Validation**: Client-side validation for contact form
- **Content Security**: Proper headers and secure connections
- **External Links**: All external links open in new tabs with proper rel attributes

## 📊 Analytics and Monitoring

- **Google Analytics**: Integration for tracking visitor behavior
- **Google Search Console**: Monitoring search performance and indexing
- **Error Logging**: Console error tracking for debugging

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements! Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Areas for Contribution
- Performance optimizations
- Accessibility improvements
- UI/UX enhancements
- Bug fixes and testing
- Documentation improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out if you have any questions or suggestions:

- **Email**: [asadurzamannabin@gmail.com](mailto:asadurzamannabin@gmail.com)
- **GitHub**: [@nabin216](https://github.com/nabin216)
- **LinkedIn**: [Asadur Zaman Nabin](https://www.linkedin.com/in/asadur-zaman-nabin-a2a5a9217/)
- **Portfolio**: [https://nabin216.github.io/Nabin](https://nabin216.github.io/Nabin)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth animations
- **Vercel** for inspiration on modern web design
- **GitHub** for free hosting via GitHub Pages

---

⭐ **Don't forget to star this repository if you found it useful!** ⭐

Built with ❤️ by [Nabin](https://github.com/nabin216)
