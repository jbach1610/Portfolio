// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Intersection Observer for animations
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

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Hero image hover effect
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
        this.style.boxShadow = '0 30px 80px rgba(0, 255, 255, 0.4)';
    });

    heroImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = '0 20px 60px rgba(0, 255, 255, 0.2)';
    });
}

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 40px rgba(0, 255, 255, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 25px 80px rgba(0, 255, 255, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Experience milestones animation (timeline)
function animateExperienceMilestones() {
    const milestones = document.querySelectorAll('.experience-milestone');
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // stagger activation for visual rhythm
                setTimeout(() => {
                    const dot = entry.target.querySelector('.milestone-dot');
                    if (dot) dot.classList.add('active');
                }, idx * 120);
                experienceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    milestones.forEach(m => experienceObserver.observe(m));
}

// Initialize experience milestone animations
animateExperienceMilestones();

// Stat items hover effect
document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 20px 60px rgba(0, 255, 255, 0.2)';
    });

    stat.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Award items hover effect
document.querySelectorAll('.award-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 20px 60px rgba(0, 255, 255, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Brand items hover effect
document.querySelectorAll('.brand-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 20px 60px rgba(0, 255, 255, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// CTA button hover effect
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
    });

    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
}

// Typing effect for hero title with blinking cursor and HTML support
function typeWriter(element, speed = 80) {
    const text = "Hi, welcome! \nI'm Hien Bach";
    let i = 0;

    // Clear the element and add cursor
    element.innerHTML = '';
    element.style.borderRight = '3px solid #00ffff';

    // Create blinking animation for cursor
    const blinkInterval = setInterval(() => {
        element.style.borderRight = element.style.borderRight === '3px solid #00ffff' ? '3px solid transparent' : '3px solid #00ffff';
    }, 500);

    function type() {
        if (i < text.length) {
            const char = text.charAt(i);

            // Handle line breaks
            if (char === '\n') {
                element.innerHTML += '<br>';
            } else if (i >= text.indexOf('Hien Bach')) {
                // Apply highlight styling to "Hien Bach"
                element.innerHTML = element.innerHTML.replace('Hien Bach', '<span class="highlight">Hien Bach</span>');
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(type, speed);
        } else {
            // Ensure final highlight is applied and stop blinking, remove cursor
            element.innerHTML = 'Hi, welcome! <br>I\'m <span class="highlight">Hien Bach</span>';
            clearInterval(blinkInterval);
            element.style.borderRight = 'none';
        }
    }

    // Start typing after a brief delay
    setTimeout(type, 500);
}

// Intersection Observer for hero section typing animation
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const heroTitle = entry.target.querySelector('.hero-title');
            if (heroTitle && !heroTitle.hasAttribute('data-typed')) {
                // Mark as typed to prevent re-triggering
                heroTitle.setAttribute('data-typed', 'true');

                // Start typing animation
                typeWriter(heroTitle, 80);
            }
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

// Observe hero section for typing animation
const heroSection = document.getElementById('about');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');

    if (heroImage && scrolled < 500) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0002})`;
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Counter Animation Function
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the animation

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.floor(current);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer for Counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Progress Bar Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.stat-progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth + '%';
    });
}

// Intersection Observer for Progress Bars
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats section for progress bars
if (statsSection) {
    progressObserver.observe(statsSection);
}

// Milestone Timeline Animation
function animateMilestones() {
    const milestones = document.querySelectorAll('.milestone');
    const milestoneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.querySelector('.milestone-dot').classList.add('active');
                }, index * 200); // Stagger the animations
            }
        });
    }, { threshold: 0.5 });

    milestones.forEach(milestone => {
        milestoneObserver.observe(milestone);
    });
}

// Initialize milestone animations
animateMilestones();

// Enhanced hover effects for award items
document.querySelectorAll('.award-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Autoplay carousel for horizontal experience timeline
(function() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;

    const getGap = () => {
        const g = getComputedStyle(timeline).gap;
        return g ? parseInt(g) : 24;
    };

    let card = timeline.querySelector('.experience-milestone');
    let cardWidth = card ? card.offsetWidth + getGap() : 360;
    let autoplayInterval = null;

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth - 5) {
                timeline.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                timeline.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 3000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    timeline.addEventListener('mouseenter', stopAutoplay);
    timeline.addEventListener('mouseleave', startAutoplay);
    timeline.addEventListener('touchstart', stopAutoplay, { passive: true });
    timeline.addEventListener('touchend', startAutoplay, { passive: true });

    window.addEventListener('load', startAutoplay);
    window.addEventListener('resize', () => {
        card = timeline.querySelector('.experience-milestone');
        cardWidth = card ? card.offsetWidth + getGap() : cardWidth;
    });
})();

// Modal: open milestone detail on card click
(function() {
    const timeline = document.querySelector('.experience-timeline');
    const modalOverlay = document.getElementById('milestone-modal');
    const modalBody = modalOverlay ? modalOverlay.querySelector('.modal-body') : null;
    const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
    if (!timeline || !modalOverlay || !modalBody || !modalClose) return;

    function openModal(content, opener) {
        modalBody.innerHTML = content;
        modalOverlay.setAttribute('aria-hidden', 'false');
        modalClose.focus();
        // remember opener to return focus
        modalOverlay._opener = opener || null;
    }

    function closeModal() {
        modalOverlay.setAttribute('aria-hidden', 'true');
        modalBody.innerHTML = '';
        if (modalOverlay._opener) modalOverlay._opener.focus();
    }

    timeline.addEventListener('click', (e) => {
        const card = e.target.closest('.experience-milestone');
        if (!card) return;
        // avoid opening when clicking controls
        if (e.target.closest('.timeline-control')) return;
        const detail = card.querySelector('.milestone-detail');
        if (detail) {
            openModal(detail.innerHTML, card.querySelector('.milestone-content'));
        }
    });

    // keyboard: open with Enter when focused
    timeline.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const card = e.target.closest && e.target.closest('.experience-milestone');
            if (card) {
                const detail = card.querySelector('.milestone-detail');
                if (detail) openModal(detail.innerHTML, card.querySelector('.milestone-content'));
            }
        }
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.getAttribute('aria-hidden') === 'false') closeModal();
    });
})();

// Prev/Next controls + Active-card emphasis
(function() {
    const timeline = document.querySelector('.experience-timeline');
    const prev = document.querySelector('.timeline-control.prev');
    const next = document.querySelector('.timeline-control.next');
    if (!timeline || !prev || !next) return;

    const getCardGap = () => {
        const g = getComputedStyle(timeline).gap;
        return g ? parseInt(g, 10) : 24;
    };

    const getCardWidth = () => {
        const card = timeline.querySelector('.experience-milestone');
        return card ? card.offsetWidth + getCardGap() : 360;
    };

    // Helper to pause autoplay (emulate mouseenter) and resume after delay
    function pauseAutoplayTemporary() {
        timeline.dispatchEvent(new Event('mouseenter'));
        clearTimeout(timeline._resumeTimer);
        timeline._resumeTimer = setTimeout(() => timeline.dispatchEvent(new Event('mouseleave')), 3500);
    }

    prev.addEventListener('click', () => {
        pauseAutoplayTemporary();
        timeline.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
        pauseAutoplayTemporary();
        timeline.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });

    // Active card detection: center-of-viewport method
    function updateActiveCard() {
        const cards = Array.from(timeline.querySelectorAll('.experience-milestone'));
        if (!cards.length) return;
        const center = timeline.scrollLeft + (timeline.clientWidth / 2);
        let nearest = null;
        let nearestDist = Infinity;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = (card.offsetLeft) + (card.offsetWidth / 2);
            const dist = Math.abs(cardCenter - center);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = card;
            }
        });

        cards.forEach(card => {
            const dot = card.querySelector('.milestone-dot');
            if (card === nearest) {
                card.classList.add('active-card');
                if (dot) dot.classList.add('active');
            } else {
                card.classList.remove('active-card');
                if (dot) dot.classList.remove('active');
            }
        });

        // Announce active card via live region for screen readers
        try {
            const live = document.getElementById('timeline-live');
            if (live && nearest) {
                const titleEl = nearest.querySelector('h3');
                const compEl = nearest.querySelector('h4');
                const title = titleEl ? titleEl.innerText.trim() : '';
                const company = compEl ? compEl.innerText.trim() : '';
                const message = title ? (company ? `${title} at ${company}` : title) : '';
                if (message && timeline._lastAnnouncement !== message) {
                    timeline._lastAnnouncement = message;
                    // short delay to ensure polite live regions update reliably
                    setTimeout(() => { live.textContent = message; }, 100);
                }
            }
        } catch (e) { /* silent */ }
    }

    let scrollTimer = null;
    timeline.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateActiveCard, 120);
    }, { passive: true });

    // Initial activation and on resize
    window.addEventListener('load', updateActiveCard);
    window.addEventListener('resize', () => {
        // recalc sizes and active
        updateActiveCard();
    });

    // also ensure keyboard navigation
    prev.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prev.click(); } });
    next.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next.click(); } });

    // make sure active updates after autoplay steps (autoplay triggers scroll events)
    // call once to set initial state
    updateActiveCard();
})();

    // Awards filter buttons
    (function() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const chips = document.querySelectorAll('.award-chip');
        if (!filterBtns.length || !chips.length) return;

        function setFilter(filter) {
            filterBtns.forEach(btn => {
                const isActive = btn.dataset.filter === filter;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            chips.forEach(chip => {
                const cat = chip.dataset.category || '';
                if (filter === 'all' || cat === filter) {
                    chip.classList.remove('hidden');
                } else {
                    chip.classList.add('hidden');
                }
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => setFilter(btn.dataset.filter));
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFilter(btn.dataset.filter); }
            });
        });

        // initialize default filter to Scholarships
        setFilter('scholarship');
    })();

    // Projects: show 4 featured projects then expand to show all
    (function() {
        const grid = document.querySelector('.projects-grid');
        const btn = document.getElementById('toggle-projects');
        if (!grid || !btn) return;

        function collapse() {
            grid.classList.add('collapsed');
            btn.textContent = 'View All Projects';
            btn.setAttribute('aria-expanded', 'false');
        }

        function expand() {
            grid.classList.remove('collapsed');
            btn.textContent = 'Show Fewer';
            btn.setAttribute('aria-expanded', 'true');
        }

        // Initialize collapsed state (CSS already sets .collapsed)
        collapse();

        btn.addEventListener('click', () => {
            if (grid.classList.contains('collapsed')) expand(); else collapse();
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
        });
    })();

    // Project detail modal
    (function() {
        const modalOverlay = document.getElementById('project-modal');
        const modalBody = modalOverlay ? modalOverlay.querySelector('.modal-body') : null;
        const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
        if (!modalOverlay || !modalBody || !modalClose) return;

        function openModal(content, opener) {
            modalBody.innerHTML = content;
            modalOverlay.setAttribute('aria-hidden', 'false');
            modalClose.focus();
            modalOverlay._opener = opener || null;
        }

        function closeModal() {
            modalOverlay.setAttribute('aria-hidden', 'true');
            modalBody.innerHTML = '';
            if (modalOverlay._opener) modalOverlay._opener.focus();
        }

        document.querySelectorAll('.project-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const card = link.closest('.project-card');
                const detail = card ? card.querySelector('.project-detail') : null;
                if (detail) openModal(detail.innerHTML, link);
            });
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.getAttribute('aria-hidden') === 'false') closeModal();
        });
    })();

    // Work sample image lightbox
    (function() {
        const modalOverlay = document.getElementById('image-modal');
        const modalImg = document.getElementById('image-modal-img');
        const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
        if (!modalOverlay || !modalImg || !modalClose) return;

        function openImage(src, alt) {
            modalImg.src = src;
            modalImg.alt = alt || 'Work sample image';
            modalOverlay.setAttribute('aria-hidden', 'false');
            modalClose.focus();
        }

        function closeImage() {
            modalOverlay.setAttribute('aria-hidden', 'true');
            modalImg.src = '';
            modalImg.alt = '';
        }

        // Delegate clicks so images inside the project modal are handled too
        document.addEventListener('click', (e) => {
            const img = e.target.closest && e.target.closest('.work-sample-image');
            if (!img) return;
            img.style.cursor = 'zoom-in';
            openImage(img.src, img.alt);
        });

        modalClose.addEventListener('click', closeImage);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeImage();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.getAttribute('aria-hidden') === 'false') closeImage();
        });
    })();

    // Skill Cloud behavior: size bubbles by data-level, filter by category, and show tooltip on hover/focus
    (function() {
        const pills = document.querySelectorAll('.skill-pill');
        const tip = document.getElementById('skill-tip');
        const filterBtns = document.querySelectorAll('.skill-filter-btn');
        if (!pills.length || !tip) return;

        // Map data-level (1-5) to font size in rem for word cloud
        const sizeMap = { '1': 0.9, '2': 1.1, '3': 1.35, '4': 1.6, '5': 2.1 };
        const colors = ['#f2d87a', '#f08b6d', '#6f5bb7', '#b0548d', '#f4b5c1', '#a6e3ff', '#9b8cff'];
        const weights = ['500', '600', '700', '800'];
        const rotations = ['0deg'];

        function placeTooltip(el, text) {
            tip.textContent = text;
            tip.style.display = 'block';
            const rect = el.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            const left = Math.min(rect.left + rect.width / 2, window.innerWidth - 340);
            tip.style.top = (rect.top + scrollY - 12) + 'px';
            tip.style.left = (left + window.scrollX - (tip.offsetWidth / 2)) + 'px';
        }

        function hideTooltip() {
            tip.style.display = 'none';
            tip.textContent = '';
        }

        function setFilter(filter) {
            if (filterBtns.length) {
                filterBtns.forEach(btn => {
                    const isActive = btn.dataset.filter === filter;
                    btn.classList.toggle('active', isActive);
                    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                });
            }

            pills.forEach(p => {
                const cat = p.dataset.category || '';
                const isMatch = (filter === 'all' || cat === filter);
                p.classList.toggle('dimmed', !isMatch);
            });

            hideTooltip();
            layoutWordCloud();
        }

        pills.forEach(p => {
            const level = p.dataset.level || '3';
            const size = sizeMap[level] || 1.1;
            p.style.setProperty('--font-size', `${size}rem`);
            // randomized but stable per item based on text length
            const seed = (p.textContent || '').length % colors.length;
            p.style.setProperty('--word-color', colors[seed]);
            p.style.setProperty('--word-weight', weights[seed % weights.length]);
            p.style.setProperty('--word-rot', rotations[seed % rotations.length]);

            // make keyboard-focusable
            p.setAttribute('tabindex', '0');

            p.addEventListener('mouseenter', () => placeTooltip(p, p.dataset.desc || ''));
            p.addEventListener('mouseleave', hideTooltip);
            p.addEventListener('focus', () => placeTooltip(p, p.dataset.desc || ''));
            p.addEventListener('blur', hideTooltip);
            p.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); placeTooltip(p, p.dataset.desc || ''); } });
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => setFilter(btn.dataset.filter));
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFilter(btn.dataset.filter); }
            });
        });

        function layoutWordCloud() {
            const cloud = document.querySelector('.skill-cloud');
            if (!cloud) return;

            const visible = Array.from(pills).filter(p => !p.classList.contains('hidden'));
            if (!visible.length) return;

            // Sort by level desc to place big words first
            visible.sort((a, b) => (parseInt(b.dataset.level || '3', 10) - parseInt(a.dataset.level || '3', 10)));

            // Ensure measurements are accurate
            visible.forEach(p => { p.style.left = '0px'; p.style.top = '0px'; });

            const cloudWidth = cloud.clientWidth || cloud.getBoundingClientRect().width;
            const centerX = cloudWidth / 2;
            const startY = 20;
            const placed = [];

            function overlaps(rect) {
                const pad = 12;
                const padded = {
                    left: rect.left - pad,
                    top: rect.top - pad,
                    right: rect.right + pad,
                    bottom: rect.bottom + pad
                };
                return placed.some(p => !(padded.right < p.left || padded.left > p.right || padded.bottom < p.top || padded.top > p.bottom));
            }

            visible.forEach((p, i) => {
                const w = p.offsetWidth;
                const h = p.offsetHeight;
                let angle = 0;
                let radius = 0;
                let placedRect = null;

                // Try spiral placements
                for (let attempts = 0; attempts < 1400; attempts++) {
                    const x = centerX + radius * Math.cos(angle) - w / 2;
                    const y = startY + radius * Math.sin(angle);
                    const rect = { left: x, top: y, right: x + w, bottom: y + h };
                    const within = rect.left >= 0 && rect.right <= cloudWidth && rect.top >= 0;

                    if (within && !overlaps(rect)) {
                        placedRect = rect;
                        break;
                    }
                    angle += 0.28;
                    radius += 1.1;
                }

                if (!placedRect) {
                    placedRect = { left: Math.max(0, centerX - w / 2), top: startY + (i * 10), right: Math.max(0, centerX - w / 2) + w, bottom: startY + (i * 10) + h };
                }

                p.style.left = `${placedRect.left}px`;
                p.style.top = `${placedRect.top}px`;
                placed.push(placedRect);
            });

            const maxBottom = Math.max(...placed.map(p => p.bottom)) + 20;
            cloud.style.height = `${Math.max(320, maxBottom)}px`;
        }

        // default to all skills visible
        setFilter('all');
        layoutWordCloud();

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(layoutWordCloud);
        }

        // reposition tooltip on scroll/resize
        window.addEventListener('scroll', () => { if (tip.style.display === 'block') tip.style.display = 'none'; }, { passive: true });
        window.addEventListener('resize', () => { if (tip.style.display === 'block') tip.style.display = 'none'; layoutWordCloud(); });
    })();
