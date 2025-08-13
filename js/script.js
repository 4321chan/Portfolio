// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    observer.observe(skillsSection);
}

// Project modal functionality
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Project data
    const projectData = {
        project1: {
            title: 'Karangahape Station - City Rail Link',
            description: 'Major underground transit infrastructure project in New Zealand featuring complex MEP coordination for urban rail development with integrated station systems.',
            details: [
                'Underground station design and MEP coordination',
                'Complex transit infrastructure modeling',
                'Integration with existing urban infrastructure',
                'Passenger circulation and safety systems',
                'Electrical and communications systems coordination',
                'Ventilation and fire safety systems',
                'Multi-disciplinary coordination across international teams'
            ],
            technologies: ['Revit MEP', 'Navisworks', 'AutoCAD', 'BIM 360', 'Clash Detection'],
            images: [
                'images/project1-1.jpg',
                'images/project1-2.jpg',
                'images/project1-3.jpg'
            ]
        },
        project2: {
            title: 'Bulim Square Industrial Development',
            description: 'S$570+ million multi-user industrial complex with 4 blocks, elevated mobility deck, underground road network, and integrated data center.',
            details: [
                'Multi-block industrial development (6-storey & 5-storey)',
                'Elevated mobility deck design and coordination',
                'Underground road network modeling',
                'Data center MEP systems design',
                'Multi-user industrial facility coordination',
                'Commercial spaces integration on Level 2',
                'Complex basement parking and electrical substation',
                'Project value exceeding S$570 million'
            ],
            technologies: ['Revit Architecture', 'Revit MEP', 'Civil 3D', 'Navisworks', 'BIM 360'],
            images: [
                'images/project2-1.jpg',
                'images/project2-2.jpg',
                'images/project2-3.jpg'
            ]
        },
        project3: {
            title: 'Yishun Public Housing Development',
            description: 'S$160+ million HDB project comprising 12 blocks of 15-storey residential buildings (1,693 units) with comprehensive community facilities.',
            details: [
                '12 blocks of 15-storey residential buildings',
                'Total 1,693 residential units',
                'Multi-storey carpark with electrical substation',
                'Precinct pavilions and social facilities',
                'Community spaces and amenities',
                'Comprehensive MEP systems for residential towers',
                'Public housing standards compliance',
                'Project value exceeding S$160 million'
            ],
            technologies: ['Revit Architecture', 'Revit MEP', 'Navisworks', 'AutoCAD', 'BIM Coordination'],
            images: [
                'images/project3-1.jpg',
                'images/project3-2.jpg',
                'images/project3-3.jpg'
            ]
        },
        project4: {
            title: 'Senja Nursing Home',
            description: 'S$170+ million integrated 12-storey healthcare facility combining polyclinic, nursing home, and senior care center with specialized MEP systems.',
            details: [
                '12-storey integrated healthcare facility',
                'Polyclinic and medical facilities',
                'Nursing home specialized systems',
                'Senior care center amenities',
                'Medical-grade MEP systems',
                'Healthcare compliance and standards',
                'Specialized ventilation and electrical systems',
                'Project value exceeding S$170 million'
            ],
            technologies: ['Revit MEP', 'Healthcare MEP Standards', 'Navisworks', 'Medical Systems', 'BIM 360'],
            images: [
                'images/project4-1.jpg',
                'images/project4-2.jpg',
                'images/project4-3.jpg'
            ]
        },
        project5: {
            title: 'Novartis Pharmaceutical Manufacturing',
            description: '9-storey pharmaceutical manufacturing facility expansion with specialized MEP systems for controlled environments and clean rooms.',
            details: [
                '9-storey pharmaceutical manufacturing expansion',
                'Clean room design and MEP coordination',
                'Controlled environment systems',
                'Precision manufacturing process support',
                'Pharmaceutical-grade utilities',
                'Contamination control systems',
                'Regulatory compliance for pharmaceutical manufacturing',
                'Specialized HVAC and process utilities'
            ],
            technologies: ['Revit MEP', 'Clean Room Systems', 'Process Utilities', 'Pharmaceutical Standards', 'Navisworks'],
            images: [
                'images/project5-1.jpg',
                'images/project5-2.jpg',
                'images/project5-3.jpg'
            ]
        },
        project6: {
            title: 'Woodleigh Residence',
            description: 'S$170+ million luxury condominium development with 6 blocks of 15-storey apartments featuring premium amenities and sustainable design.',
            details: [
                '6 blocks of 15-storey luxury apartments',
                'Premium amenities and facilities',
                'Landscape design integration',
                'Basement car park systems',
                'Swimming pool and recreational facilities',
                'Sustainable MEP systems design',
                'High-end residential standards',
                'Project value exceeding S$170 million'
            ],
            technologies: ['Revit Architecture', 'Revit MEP', 'Sustainable Design', 'Lumion', 'BIM Coordination'],
            images: [
                'images/project6-1.jpg',
                'images/project6-2.jpg',
                'images/project6-3.jpg'
            ]
        }
    };
    
    const project = projectData[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="project-modal-description">${project.description}</p>
            
            <div class="project-modal-images">
                ${project.images.map(img => `
                    <div class="modal-image-placeholder">
                        <i class="fas fa-image"></i>
                        <p>Project Image</p>
                    </div>
                `).join('')}
            </div>
            
            <h3>Project Details</h3>
            <ul class="project-details-list">
                ${project.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            
            <h3>Technologies Used</h3>
            <div class="modal-technologies">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        `;
        
        modal.style.display = 'block';
    }
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showAlert('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
        <span>${message}</span>
        <button class="alert-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add alert styles
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
    `;
    
    // Add alert to page
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .cert-card, .skill-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS for animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .alert-close {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0;
            margin-left: 1rem;
        }
        
        .project-modal-description {
            font-size: 1.1rem;
            color: #5a6c7d;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .project-modal-images {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .modal-image-placeholder {
            height: 150px;
            background: #f8f9fa;
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #6c757d;
        }
        
        .modal-image-placeholder i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .project-details-list {
            margin: 1rem 0 2rem 1.5rem;
        }
        
        .project-details-list li {
            margin-bottom: 0.5rem;
            color: #5a6c7d;
        }
        
        .modal-technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize animations
    animateSkillBars();
    initScrollAnimations();
});

// Parallax effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Typewriter effect for hero title - Disabled to preserve HTML formatting
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Simply add a fade-in animation instead of typewriter
        heroTitle.style.opacity = '0';
        heroTitle.style.animation = 'fadeIn 1s ease forwards';
        heroTitle.style.animationDelay = '0.5s';
    }
});

// Add loading screen
document.addEventListener('DOMContentLoaded', function() {
    // Create loading screen
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: #2c3e50;
    `;
    
    // Add spinner styles
    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #e9ecef;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinnerStyle);
    
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
});
