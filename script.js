// 1. Theme Toggle with LocalStorage Persistence
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
}

// 2. Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinksMenu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksMenu.classList.remove('active');
        menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// 3. Project Filter System
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 4. Scroll Animations & Active Nav Highlighting (Intersection Observer)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            let id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Secure Contact Links Injection (Prevents bot scraping & harvesting)
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Secure Email Assembly
    const emailUser = "nurfahimww";   
    const emailDomain = "gmail.com";    
    const fullEmail = `${emailUser}@${emailDomain}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${fullEmail}`;
    
    // Update ALL Gmail buttons/cards on the page
    document.querySelectorAll('.gmail-link').forEach(el => {
        el.href = gmailUrl;
    });

    // 2. Secure WhatsApp Number Assembly
    const countryCode = "62";           
    const phoneNumber = "82232809496";  
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}`;
   
    // Update ALL WhatsApp buttons/cards on the page
    document.querySelectorAll('.whatsapp-link').forEach(el => {
        el.href = whatsappUrl;
    }); 
    
});