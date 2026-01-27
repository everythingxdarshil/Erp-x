/**
 * FULLSCREEN SIDE-BY-SIDE MODAL HANDLER - ENHANCED
 * Manages the modal flow with animations, blurred background, and improved UX
 * Updated: Separate Email and Phone fields (both required)
 */

(function () {
    'use strict';

    // DOM Elements
    const fullscreenModal = document.getElementById('fullscreenModal');
    const closeModalBtn = document.getElementById('closeFullscreenModal');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const submitBtn = document.getElementById('submitUserDetails');
    const confirmBtn = document.getElementById('confirmSelection');
    const backBtn = document.getElementById('backToUserDetails');
    const summaryBackBtn = document.getElementById('summaryBackButton');

    // Views
    const formView = document.getElementById('userDetailsFormView');
    const summaryView = document.getElementById('userDetailsSummaryView');
    const confirmationPanel = document.getElementById('confirmationPanel');

    // Form inputs
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const companyInput = document.getElementById('companyName');

    // Error spans
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    // User data storage
    let userData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: ''
    };

    // ============================================
    // MODAL OPEN/CLOSE
    // ============================================

    /**
     * Open the fullscreen modal
     */
    function openModal() {
        fullscreenModal.classList.add('active');
        document.body.classList.add('modal-open');
        document.body.style.overflow = 'hidden';

        // Reset to initial state
        resetModal();

        // Populate modules from pricing data
        populateModules();
    }

    /**
     * Close the fullscreen modal
     */
    function closeModal() {
        fullscreenModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';

        // Reset form
        userDetailsForm.reset();
        resetModal();
    }

    /**
     * Reset modal to initial state
     */
    function resetModal() {
        // Show form view, hide summary
        formView.style.display = 'block';
        summaryView.style.display = 'none';

        // Remove any animation classes
        formView.classList.remove('slide-out-left');
        summaryView.classList.remove('slide-in-left');

        // Hide and disable confirmation panel
        confirmationPanel.classList.remove('visible');
        confirmationPanel.classList.remove('enabled');
        confirmationPanel.classList.remove('slide-in-right');
        confirmationPanel.classList.remove('slide-out-right');
        confirmBtn.disabled = true;

        // Clear errors
        clearErrors();
    }

    // ============================================
    // FORM VALIDATION
    // ============================================

    /**
     * Validate form inputs in real-time
     */
    function validateForm() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        let isValid = true;

        // Validate first name
        if (firstName.length === 0) {
            isValid = false;
        }

        // Validate last name
        if (lastName.length === 0) {
            isValid = false;
        }

        // Validate email
        if (email.length === 0) {
            isValid = false;
        }

        // Validate phone
        if (phone.length === 0) {
            isValid = false;
        }

        // Enable/disable submit button
        submitBtn.disabled = !isValid;

        return isValid;
    }

    /**
     * Validate individual field
     */
    function validateField(input, errorSpan, fieldName) {
        const value = input.value.trim();

        if (value.length === 0) {
            input.classList.add('error');
            errorSpan.textContent = `${fieldName} is required`;
            return false;
        }

        // Special validation for email field
        if (input === emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(value)) {
                input.classList.add('error');
                errorSpan.textContent = 'Please enter a valid email address';
                return false;
            }
        }

        // Special validation for phone field
        if (input === phoneInput) {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;

            if (!phoneRegex.test(value)) {
                input.classList.add('error');
                errorSpan.textContent = 'Please enter a valid phone number';
                return false;
            }

            // Check minimum length (at least 10 digits)
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length < 10) {
                input.classList.add('error');
                errorSpan.textContent = 'Phone number must be at least 10 digits';
                return false;
            }
        }

        input.classList.remove('error');
        errorSpan.textContent = '';
        return true;
    }

    /**
     * Clear all error messages
     */
    function clearErrors() {
        firstNameInput.classList.remove('error');
        lastNameInput.classList.remove('error');
        emailInput.classList.remove('error');
        phoneInput.classList.remove('error');
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
    }

    // ============================================
    // FORM SUBMISSION WITH ANIMATIONS
    // ============================================

    /**
     * Handle form submission with slider animation
     */
    function handleFormSubmit(e) {
        e.preventDefault();

        // Validate all fields
        const isFirstNameValid = validateField(firstNameInput, firstNameError, 'First name');
        const isLastNameValid = validateField(lastNameInput, lastNameError, 'Last name');
        const isEmailValid = validateField(emailInput, emailError, 'Email');
        const isPhoneValid = validateField(phoneInput, phoneError, 'Phone number');

        if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
            return;
        }

        // Store user data
        userData = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            company: companyInput.value.trim()
        };

        // Make right panel visible first
        confirmationPanel.classList.add('visible');

        // Small delay to ensure display:flex is applied before animation
        setTimeout(() => {
            // Trigger synchronized slide animations for both panels
            formView.classList.add('slide-out-left');
            confirmationPanel.classList.add('slide-in-right');

            // Wait for animation to complete, then show summary
            setTimeout(() => {
                showSummaryView();

                // Enable confirmation panel
                setTimeout(() => {
                    enableConfirmationPanel();
                }, 100);

                // Clean up animation classes after animation completes
                setTimeout(() => {
                    formView.classList.remove('slide-out-left');
                    confirmationPanel.classList.remove('slide-in-right');
                }, 500);
            }, 500);
        }, 50);
    }

    /**
     * Show summary view with user details (both email and phone)
     */
    function showSummaryView() {
        // Hide form, show summary
        formView.style.display = 'none';
        summaryView.style.display = 'block';

        // Populate summary
        document.getElementById('summaryFullName').textContent =
            `${userData.firstName} ${userData.lastName}`;

        // Display email
        document.getElementById('summaryEmail').textContent = userData.email;

        // Display phone
        document.getElementById('summaryPhone').textContent = userData.phone;

        // Display company if provided
        if (userData.company) {
            document.getElementById('summaryCompanyCard').style.display = 'block';
            document.getElementById('summaryCompany').textContent = userData.company;
        } else {
            document.getElementById('summaryCompanyCard').style.display = 'none';
        }
    }

    /**
     * Enable the confirmation panel with smooth transition
     */
    function enableConfirmationPanel() {
        confirmationPanel.classList.add('enabled');
        confirmBtn.disabled = false;
    }

    // ============================================
    // POPULATE MODULES (FIX: Show actual modules)
    // ============================================

    /**
     * Populate selected modules in confirmation panel
     */
    function populateModules() {
        const modulesList = document.getElementById('confirmModulesList');
        modulesList.innerHTML = '';

        // Get enabled modules from pricing data
        const enabledModules = getEnabledModules();

        if (enabledModules.length === 0) {
            modulesList.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem 0;">No modules selected</p>';
            return;
        }

        // Create module items
        enabledModules.forEach(module => {
            const moduleItem = document.createElement('div');
            moduleItem.className = 'module-item';
            moduleItem.innerHTML = `
                <div class="module-info">
                    <span class="module-name">${module.name}</span>
                    <span class="module-users">Users × ${module.users}</span>
                </div>
                <span class="module-price">₹${module.price.toFixed(2)}</span>
            `;
            modulesList.appendChild(moduleItem);
        });

        // Update billing info
        updateBillingInfo(enabledModules);
    }

    /**
     * Get enabled modules from the pricing table
     */
    function getEnabledModules() {
        const modules = [];

        // Check if modulesData and state exist (from pricing-logic.js)
        if (typeof modulesData !== 'undefined' && typeof state !== 'undefined') {
            modulesData.forEach(module => {
                const modState = state.modules[module.slug];
                if (modState && modState.enabled) {
                    // Use current billing cycle to get correct price
                    const pricePerUser = state.billingCycle === 'monthly'
                        ? module.price_per_user_monthly
                        : module.price_per_user_yearly;

                    modules.push({
                        name: module.name,
                        users: modState.users,
                        price: pricePerUser * modState.users
                    });
                }
            });
        }

        return modules;
    }

    /**
     * Update billing information
     */
    function updateBillingInfo(modules) {
        // Get billing cycle from the toggle checkbox
        const billingToggle = document.getElementById('billingToggle');
        const billingCycle = (billingToggle && billingToggle.checked) ? 'yearly' : 'monthly';
        const billingCycleText = billingCycle === 'monthly' ? 'Monthly' : 'Yearly';

        document.getElementById('confirmBillingCycle').textContent = billingCycleText;

        // Calculate total
        let total = 0;
        modules.forEach(module => {
            total += module.price;
        });

        // Yearly prices already include the discount in pricing-logic.js
        // Just multiply by 12 for yearly if using monthly price
        if (billingCycle === 'yearly' && typeof state !== 'undefined' && state.billingCycle === 'monthly') {
            total = total * 12 * 0.9; // 10% discount
        }

        document.getElementById('confirmGrandTotal').textContent = `₹${total.toFixed(2)}`;
    }

    // ============================================
    // CONFIRMATION
    // ============================================

    /**
     * Handle confirmation and proceed
     */
    function handleConfirmation() {
        // Collect all data
        const orderData = {
            user: userData,
            modules: getEnabledModules(),
            billingCycle: document.querySelector('input[name="billingCycle"]:checked')?.value || 'monthly',
            total: document.getElementById('confirmGrandTotal').textContent
        };

        console.log('Order Data:', orderData);

        // Here you would typically send this data to your backend
        // For now, we'll just show a success message and close the modal

        alert('Thank you! Your request has been submitted successfully. Our team will contact you shortly.');
        closeModal();
    }

    /**
     * Handle back button - return to form without losing data
     */
    function handleBackToForm() {
        // Trigger reverse animations
        confirmationPanel.classList.add('slide-out-right');
        summaryView.classList.add('slide-in-left');

        // Wait for animation to complete
        setTimeout(() => {
            // Hide summary, show form
            summaryView.style.display = 'none';
            formView.style.display = 'block';

            // Hide and disable confirmation panel
            confirmationPanel.classList.remove('visible');
            confirmationPanel.classList.remove('enabled');
            confirmBtn.disabled = true;

            // Clean up animation classes
            setTimeout(() => {
                confirmationPanel.classList.remove('slide-out-right');
                summaryView.classList.remove('slide-in-left');
            }, 500);
        }, 500);

        // Data is preserved in userData object and form inputs
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    // Form input listeners for real-time validation
    firstNameInput.addEventListener('input', validateForm);
    lastNameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);

    // Form submission
    userDetailsForm.addEventListener('submit', handleFormSubmit);

    // Modal close
    closeModalBtn.addEventListener('click', closeModal);

    // Close on overlay click
    fullscreenModal.addEventListener('click', function (e) {
        if (e.target === fullscreenModal) {
            closeModal();
        }
    });

    // Confirmation button
    confirmBtn.addEventListener('click', handleConfirmation);

    // Back buttons
    if (backBtn) {
        backBtn.addEventListener('click', handleBackToForm);
    }
    if (summaryBackBtn) {
        summaryBackBtn.addEventListener('click', handleBackToForm);
    }

    // Listen for "Get Started" button clicks
    document.addEventListener('click', function (e) {
        // Check if clicked element or its parent is a Get Started button
        const target = e.target.closest('.summary-action button, .btn-get-started, button[onclick*="openModal"]');
        if (target && (target.textContent.includes('Get Started') || target.classList.contains('btn-get-started'))) {
            e.preventDefault();
            openModal();
        }
    });

    // Make openModal globally accessible
    window.openFullscreenModal = openModal;
    window.closeFullscreenModal = closeModal;

    console.log('Enhanced fullscreen modal handler initialized (Email + Phone required)');
})();
