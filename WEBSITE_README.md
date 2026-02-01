# Professional Portfolio Website

A custom-built professional portfolio website converted from a Notion page, showcasing projects, experience, skills, and achievements.

## Project Structure

```
Portfolio/
├── src/
│   ├── index.html        # Main HTML file with semantic structure
│   ├── styles.css        # Complete styling with responsive design
│   └── script.js         # Interactive functionality and animations
├── html/                 # Original Notion export HTML files
├── css/                  # Original Notion export stylesheets
├── js/                   # Original Notion export scripts
├── assets/               # Images and brand logos
└── README.md            # This file
```

## Features

✅ **Responsive Design** - Mobile-first approach with breakpoints for tablets and desktops
✅ **Smooth Navigation** - Sticky navigation with smooth scroll behavior
✅ **Tab-based Skills** - Interactive skill tabs (Software, Strategy, Analytics)
✅ **Timeline Experience** - Visual timeline for work experience
✅ **Animations** - Fade-in animations on scroll for visual appeal
✅ **Lazy Loading** - Image lazy loading for better performance
✅ **Modern UI** - Gradient accents and hover effects
✅ **Accessibility** - Semantic HTML and proper contrast ratios

## Sections

### 1. **About Me**
- Profile introduction with avatar
- Professional summary
- Contact information (email, LinkedIn, resume)
- Key statistics (internships, projects, GPA)

### 2. **Achievements**
- RISE Scholarship 2024
- Presidential Scholarship
- Economics Award
- Machine Learning Certificate

### 3. **Skills**
- Interactive tabs for different skill categories:
  - **Software**: SQL, PostgreSQL, MySQL, BigQuery, Python, R, Tableau, Excel
  - **Strategy**: Market Research, Business Strategy, Pricing
  - **Data Analysis**: Statistical Analysis, Visualization, Modeling

### 4. **Experience**
- 6 internships listed with details:
  - The New York Times (Advertising Analytics)
  - Voith Group (Data Analytics)
  - Nature At The Confluence (Data Intern)
  - Beloit College (Research Analyst)
  - Laughlin Constable (Strategy)
  - VIoT Group (Business Development)

### 5. **Brands**
- Client logos and brands worked with during internships

### 6. **Contact & Links**
- Email, LinkedIn, Resume links
- Footer with additional navigation

## Colors & Design System

### Color Palette
```css
--primary-color: #2563eb (Blue)
--secondary-color: #1e40af (Dark Blue)
--accent-color: #f59e0b (Amber)
--text-dark: #1f2937 (Dark Gray)
--text-light: #6b7280 (Light Gray)
--bg-light: #f9fafb (Light Background)
--bg-white: #ffffff (White)
```

### Typography
- Primary Font: System fonts (Apple System, Segoe UI, Roboto)
- Base Font Size: 16px
- Line Height: 1.6

### Spacing
- Standard margin/padding increments: 0.5rem, 1rem, 1.5rem, 2rem, 4rem

## JavaScript Functionality

### Core Features
1. **Smooth Scrolling** - Navigation links scroll smoothly to sections
2. **Tab Switching** - Click tabs to switch between different skill categories
3. **Intersection Observer** - Animates elements when they come into view
4. **Scroll-based Navbar** - Updates shadow on scroll
5. **Lazy Image Loading** - Loads images only when needed

### Event Listeners
- Click events for navigation and tabs
- Scroll events for dynamic navbar styling
- IntersectionObserver for animations and lazy loading

## CSS Classes & Structure

### Main Sections
- `.navbar` - Fixed top navigation
- `.about-section` - Hero section with profile
- `.achievements-section` - Awards and recognitions
- `.skills-section` - Interactive skill display
- `.experience-section` - Timeline of work experience
- `.brands-section` - Client logos
- `.footer` - Bottom navigation

### Responsive Breakpoints
```css
Mobile: max-width 480px
Tablet: max-width 768px
Desktop: 768px and above
```

## How to Use

1. **Local Development**
   ```bash
   # Open in a simple HTTP server (Python 3)
   python -m http.server 8000
   
   # Or use any other local server
   ```

2. **View in Browser**
   - Navigate to `http://localhost:8000/src/index.html`

3. **Customization**
   - Update content in `index.html`
   - Modify colors in `styles.css` `:root` variables
   - Add custom logic in `script.js`

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- CSS Grid and Flexbox for efficient layouts
- Lazy loading for images
- Smooth animations with GPU acceleration
- Optimized font loading with system fonts
- Minimal JavaScript for better performance

## Future Enhancements

- [ ] Add dark mode toggle
- [ ] Create blog section for articles
- [ ] Add portfolio project showcase
- [ ] Implement contact form
- [ ] Add testimonials section
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Social media integration

## License

© 2024 Hien Bach. All rights reserved.

## Contact

- **Email**: btmhien1610@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **Portfolio**: [Your Website]

---

**Created by**: GitHub Copilot
**Date**: February 2024
**Version**: 1.0.0
