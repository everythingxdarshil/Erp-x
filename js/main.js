// Logo Slider Initialization
function initLogoSlider() {
    // Check if Swiper is available and if the logo slider element exists
    if (typeof Swiper === 'undefined') {
        return; // Swiper library not loaded, skip initialization
    }

    const logoSliderElement = document.querySelector('.logo-swiper');
    if (!logoSliderElement) {
        return; // Logo slider element doesn't exist on this page
    }

    const logoSwiper = new Swiper('.logo-swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 3,
        centeredSlides: false,
        watchOverflow: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
}

// Mobile Menu Logic
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.header');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && header && mobileMenu) {

        function toggleMenu() {
            header.classList.toggle('active');
        }

        function closeMenu() {
            header.classList.remove('active');
        }

        // Toggle menu on hamburger click
        menuToggle.onclick = (e) => {
            e.stopPropagation();
            toggleMenu();
        };

        // Handle mobile dropdown toggles
        const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
        mobileDropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.mobile-dropdown-trigger');
            if (trigger) {
                trigger.addEventListener('click', function (e) {
                    // Only toggle dropdown, don't navigate
                    e.preventDefault();
                    e.stopPropagation();

                    // Toggle active class on parent dropdown
                    dropdown.classList.toggle('active');

                    // Close other dropdowns
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            }
        });

        // Close menu when clicking on regular nav links (not dropdown triggers)
        const navLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-trigger)');
        navLinks.forEach(link => {
            link.onclick = closeMenu;
        });

        // Close menu when clicking on dropdown items
        const dropdownItems = document.querySelectorAll('.mobile-dropdown-item');
        dropdownItems.forEach(item => {
            item.onclick = closeMenu;
        });

        // Close menu when clicking on CTA button
        const ctaBtn = document.querySelector('.mobile-cta-button');
        if (ctaBtn) {
            ctaBtn.onclick = closeMenu;
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (header.classList.contains('active') &&
                !header.contains(e.target)) {
                closeMenu();
            }
        });
    }
}

// Mobile and Tablet Dropdown Toggle for Products and Industries
let dropdownsInitialized = false; // Flag to prevent duplicate initialization

function initMobileDropdowns() {
    const productsDropdown = document.querySelector('.products-dropdown');
    const industriesDropdown = document.querySelector('.industries-dropdown');

    // If dropdowns don't exist, exit early
    if (!productsDropdown && !industriesDropdown) {
        return;
    }

    // Handle Products dropdown - only add listener if not already initialized
    if (productsDropdown && !dropdownsInitialized) {
        const trigger = productsDropdown.querySelector('.dropdown-trigger');
        if (trigger) {
            trigger.addEventListener('click', function (e) {
                // Prevent default and use click on mobile AND tablet (≤1024px)
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    productsDropdown.classList.toggle('active');
                    // Close industries dropdown if open
                    if (industriesDropdown) {
                        industriesDropdown.classList.remove('active');
                    }
                }
            });
        }
    }

    // Handle Industries dropdown - only add listener if not already initialized
    if (industriesDropdown && !dropdownsInitialized) {
        const trigger = industriesDropdown.querySelector('.dropdown-trigger');
        if (trigger) {
            trigger.addEventListener('click', function (e) {
                // Prevent default and use click on mobile AND tablet (≤1024px)
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    industriesDropdown.classList.toggle('active');
                    // Close products dropdown if open
                    if (productsDropdown) {
                        productsDropdown.classList.remove('active');
                    }
                }
            });
        }
    }

    // Only add global event listeners once
    if (!dropdownsInitialized) {
        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                const productsDropdown = document.querySelector('.products-dropdown');
                const industriesDropdown = document.querySelector('.industries-dropdown');

                if (productsDropdown && !productsDropdown.contains(e.target)) {
                    productsDropdown.classList.remove('active');
                }
                if (industriesDropdown && !industriesDropdown.contains(e.target)) {
                    industriesDropdown.classList.remove('active');
                }
            }
        });

        // Close dropdowns when scrolling (ALL screen sizes - desktop, tablet, and mobile)
        let scrollTimeout;
        window.addEventListener('scroll', function () {
            // Query elements fresh each time (handles dynamic loading)
            const productsDropdown = document.querySelector('.products-dropdown');
            const industriesDropdown = document.querySelector('.industries-dropdown');
            const header = document.querySelector('.header');
            const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

            // For tablet/mobile (≤1024px) - remove active class from desktop dropdowns AND mobile menu
            if (window.innerWidth <= 1024) {
                // Close desktop dropdowns
                if (productsDropdown) {
                    productsDropdown.classList.remove('active');
                }
                if (industriesDropdown) {
                    industriesDropdown.classList.remove('active');
                }

                // Close mobile menu
                if (header) {
                    header.classList.remove('active');
                }

                // Close all mobile dropdowns
                mobileDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            } else {
                // For desktop (>1024px) - temporarily disable pointer events to close hover menus
                if (productsDropdown) {
                    productsDropdown.style.pointerEvents = 'none';
                }
                if (industriesDropdown) {
                    industriesDropdown.style.pointerEvents = 'none';
                }

                // Re-enable pointer events after scrolling stops
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function () {
                    const productsDropdown = document.querySelector('.products-dropdown');
                    const industriesDropdown = document.querySelector('.industries-dropdown');

                    if (productsDropdown) {
                        productsDropdown.style.pointerEvents = '';
                    }
                    if (industriesDropdown) {
                        industriesDropdown.style.pointerEvents = '';
                    }
                }, 150); // Small delay to ensure menu stays closed
            }
        });

        // Mark as initialized
        dropdownsInitialized = true;
    }
}

// Smooth scroll to product/industry cards
function initSmoothScrolling() {
    // Function to scroll to element
    function scrollToElement(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Get header height for offset
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 80;

            // Calculate position
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

            // Smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Check if we're on the products or industries page and there's a hash
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            scrollToElement(hash);
        }, 300); // Small delay to ensure page is loaded
    }

    // Handle clicks on dropdown items for same-page navigation
    const currentPage = window.location.pathname.split('/').pop();
    const dropdownItems = document.querySelectorAll('.nav-dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href) {
                const [page, hash] = href.split('#');

                // If clicking on an item for the current page, prevent default and scroll
                if (page === currentPage && hash) {
                    e.preventDefault();
                    scrollToElement('#' + hash);

                    // Update URL without page reload
                    history.pushState(null, null, '#' + hash);

                    // Close mobile dropdown if open
                    const dropdown = this.closest('.products-dropdown, .industries-dropdown');
                    if (dropdown) {
                        dropdown.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Close mega menu on click - works on all pages
function initMegaMenuClose() {
    const productsDropdown = document.querySelector('.products-dropdown');
    const industriesDropdown = document.querySelector('.industries-dropdown');
    const currentPage = window.location.pathname.split('/').pop();

    // Function to close mega menu by temporarily disabling hover
    function closeMegaMenu(dropdown, isSamePage = false) {
        if (!dropdown) return;

        // Add a class that will override the hover state
        dropdown.classList.add('menu-clicked');

        // For same-page navigation, also disable pointer events temporarily
        if (isSamePage) {
            dropdown.style.pointerEvents = 'none';
            setTimeout(() => {
                dropdown.style.pointerEvents = '';
            }, 800);
        }

        // Remove the class after a longer delay to ensure menu stays closed
        setTimeout(() => {
            dropdown.classList.remove('menu-clicked');
        }, 500);
    }

    // Handle clicks on all mega menu items (Products)
    if (productsDropdown) {
        const menuItems = productsDropdown.querySelectorAll('.mega-menu-item, .nav-dropdown-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const isSamePage = href && href.includes(currentPage);

                // Close the mega menu immediately
                closeMegaMenu(productsDropdown, isSamePage);

                // Let the browser handle navigation naturally - no preventDefault
            });
        });

        // Also close when mouse leaves after clicking
        let wasClicked = false;
        productsDropdown.addEventListener('click', () => {
            wasClicked = true;
        });
        productsDropdown.addEventListener('mouseleave', () => {
            if (wasClicked) {
                closeMegaMenu(productsDropdown);
                wasClicked = false;
            }
        });
    }

    // Handle clicks on all mega menu items (Industries)
    if (industriesDropdown) {
        const menuItems = industriesDropdown.querySelectorAll('.mega-menu-item, .nav-dropdown-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const isSamePage = href && href.includes(currentPage);

                // Close the mega menu immediately
                closeMegaMenu(industriesDropdown, isSamePage);

                // Let the browser handle navigation naturally - no preventDefault
            });
        });

        // Also close when mouse leaves after clicking
        let wasClicked = false;
        industriesDropdown.addEventListener('click', () => {
            wasClicked = true;
        });
        industriesDropdown.addEventListener('mouseleave', () => {
            if (wasClicked) {
                closeMegaMenu(industriesDropdown);
                wasClicked = false;
            }
        });
    }
}


// Initialize when DOM is ready
// FAQ Accordion Logic - Robust Version
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) {
        return; // No FAQ items found, exit
    }

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        // Remove any existing listeners by cloning
        const newQuestion = question.cloneNode(true);
        question.parentNode.replaceChild(newQuestion, question);

        newQuestion.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const parentItem = this.closest('.faq-item');
            const isActive = parentItem.classList.contains('active');

            // Close all items
            faqItems.forEach(function (faqItem) {
                faqItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                parentItem.classList.add('active');
            }
        });
    });
}

// Tabs Logic for Contact Page
function initTabs() {
    const tabs = document.querySelectorAll('.review-tab');
    const cards = document.querySelectorAll('.review-card');

    if (tabs.length === 0 || cards.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');

            // Hide all cards
            cards.forEach(card => card.classList.remove('active'));

            // Show target card
            const targetId = tab.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
                targetCard.classList.add('active');
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Load header/footer first (synchronous string injection)
        if (typeof loadComponents === 'function') {
            loadComponents();
        }

        // Initialize interactive elements
        initLogoSlider();
        initMobileMenu();
        initMobileDropdowns();
        initSmoothScrolling();
        initMegaMenuClose();
        initFAQ();
        initComparisonModal();
        initTabs();
        initIndustryTestimonials();
    });
} else {
    if (typeof loadComponents === 'function') {
        loadComponents();
    }
    initLogoSlider();
    initMobileMenu();
    initMobileDropdowns();
    initSmoothScrolling();
    initMegaMenuClose();
    initFAQ();
    initComparisonModal();
    initTabs();
    initIndustryTestimonials();
}


// Comparison Modal Logic
function initComparisonModal() {
    const modal = document.getElementById('comparisonModal');
    const viewBtn = document.getElementById('viewComparisonBtn');
    const closeBtn = document.getElementById('closeComparisonBtn');
    const overlay = document.getElementById('comparisonOverlay');

    if (!modal || !viewBtn || !closeBtn) return;

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    viewBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}


// Industry Testimonials Logic
function initIndustryTestimonials() {
    const tabs = document.querySelectorAll('.industry-tab');
    const contentGroups = document.querySelectorAll('.testimonial-group');

    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Hide all content groups
            contentGroups.forEach(group => {
                group.classList.remove('active');
            });

            // Show selected content
            const industry = tab.getAttribute('data-industry');
            const targetGroup = document.getElementById(`content-${industry}`);
            if (targetGroup) {
                targetGroup.classList.add('active');
            }
        });
    });
}
