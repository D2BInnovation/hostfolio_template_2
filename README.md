# Student Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations using Framer Motion and a clean, professional design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions and micro-interactions using Framer Motion
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for easy maintenance
- **Data-Driven**: All content managed through a single JSON file
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## Sections

- **Hero**: Eye-catching introduction with profile image and social links
- **About**: Personal information, skills, education, and achievements
- **Projects**: Showcase of featured and other projects with filtering
- **Contact**: Contact form and social media links
- **Footer**: Additional links and information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the `src/data.json` file to update:
- Personal information (name, title, description)
- Skills and technologies
- Education details
- Project information
- Contact details
- Social media links

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify colors in `tailwind.config.js`
- Add custom animations and components
- Update the overall theme

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update the navigation in `src/components/Navbar.tsx`

## Technologies Used

- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data.json           # All content data
├── App.tsx             # Main app component
├── main.tsx            # App entry point
├── index.css           # Global styles
└── App.css             # Component styles
```

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!