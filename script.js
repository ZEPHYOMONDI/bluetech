// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ========== SMOOTH SCROLLING FOR NAVIGATION LINKS ==========
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link (optional, requires CSS class)
                updateActiveNavLink(targetId);
            }
        });
    });

    // Function to update active navigation link (if needed)
    function updateActiveNavLink(targetId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class for header background
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (optional)
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // ========== HERO SECTION PARALLAX EFFECT ==========
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        });
    }

    // ========== GALLERY PLACEHOLDER IMAGES (Dynamic Loading) ==========
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Sample image URLs (replace with actual image URLs)
    const galleryImages = [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80'
    ];

    // Load gallery images
    galleryItems.forEach((item, index) => {
        if (index < galleryImages.length) {
            item.innerHTML = '';
            const img = document.createElement('img');
            img.src = galleryImages[index];
            img.alt = `Gallery Image ${index + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '8px';
            item.appendChild(img);
            
            // Add click event for lightbox (optional)
            item.addEventListener('click', function() {
                openLightbox(galleryImages[index], `Image ${index + 1}`);
            });
        }
    });

    // ========== BLOG PLACEHOLDER IMAGES ==========
    const blogImages = document.querySelectorAll('.blog-image');
    const blogImageUrls = [
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80'
    ];

    blogImages.forEach((item, index) => {
        if (index < blogImageUrls.length) {
            item.innerHTML = '';
            const img = document.createElement('img');
            img.src = blogImageUrls[index];
            img.alt = `Blog Post ${index + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            item.appendChild(img);
        }
    });

    testimonialImages.forEach((item, index) => {
        if (index < testimonialImageUrls.length) {
            item.innerHTML = '';
            const img = document.createElement('img');
            img.src = testimonialImageUrls[index];
            img.alt = `Testimonial Author ${index + 1}`;
            img.style.width = '60px';
            img.style.height = '60px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            item.appendChild(img);
        }
    });

    // ========== SERVICE CARDS HOVER EFFECT ==========
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // ========== ANIMATE ELEMENTS ON SCROLL ==========
    const animatedElements = document.querySelectorAll('.vm-card, .service-item, .blog-post, .priority-item, .testimonial');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ========== FOOTER SOCIAL MEDIA HOVER EFFECTS ==========
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ========== SIMPLE LIGHTBOX FUNCTION (for gallery) ==========
    function openLightbox(imageSrc, caption) {
        // Remove existing lightbox if any
        const existingLightbox = document.querySelector('.lightbox');
        if (existingLightbox) {
            existingLightbox.remove();
        }

        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: pointer;
        `;

        const lightboxContent = document.createElement('div');
        lightboxContent.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            position: relative;
        `;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = caption;
        img.style.cssText = `
            width: 100%;
            height: auto;
            border-radius: 8px;
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
        `;

        lightboxContent.appendChild(img);
        lightboxContent.appendChild(closeBtn);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);

        // Close lightbox on click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target === closeBtn) {
                lightbox.remove();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        });
    }

    // ========== CURRENT YEAR IN FOOTER ==========
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Blue Tech Chapter.`;
    }

    // ========== LOADING ANIMATION FOR IMAGES ==========
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        // Add loading class
        img.classList.add('loading');
        
        // Remove loading class when image is loaded
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
        
        // Handle image loading errors
        img.addEventListener('error', function() {
            this.classList.remove('loading');
            this.classList.add('error');
            console.error('Failed to load image:', this.src);
        });
    });

    // ========== RESPONSIVE NAVIGATION (Optional - would need HTML update) ==========
    // If you add a hamburger menu in the future, this code can be used:
    /*
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.className = 'menu-toggle';
    document.querySelector('.nav-container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
    */

    console.log('Blue Tech Chapter website initialized successfully!');
});

// ========== WINDOW RESIZE HANDLER ==========
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle any resize-specific logic here
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    }, 250);
});

// ========== ADDITIONAL HELPER FUNCTIONS ==========

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Preload important images
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}