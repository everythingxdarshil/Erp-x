const headerHTML = `
<!-- Header / Navigation -->
<header class="header">
    <nav class="navbar container">
        <a href="index.html" class="navbar-brand">
            <img src="assets/logo/header-logo.png" alt="ERPX Logo" class="logo-img">
        </a>
        <ul class="navbar-nav">
            <li class="products-dropdown">
                <a href="products.html" class="nav-link dropdown-trigger">
                    Products
                    <svg class="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
                <div class="nav-dropdown-menu mega-menu" aria-labelledby="productsDropdown">
                    <div class="mega-menu-grid">
                        <a href="products.html#hr-payroll" class="mega-menu-item" data-product="hr-payroll">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>HR & Payroll</h4>
                                <p>Comprehensive HR and payroll solutions</p>
                            </div>
                        </a>

                        <a href="products.html#crm" class="mega-menu-item" data-product="crm">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>CRM</h4>
                                <p>Empowering revenue growth and customer engagement</p>
                            </div>
                        </a>

                        <a href="products.html#work" class="mega-menu-item" data-product="work">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Work</h4>
                                <p>Plan, execute, and track projects effectively</p>
                            </div>
                        </a>

                        <a href="products.html#files" class="mega-menu-item" data-product="files">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M13 2V9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Files</h4>
                                <p>Secure, Share, and Collaborate with Ease</p>
                            </div>
                        </a>

                        <a href="products.html#sales" class="mega-menu-item" data-product="sales">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 6H23V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Sales</h4>
                                <p>Empowering revenue growth and customer engagement</p>
                            </div>
                        </a>

                        <a href="products.html#support" class="mega-menu-item" data-product="support">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Support</h4>
                                <p>Comprehensive HR and payroll solutions</p>
                            </div>
                        </a>

                        <a href="products.html#email" class="mega-menu-item" data-product="email">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Email</h4>
                                <p>Professional email and communication platform</p>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li><a href="pricing.html" class="nav-link">Pricing</a></li>
            <li class="industries-dropdown">
                <a href="industries.html" class="nav-link dropdown-trigger">
                    Industries
                    <svg class="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
                <div class="nav-dropdown-menu mega-menu" aria-labelledby="industriesDropdown">
                    <div class="mega-menu-grid">
                        <a href="industries.html#software-it" class="mega-menu-item" data-industry="software-it">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 18L22 12L16 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 6L2 12L8 18" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Software & IT</h4>
                                <p>Streamline operations and boost productivity</p>
                            </div>
                        </a>

                        <a href="industries.html#manufacturing" class="mega-menu-item" data-industry="manufacturing">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Manufacturing</h4>
                                <p>Optimize production and inventory management</p>
                            </div>
                        </a>

                        <a href="industries.html#bpo" class="mega-menu-item" data-industry="bpo">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>BPO</h4>
                                <p>Enhance client management and operations</p>
                            </div>
                        </a>

                        <a href="industries.html#accounting" class="mega-menu-item" data-industry="accounting">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Accounting</h4>
                                <p>Simplify financial workflows and reporting</p>
                            </div>
                        </a>

                        <a href="industries.html#pharmacy" class="mega-menu-item" data-industry="pharmacy">
                            <div class="mega-menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="mega-menu-content">
                                <h4>Pharmacy</h4>
                                <p>Streamline inventory and customer service</p>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li><a href="about-us.html" class="nav-link">About Us</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
        <!-- <button class="cta-button">Get 14 Days Free Trial</button> -->
        <a class="cta-button" href="https://cloud.erp-x.one/" target="_blank">Access Cloud</a>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
    </nav>

    <!-- Mobile Menu (Inline Dropdown) -->
    <div class="mobile-menu" id="mobileMenu">
        <nav class="mobile-menu-nav">
            <!-- Products Dropdown -->
            <div class="mobile-dropdown">
                <a href="products.html" class="mobile-nav-link mobile-dropdown-trigger">
                    Products
                    <svg class="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
                <div class="mobile-dropdown-menu">
                    <a href="products.html#hr-payroll" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        HR & Payroll
                    </a>
                    <a href="products.html#crm" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        CRM
                    </a>
                    <a href="products.html#work" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Work
                    </a>
                    <a href="products.html#files" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 2V9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Files
                    </a>
                    <a href="products.html#sales" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 6H23V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Sales
                    </a>
                    <a href="products.html#support" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Support
                    </a>
                    <a href="products.html#email" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Email
                    </a>
                </div>
            </div>

            <a href="pricing.html" class="mobile-nav-link">Pricing</a>

            <!-- Industries Dropdown -->
            <div class="mobile-dropdown">
                <a href="industries.html" class="mobile-nav-link mobile-dropdown-trigger">
                    Industries
                    <svg class="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
                <div class="mobile-dropdown-menu">
                    <a href="industries.html#software-it" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 18L22 12L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Software & IT
                    </a>
                    <a href="industries.html#manufacturing" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Manufacturing
                    </a>
                    <a href="industries.html#bpo" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        BPO
                    </a>
                    <a href="industries.html#accounting" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Accounting
                    </a>
                    <a href="industries.html#pharmacy" class="mobile-dropdown-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Pharmacy
                    </a>
                </div>
            </div>

            <a href="about-us.html" class="mobile-nav-link">About Us</a>
            <a href="contact.html" class="mobile-nav-link">Contact</a>
        </nav>
        <a href="contact.html" class="mobile-cta-button">Get 14 Days Free Trial</a>
    </div>
</header>
`;

const footerHTML = `
<!-- Footer -->
<footer class="footer">
    <div class="footer-container container">
        <!-- Left Section: Logo, Description, Social Icons -->
        <div class="footer-left">
            <div class="footer-brand">
                <a href="index.html">
                    <img src="assets/logo/footer-logo.png" alt="ERPX Logo" class="footer-logo-img">
                </a>
            </div>
            <p class="footer-description">
                ERPX ERP is designed to revolutionize how businesses operate.
            </p>
            <div class="social-icons">
                <a href="#" class="social-icon" aria-label="LinkedIn">
                    <img src="assets/links-icon/linkedin.svg" alt="LinkedIn">
                </a>
                <a href="#" class="social-icon" aria-label="Twitter">
                    <img src="assets/links-icon/twitter.svg" alt="Twitter">
                </a>
            </div>
        </div>

        <!-- Right Section: Navigation Columns -->
        <div class="footer-right">
            <!-- Products Column -->
            <div class="footer-column">
                <h3 class="footer-column-title"><a href="products.html">Products</a></h3>
                <ul class="footer-links">
                    <li><a href="products.html#hr-payroll">HR & Payroll</a></li>
                    <li><a href="products.html#crm">CRM</a></li>
                    <li><a href="products.html#work">Work</a></li>
                    <li><a href="products.html#files">Files</a></li>
                    <li><a href="products.html#sales">Sales</a></li>
                    <li><a href="products.html#support">Support</a></li>
                    <li><a href="products.html#email">Email</a></li>
                </ul>
            </div>

            <!-- Industries Column -->
            <div class="footer-column">
                <h3 class="footer-column-title"><a href="industries.html">Industries</a></h3>
                <ul class="footer-links">
                    <li><a href="industries.html#software-it">Software & IT</a></li>
                    <li><a href="industries.html#manufacturing">Manufacturing</a></li>
                    <li><a href="industries.html#bpo">BPO</a></li>
                    <li><a href="industries.html#accounting">Accounting</a></li>
                    <li><a href="industries.html#pharmacy">Pharmacy</a></li>
                </ul>
            </div>

            <!-- About Column (merged About + Company) -->
            <div class="footer-column">
                <h3 class="footer-column-title"><a href="about-us.html">About</a></h3>
                <ul class="footer-links">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Footer Bottom: Divider, Copyright -->
    <div class="footer-bottom container">
        <div class="footer-divider"></div>
        <p class="footer-copyright">© 2025 ERPX, Inc. All rights reserved.</p>
    </div>
    <img src="assets/logo/footer-bottom.png" alt="ERPX" class="footer-faded-image container">
</footer>
`;

function loadComponents() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Highlight active menu item
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === "index.html" && (linkHref === "./" || linkHref === "index.html"))) {
            link.classList.add('active');
        }
    });

    // Initialize mega menu close functionality after header is loaded
    if (typeof initMegaMenuClose === 'function') {
        initMegaMenuClose();
    }

    // Initialize mobile dropdowns (includes scroll-to-close functionality)
    if (typeof initMobileDropdowns === 'function') {
        initMobileDropdowns();
    }
}