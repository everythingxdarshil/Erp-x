/* ============================================
   MODAL HANDLER - TWO-STEP FLOW
   ============================================ */

// State Management
let userData = {
    firstName: '',
    lastName: '',
    contact: '',
    companyName: ''
};

// DOM Elements
const getStartedBtn = document.getElementById('getStartedBtn');
const userDetailsModal = document.getElementById('userDetailsModal');
const confirmationModal = document.getElementById('confirmationModal');
const userDetailsForm = document.getElementById('userDetailsForm');
const submitBtn = document.getElementById('submitUserDetails');

// Input Fields
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const contactInput = document.getElementById('contact');
const companyNameInput = document.getElementById('companyName');

// Error Elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const contactError = document.getElementById('contactError');

// Close Buttons
const closeUserDetailsBtn = document.getElementById('closeUserDetailsModal');
const closeConfirmationBtn = document.getElementById('closeConfirmationModal');
const backBtn = document.getElementById('backToUserDetails');
const confirmBtn = document.getElementById('confirmSelection');

// ============================================
// VALIDATION FUNCTIONS
// ============================================

function validateName(name, errorElement, fieldName) {
    const trimmedName = name.trim();

    if (!trimmedName) {
        errorElement.textContent = `${fieldName} is required`;
        return false;
    }

    if (trimmedName.length < 2) {
        errorElement.textContent = `${fieldName} must be at least 2 characters`;
        return false;
    }

    if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
        errorElement.textContent = `${fieldName} contains invalid characters`;
        return false;
    }

    errorElement.textContent = '';
    return true;
}

function validateContact(contact, errorElement) {
    const trimmedContact = contact.trim();

    if (!trimmedContact) {
        errorElement.textContent = 'Contact is required';
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone validation (Indian format with optional +91 or country code)
    const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?\d{10}$/;

    const isValidEmail = emailRegex.test(trimmedContact);
    const isValidPhone = phoneRegex.test(trimmedContact.replace(/[-.\s]/g, ''));

    if (!isValidEmail && !isValidPhone) {
        errorElement.textContent = 'Please enter a valid email or phone number';
        return false;
    }

    errorElement.textContent = '';
    return true;
}

function checkFormValidity() {
    const isFirstNameValid = validateName(firstNameInput.value, firstNameError, 'First name');
    const isLastNameValid = validateName(lastNameInput.value, lastNameError, 'Last name');
    const isContactValid = validateContact(contactInput.value, contactError);

    const isFormValid = isFirstNameValid && isLastNameValid && isContactValid;
    submitBtn.disabled = !isFormValid;

    return isFormValid;
}

// ============================================
// EVENT LISTENERS FOR VALIDATION
// ============================================

firstNameInput.addEventListener('input', () => {
    firstNameInput.classList.remove('error');
    validateName(firstNameInput.value, firstNameError, 'First name');
    checkFormValidity();
});

firstNameInput.addEventListener('blur', () => {
    const isValid = validateName(firstNameInput.value, firstNameError, 'First name');
    if (!isValid) {
        firstNameInput.classList.add('error');
    }
});

lastNameInput.addEventListener('input', () => {
    lastNameInput.classList.remove('error');
    validateName(lastNameInput.value, lastNameError, 'Last name');
    checkFormValidity();
});

lastNameInput.addEventListener('blur', () => {
    const isValid = validateName(lastNameInput.value, lastNameError, 'Last name');
    if (!isValid) {
        lastNameInput.classList.add('error');
    }
});

contactInput.addEventListener('input', () => {
    contactInput.classList.remove('error');
    validateContact(contactInput.value, contactError);
    checkFormValidity();
});

contactInput.addEventListener('blur', () => {
    const isValid = validateContact(contactInput.value, contactError);
    if (!isValid) {
        contactInput.classList.add('error');
    }
});

// ============================================
// MODAL CONTROL FUNCTIONS
// ============================================

function openModal(modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Focus first input for accessibility
    setTimeout(() => {
        const firstInput = modal.querySelector('input:not([type="hidden"])');
        if (firstInput) {
            firstInput.focus();
        }
    }, 300);
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function closeAllModals() {
    closeModal(userDetailsModal);
    closeModal(confirmationModal);
}

// ============================================
// GET SELECTED MODULES DATA
// ============================================

function getSelectedModules() {
    const modules = [];

    // Check if pricing-logic state exists (defined in pricing-logic.js)
    if (typeof state === 'undefined' || typeof modulesData === 'undefined') {
        console.warn('Pricing logic not loaded');
        return modules;
    }

    // Iterate through the modulesData array
    modulesData.forEach(module => {
        const modState = state.modules[module.slug];

        // Only include if enabled
        if (modState && modState.enabled) {
            // Get price based on current billing cycle
            const pricePerUser = state.billingCycle === 'monthly'
                ? module.price_per_user_monthly
                : module.price_per_user_yearly;

            const userCount = modState.users || 1;
            const storageCount = modState.storage || 0;

            // Calculate module total
            const moduleTotal = pricePerUser * userCount;

            modules.push({
                name: module.name,
                pricePerUser: pricePerUser,
                userCount: userCount,
                storageCount: storageCount,
                total: moduleTotal
            });
        }
    });

    return modules;
}

function getBillingCycle() {
    // Check if state exists from pricing-logic.js
    if (typeof state !== 'undefined') {
        return state.billingCycle === 'yearly' ? 'Yearly (-10%)' : 'Monthly';
    }

    // Fallback to DOM
    const billingToggle = document.getElementById('billingToggle');
    return billingToggle && billingToggle.checked ? 'Yearly (-10%)' : 'Monthly';
}

function getGrandTotal() {
    const grandTotalElement = document.getElementById('headerGrandTotal');
    return grandTotalElement ? grandTotalElement.textContent.trim() : '₹0.00';
}

// ============================================
// POPULATE CONFIRMATION MODAL
// ============================================

function populateConfirmationModal() {
    // User Details
    document.getElementById('confirmFullName').textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById('confirmContact').textContent = userData.contact;

    // Company (optional)
    if (userData.companyName && userData.companyName.trim()) {
        document.getElementById('confirmCompany').textContent = userData.companyName;
        document.getElementById('companyDetailContainer').style.display = 'block';
    } else {
        document.getElementById('companyDetailContainer').style.display = 'none';
    }

    // Selected Modules
    const selectedModules = getSelectedModules();
    const modulesList = document.getElementById('confirmModulesList');
    modulesList.innerHTML = '';

    if (selectedModules.length === 0) {
        modulesList.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No modules selected</p>';
    } else {
        selectedModules.forEach(module => {
            const moduleItem = document.createElement('div');
            moduleItem.className = 'module-item';

            let detailsText = `Users × ${module.userCount}`;
            if (module.storageCount > 0) {
                detailsText += ` | Storage: ${module.storageCount} GB`;
            }

            moduleItem.innerHTML = `
                <div class="module-info">
                    <div class="module-name">${module.name}</div>
                    <div class="module-details">${detailsText}</div>
                </div>
                <div class="module-total">₹${module.total.toFixed(2)}</div>
            `;

            modulesList.appendChild(moduleItem);
        });
    }

    // Billing Cycle
    document.getElementById('confirmBillingCycle').textContent = getBillingCycle();

    // Grand Total
    document.getElementById('confirmGrandTotal').textContent = getGrandTotal();
}

// ============================================
// STEP 1: OPEN USER DETAILS MODAL
// ============================================

getStartedBtn.addEventListener('click', () => {
    // Check if any modules are selected
    const selectedModules = getSelectedModules();

    if (selectedModules.length === 0) {
        alert('Please select at least one module before proceeding.');
        return;
    }

    openModal(userDetailsModal);
});

// ============================================
// STEP 1: FORM SUBMISSION
// ============================================

userDetailsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Final validation
    if (!checkFormValidity()) {
        return;
    }

    // Save user data
    userData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        contact: contactInput.value.trim(),
        companyName: companyNameInput.value.trim()
    };

    // Close Step 1 modal
    closeModal(userDetailsModal);

    // Populate and open Step 2 modal
    setTimeout(() => {
        populateConfirmationModal();
        openModal(confirmationModal);
    }, 300);
});

// ============================================
// STEP 2: NAVIGATION BUTTONS
// ============================================

// Back to Step 1
backBtn.addEventListener('click', () => {
    closeModal(confirmationModal);
    setTimeout(() => {
        openModal(userDetailsModal);
    }, 300);
});

// Confirm and Proceed
confirmBtn.addEventListener('click', () => {
    // Get all data
    const finalData = {
        user: userData,
        modules: getSelectedModules(),
        billingCycle: getBillingCycle(),
        total: getGrandTotal()
    };

    // Log data (in production, this would be sent to a server)
    console.log('User Confirmation Data:', finalData);

    // Show success message
    alert(`Thank you, ${userData.firstName}! Your selection has been confirmed.\n\nTotal: ${finalData.total}\n\nWe'll contact you shortly at ${userData.contact}`);

    // Close modal
    closeAllModals();

    // Optional: Redirect to confirmation page or reset form
    // window.location.href = 'confirmation.html';
});

// ============================================
// CLOSE MODAL BUTTONS
// ============================================

closeUserDetailsBtn.addEventListener('click', () => {
    closeModal(userDetailsModal);
});

closeConfirmationBtn.addEventListener('click', () => {
    closeModal(confirmationModal);
});

// Close modal when clicking outside
userDetailsModal.addEventListener('click', (e) => {
    if (e.target === userDetailsModal) {
        closeModal(userDetailsModal);
    }
});

confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
        closeModal(confirmationModal);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (confirmationModal.classList.contains('active')) {
            closeModal(confirmationModal);
        } else if (userDetailsModal.classList.contains('active')) {
            closeModal(userDetailsModal);
        }
    }
});

// ============================================
// INITIALIZE
// ============================================

// Disable submit button on load
submitBtn.disabled = true;

console.log('✅ Modal system initialized');
