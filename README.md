# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and TailwindCSS. Features smooth animations, dark mode support, and a fully responsive design.

## 🚀 Features

- **Modern Tech Stack**: React 19 + Vite + TailwindCSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**: Hover effects, smooth scrolling, and transitions
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Semantic HTML and proper meta tags

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **src/components/Home.jsx** - Name, title, bio, and social links
2. **src/components/About.jsx** - Bio, skills, and experience
3. **src/components/Projects.jsx** - Your projects and portfolio items
4. **src/components/Contact.jsx** - Contact information
5. **src/components/Footer.jsx** - Footer details and social links

### Styling
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update `src/index.css` to change typography
- **Animations**: Customize animations in individual components

### Images
Replace placeholder images in the Projects section with your actual project screenshots. You can:
- Add images to the `public` folder
- Use external image URLs
- Integrate with a CMS or image service

## 🌙 Dark Mode

The portfolio includes a built-in dark mode toggle that:
- Remembers user preference in localStorage
- Respects system preference on first visit
- Provides smooth transitions between themes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding!** 🎉