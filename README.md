# BIM Portfolio Website

A professional portfolio website designed for Building Information Modeling (BIM) specialists and construction technology professionals. This responsive website showcases BIM skills, projects, certifications, and experience to potential employers.

## 🏗️ Features

- **Professional Design**: Clean, modern interface suitable for the architecture/engineering industry
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Skills Showcase**: Interactive skill bars highlighting BIM software proficiencies
- **Project Portfolio**: Detailed project cards with modal overlays for comprehensive case studies
- **Certifications Display**: Professional credentials and education showcase
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Engaging scroll animations and transitions
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript ES6+**: Interactive functionality and animations
- **Font Awesome**: Professional icons
- **Google Fonts**: Clean typography with Inter font family

## 📁 Project Structure

```
WebPofolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── images/                 # Image assets (placeholder structure)
├── projects/               # Project-specific assets
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🎯 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Placeholder for professional photo

### 2. About Me
- Professional background
- Key highlights and achievements
- Statistics and metrics

### 3. Technical Skills
- **BIM Software**: Revit, AutoCAD, Navisworks, Autodesk Civil 3D
- **Design & Visualization**: Lumion, Enscape, Twinmotion, Synchro 4D, Revizto
- **Project Management**: BIM 360, ACONEX
- **Technical Skills**: Clash Detection, 4D Simulation, 5D Costing, Dynamo Scripting, C# Programming, Python Programming
- **Technical Skills**: Clash Detection, 4D Simulation, 5D Costing, Dynamo Scripting

### 4. Featured Projects
- **Karangahape Station - City Rail Link** (New Zealand) - Major underground transit infrastructure
- **Bulim Square Industrial Development** (S$570M+, Singapore) - Multi-user industrial complex with data center
- **Yishun Public Housing Development** (S$160M+, Singapore) - 12 blocks, 1,693 units HDB project
- **Senja Nursing Home** (S$170M+, Singapore) - 12-storey integrated healthcare facility
- **Novartis Pharmaceutical Manufacturing** (Singapore) - 9-storey clean room manufacturing expansion
- **Woodleigh Residence** (S$170M+, Singapore) - 6 blocks luxury condominium development
- Detailed project modals with comprehensive case studies

### 5. Certifications
- Masters in Global BIM Management - Zigurat Global Institute of Technology, Spain (2023)
- Specialist Diploma in MEP Modularization - BCA Academy, Singapore (2019)
- Bachelor of Electrical Engineering - Mandalay Technological University, Myanmar (2012)
- BIM for MEP Coordination & Modeling - BCA Academy, Singapore (2023)
- Synchro 4D & Navisworks BIM Management Certification (2023)

### 6. Contact Information
- Contact form with validation
- Professional contact details
- Social media links

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content with your personal information

### Customization

#### Personal Information
Update the following sections with your details:
- Hero section title and description
- About section content
- Skills and proficiency levels
- Project details and images
- Certifications and education
- Contact information

#### Images
Replace placeholder content with your actual:
- Professional headshot
- Project screenshots and renderings
- Technical drawings
- Certification images

#### Colors and Styling
Modify the CSS variables in `style.css` to match your brand:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🔧 Features to Customize

### Skills Section
Update skill percentages and add/remove technologies:
```javascript
// In script.js, modify the skill data
const skills = {
  'Autodesk Revit': 95,
  'AutoCAD': 90,
  // Add your skills here
};
```

### Projects
Update project data in the `projectData` object in `script.js`:
```javascript
const projectData = {
  project1: {
    title: 'Your Project Title',
    description: 'Project description',
    // Add your project details
  }
};
```

### Contact Form
The contact form includes basic validation. For a fully functional form, integrate with:
- Email services (EmailJS, Formspree)
- Backend API
- Contact form services

## 🎨 Color Scheme

- **Primary Blue**: #3498db
- **Dark Blue**: #2c3e50
- **Light Gray**: #f8f9fa
- **Dark Gray**: #5a6c7d
- **Accent Red**: #e74c3c

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit suggestions for improvements
- Report any bugs or issues

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing this portfolio or have questions about BIM implementation, feel free to reach out!

---

**Note**: This portfolio template includes placeholder content and images. Replace all placeholder content with your actual professional information, projects, and images for the best results.

## 🎯 SEO Tips

1. Update the meta description with your specific skills and location
2. Add structured data markup for better search engine understanding
3. Optimize images with descriptive alt tags
4. Include relevant keywords in your content
5. Add Google Analytics for tracking (optional)

## 🔄 Future Enhancements

Potential improvements to consider:
- Blog section for industry insights
- Interactive 3D model viewer
- Project filtering and search functionality
- Multi-language support
- Dark mode toggle
- Performance optimization with lazy loading
