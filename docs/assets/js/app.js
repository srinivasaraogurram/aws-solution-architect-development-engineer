// Enhanced interactivity for the portfolio site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-tree a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes(link.getAttribute('href').replace('.html', '')) && 
             link.getAttribute('href') !== '/')) {
            link.classList.add('active');
        }
    });

    // Add scroll-based header shadow
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.quick-link, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click tracking for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('External link clicked:', this.href);
            // You can add analytics tracking here
        });
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const header = document.querySelector('.header-nav');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.display = 'none';
        
        menuToggle.addEventListener('click', () => {
            header.classList.toggle('mobile-nav-open');
        });
        
        document.querySelector('.header-content').appendChild(menuToggle);
        
        // Show/hide mobile menu based on screen size
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                header.classList.add('mobile-nav');
            } else {
                menuToggle.style.display = 'none';
                header.classList.remove('mobile-nav', 'mobile-nav-open');
            }
        };
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    };

    // Initialize mobile menu
    createMobileMenu();

    // Copy code blocks functionality
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.title = 'Copy code';
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.color = '#27ae60';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                    button.style.color = '';
                }, 2000);
            });
        });
        
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
    });

    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Route PDF links through the in-site PDF viewer unless opted out
    try {
        const baseurl = window.SITE_BASEURL || '';
        const viewer = (window.PDF_VIEWER || (baseurl + '/pdf-viewer.html'));
        document.querySelectorAll('a[href$=".pdf"]').forEach(a => {
            if (a.classList.contains('no-pdf-viewer')) return;
            const original = a.getAttribute('href');
            if (!original) return;
            const target = viewer + '?file=' + encodeURIComponent(original);
            a.setAttribute('href', target);
            // keep target behavior if set
        });
    } catch (e) {
        console.warn('PDF viewer routing skipped:', e);
    }

    // Progressive enhancement for better performance
    if ('IntersectionObserver' in window) {
        // Lazy load images if any
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Add CSS for copy button and mobile menu
const style = document.createElement('style');
style.textContent = `
    .copy-code-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #e2e8f0;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }
    
    .copy-code-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
    
    .mobile-menu-toggle {
        background: none;
        border: none;
        color: var(--text-light);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    
    .mobile-menu-toggle:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
        .mobile-nav {
            flex-direction: column;
            align-items: flex-start;
            max-height: 60px;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .mobile-nav.mobile-nav-open {
            max-height: 300px;
        }
        
        .mobile-nav .header-nav {
            width: 100%;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 1rem;
        }
    }
    
    body.loaded {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);