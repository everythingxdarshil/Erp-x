/**
 * Pricing Logic for ERPX Pricing Configuration Page
 * Handles module data, state management, pricing calculations, and DOM rendering.
 */

// Data Source
const modulesData = [
    {
        name: 'HR & Payroll',
        slug: 'hrm',
        description: 'Human Resource Management System',
        icon: 'briefcase-user',
        price_per_user_monthly: 5.00,
        price_per_user_yearly: 50.00,
        features: [
            'Employee Management',
            'Attendance Tracking',
            'Payroll Processing',
            'Leave Management',
            'Performance Reviews'
        ]
    },
    {
        name: 'CRM',
        slug: 'crm',
        description: 'Customer Relationship Management',
        icon: 'users',
        price_per_user_monthly: 8.00,
        price_per_user_yearly: 80.00,
        features: [
            'Lead Management',
            'Pipeline View',
            'Contact History',
            'Email Integration',
            'Sales Reports'
        ]
    },
    {
        name: 'Work',
        slug: 'work',
        description: 'Task & Project Management - Create, assign, and track tasks and projects',
        icon: 'check-square',
        price_per_user_monthly: 3.00,
        price_per_user_yearly: 30.00,
        features: [
            'Task Creation',
            'Task Assignment',
            'Project Management',
            'Kanban Boards',
            'Time Tracking'
        ]
    },
    {
        name: 'Files',
        slug: 'files',
        description: 'File Management - Store, organize, and share files securely',
        icon: 'folder',
        price_per_user_monthly: 4.00,
        price_per_user_yearly: 40.00,
        features: [
            'File Storage',
            'File Sharing',
            'Version Control',
            'Access Control',
            'Search & Filter'
        ]
    },
    {
        name: 'Sales',
        slug: 'sales',
        description: 'Sales & Finance - Manage invoices, quotations, expenses, and financial reports',
        icon: 'calculator',
        price_per_user_monthly: 10.00,
        price_per_user_yearly: 100.00,
        features: [
            'Invoicing',
            'Quotations',
            'Expense Tracking',
            'Financial Reports',
            'Tax Management',
            'Bank Reconciliation'
        ]
    },
    {
        name: 'Support',
        slug: 'support',
        description: 'Customer Support - Manage tickets, support requests, and customer inquiries',
        icon: 'headphones',
        price_per_user_monthly: 7.00,
        price_per_user_yearly: 70.00,
        features: [
            'Ticket Management',
            'Live Chat',
            'Knowledge Base',
            'SLA Management',
            'Customer Satisfaction'
        ]
    },
    {
        name: 'Email',
        slug: 'email',
        description: 'Email Marketing - Create, send, and track email campaigns',
        icon: 'mail',
        price_per_user_monthly: 5.00,
        price_per_user_yearly: 50.00,
        features: [
            'Email Campaigns',
            'Email Templates',
            'Contact Lists',
            'Analytics & Reports',
            'Automation'
        ]
    }
];

// Icons map
const iconMap = {
    'briefcase-user': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    'users': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    'check-square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
    'folder': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
    'calculator': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>',
    'headphones': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
    'mail': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg>'
};

// Fallback icon
const defaultIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';

// Application State
const state = {
    billingCycle: 'monthly', // 'monthly' or 'yearly'
    modules: {}
};

// Initialize State
modulesData.forEach(mod => {
    state.modules[mod.slug] = {
        enabled: false,
        users: 1,   // Default users to 1
        storage: 0  // Default storage to 0
    };
});

// --- Render Functions ---

function renderTable() {
    const tbody = document.getElementById('pricingTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    modulesData.forEach(module => {
        const modState = state.modules[module.slug];
        const tr = document.createElement('tr');
        tr.className = `pricing-row ${modState.enabled ? 'enabled' : 'disabled'}`;
        tr.dataset.slug = module.slug;

        // Prices based on cycle
        const priceUser = state.billingCycle === 'monthly' ? module.price_per_user_monthly : module.price_per_user_yearly;
        const cycleLabel = state.billingCycle === 'monthly' ? 'mo' : 'yr';

        tr.innerHTML = `
            <td class="col-module">
                <div class="module-info">
                    <div class="module-icon">
                        ${iconMap[module.icon] || defaultIcon}
                    </div>
                    <div class="module-details">
                        <h4>
                            ${module.name}
                            ${module.recommended ? '<span class="recommended-badge">Most Popular</span>' : ''}
                        </h4>
                    </div>
                </div>
            </td>
            <td class="col-pricing">
                <div class="price-display">
                    <div class="price-item">
                        ₹${priceUser.toFixed(2)} <span class="unit">/user/${cycleLabel}</span>
                    </div>
                </div>
            </td>
            <td class="col-inputs">
                <div class="input-control-group">
                    <div class="input-wrapper">
                        <label>Users</label>
                        <div class="stepper-control">
                            <button class="stepper-btn" onclick="decrementValue('${module.slug}', 'users')" ${modState.users <= 1 ? 'disabled' : ''}>−</button>
                            <span class="stepper-value" id="value-${module.slug}-users">${modState.users}</span>
                            <button class="stepper-btn" onclick="incrementValue('${module.slug}', 'users')">+</button>
                        </div>
                        <input type="number" class="number-input" min="1" value="${modState.users}" 
                               oninput="updateModuleInput('${module.slug}', 'users', this.value)"
                               onchange="updateModuleInput('${module.slug}', 'users', this.value)">
                    </div>
                </div>
            </td>
            <td class="col-total">
                <div class="module-total-price" id="total-${module.slug}">
                    ₹0.00
                </div>
            </td>
            <td class="col-action" style="text-align: right;">
                <label class="toggle-switch">
                    <input type="checkbox" ${modState.enabled ? 'checked' : ''} onchange="toggleModule('${module.slug}', this)">
                    <span class="slider"></span>
                </label>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// --- Render Mobile Cards ---

function renderMobileCards() {
    const cardsContainer = document.getElementById('pricingMobileCards');
    if (!cardsContainer) return;

    cardsContainer.innerHTML = '';

    modulesData.forEach(module => {
        const modState = state.modules[module.slug];

        // Prices based on cycle
        const priceUser = state.billingCycle === 'monthly' ? module.price_per_user_monthly : module.price_per_user_yearly;
        const cycleLabel = state.billingCycle === 'monthly' ? 'month' : 'year';

        // Create card element
        const card = document.createElement('div');
        card.className = `pricing-module-card ${modState.enabled ? 'enabled' : ''}`;
        card.dataset.slug = module.slug;

        card.innerHTML = `
            <!-- Card Header -->
            <div class="card-header">
                <div class="card-header-left">
                    <div class="card-module-icon">
                        ${iconMap[module.icon] || defaultIcon}
                    </div>
                    <h3 class="card-module-name">${module.name}</h3>
                </div>
                <div class="card-toggle-wrapper">
                    <label class="card-toggle-switch">
                        <input type="checkbox" ${modState.enabled ? 'checked' : ''} onchange="toggleModuleCard('${module.slug}', this)">
                        <span class="card-toggle-slider"></span>
                    </label>
                </div>
            </div>

            <!-- Card Body -->
            <div class="card-body">
                <!-- Pricing Section -->
                <div class="card-pricing-section">
                    <span class="card-section-label">Pricing</span>
                    <div class="card-pricing-items">
                        <div class="card-price-item">
                            <span class="card-price-label">Per User</span>
                            <span class="card-price-value">₹${priceUser.toFixed(2)} / ${cycleLabel}</span>
                        </div>
                    </div>
                </div>

                <!-- Configuration Section -->
                <div class="card-config-section">
                    <span class="card-section-label">Configuration</span>
                    <div class="card-config-controls">
                        <!-- Users Control -->
                        <div class="card-control-row">
                            <span class="card-control-label">Users</span>
                            <div class="card-stepper">
                                <button class="card-stepper-btn" onclick="decrementValueCard('${module.slug}', 'users')" ${modState.users <= 1 ? 'disabled' : ''}>−</button>
                                <span class="card-stepper-value" id="card-value-${module.slug}-users">${modState.users}</span>
                                <button class="card-stepper-btn" onclick="incrementValueCard('${module.slug}', 'users')">+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Module Total Section -->
                <div class="card-total-section">
                    <div class="card-total-row">
                        <span class="card-total-label">Module Total</span>
                        <span class="card-total-value" id="card-total-${module.slug}">₹0.00</span>
                    </div>
                </div>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
}

// --- Logic Functions ---

window.toggleModule = function (slug, checkboxElement) {
    // Get the checked state from the checkbox
    const isEnabled = checkboxElement.checked;
    state.modules[slug].enabled = isEnabled;

    const row = document.querySelector(`tr[data-slug="${slug}"]`);
    if (row) {
        if (isEnabled) {
            row.classList.add('enabled');
            row.classList.remove('disabled');
        } else {
            row.classList.remove('enabled');
        }
    }

    updateCalculations();
    // Update summary bar visibility based on enabled modules
    checkEnabledModules();
};

// Card-specific toggle function
window.toggleModuleCard = function (slug, checkboxElement) {
    const isEnabled = checkboxElement.checked;
    state.modules[slug].enabled = isEnabled;

    // Update card state
    const card = document.querySelector(`.pricing-module-card[data-slug="${slug}"]`);
    if (card) {
        if (isEnabled) {
            card.classList.add('enabled');
        } else {
            card.classList.remove('enabled');
        }
    }

    // Update table row state (if table exists)
    const row = document.querySelector(`tr[data-slug="${slug}"]`);
    if (row) {
        if (isEnabled) {
            row.classList.add('enabled');
            row.classList.remove('disabled');
        } else {
            row.classList.remove('enabled');
        }
    }

    // Sync table toggle if it exists
    const tableToggle = row?.querySelector('input[type="checkbox"]');
    if (tableToggle) {
        tableToggle.checked = isEnabled;
    }

    updateCalculations();
    checkEnabledModules();
};

// Card-specific increment function
window.incrementValueCard = function (slug, field) {
    const currentValue = state.modules[slug][field];
    const newValue = currentValue + 1;
    state.modules[slug][field] = newValue;

    // Update card display
    const cardValueDisplay = document.getElementById(`card-value-${slug}-${field}`);
    if (cardValueDisplay) {
        cardValueDisplay.textContent = newValue;
        cardValueDisplay.classList.remove('animate-value');
        void cardValueDisplay.offsetWidth;
        cardValueDisplay.classList.add('animate-value');
    }

    // Update table display (if exists)
    const tableValueDisplay = document.getElementById(`value-${slug}-${field}`);
    if (tableValueDisplay) {
        tableValueDisplay.textContent = newValue;
    }

    // Update table input (if exists)
    const tableInput = document.querySelector(`input[onchange*="'${slug}', '${field}'"]`);
    if (tableInput) {
        tableInput.value = newValue;
    }

    // Auto-enable module when incrementing
    if (!state.modules[slug].enabled) {
        state.modules[slug].enabled = true;

        // Update card toggle UI
        const card = document.querySelector(`.pricing-module-card[data-slug="${slug}"]`);
        if (card) {
            const cardCheckbox = card.querySelector('input[type="checkbox"]');
            if (cardCheckbox) {
                cardCheckbox.checked = true;
            }
            card.classList.add('enabled');
        }

        // Update table toggle UI (if exists)
        const row = document.querySelector(`tr[data-slug="${slug}"]`);
        if (row) {
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = true;
            }
            row.classList.add('enabled');
            row.classList.remove('disabled');
        }

        // Update summary bar visibility
        checkEnabledModules();
    }

    // Update button states
    updateCardStepperButtons(slug, field);
    updateStepperButtons(slug, field);
    updateCalculations();
};

// Card-specific decrement function
window.decrementValueCard = function (slug, field) {
    const currentValue = state.modules[slug][field];
    const minValue = field === 'users' ? 1 : 0;

    if (currentValue > minValue) {
        const newValue = currentValue - 1;
        state.modules[slug][field] = newValue;

        // Update card display
        const cardValueDisplay = document.getElementById(`card-value-${slug}-${field}`);
        if (cardValueDisplay) {
            cardValueDisplay.textContent = newValue;
            cardValueDisplay.classList.remove('animate-value');
            void cardValueDisplay.offsetWidth;
            cardValueDisplay.classList.add('animate-value');
        }

        // Update table display (if exists)
        const tableValueDisplay = document.getElementById(`value-${slug}-${field}`);
        if (tableValueDisplay) {
            tableValueDisplay.textContent = newValue;
        }

        // Update table input (if exists)
        const tableInput = document.querySelector(`input[onchange*="'${slug}', '${field}'"]`);
        if (tableInput) {
            tableInput.value = newValue;
        }

        // Update button states
        updateCardStepperButtons(slug, field);
        updateStepperButtons(slug, field);
        updateCalculations();
    }
};

// Update card stepper button states
function updateCardStepperButtons(slug, field) {
    const currentValue = state.modules[slug][field];
    const minValue = field === 'users' ? 1 : 0;

    const card = document.querySelector(`.pricing-module-card[data-slug="${slug}"]`);
    if (card) {
        const controlRow = card.querySelector(`.card-control-row:has(#card-value-${slug}-${field})`);
        if (controlRow) {
            const decrementBtn = controlRow.querySelector('.card-stepper-btn:first-of-type');
            if (decrementBtn) {
                if (currentValue <= minValue) {
                    decrementBtn.setAttribute('disabled', 'disabled');
                } else {
                    decrementBtn.removeAttribute('disabled');
                }
            }
        }
    }
}

window.updateModuleInput = function (slug, field, value) {
    const val = parseInt(value) || 0;
    state.modules[slug][field] = val < 0 ? 0 : val;

    // Auto-enable module when user enters a value
    if (val > 0 && !state.modules[slug].enabled) {
        state.modules[slug].enabled = true;

        // Update toggle UI
        const row = document.querySelector(`tr[data-slug="${slug}"]`);
        if (row) {
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = true;
            }
            row.classList.add('enabled');
            row.classList.remove('disabled');
        }

        // Update card toggle UI (mobile)
        const card = document.querySelector(`.pricing-module-card[data-slug="${slug}"]`);
        if (card) {
            const cardCheckbox = card.querySelector('input[type="checkbox"]');
            if (cardCheckbox) {
                cardCheckbox.checked = true;
            }
            card.classList.add('enabled');
        }

        // Update summary bar visibility
        checkEnabledModules();
    }

    updateCalculations();
};

// Stepper control functions
window.incrementValue = function (slug, field) {
    const currentValue = state.modules[slug][field];
    const newValue = currentValue + 1;
    state.modules[slug][field] = newValue;

    // Update stepper display
    const valueDisplay = document.getElementById(`value-${slug}-${field}`);
    if (valueDisplay) {
        valueDisplay.textContent = newValue;
    }

    // Update hidden input
    const input = document.querySelector(`input[onchange*="'${slug}', '${field}'"]`);
    if (input) {
        input.value = newValue;
    }

    // Auto-enable module when incrementing
    if (!state.modules[slug].enabled) {
        state.modules[slug].enabled = true;

        // Update toggle UI
        const row = document.querySelector(`tr[data-slug="${slug}"]`);
        if (row) {
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = true;
            }
            row.classList.add('enabled');
            row.classList.remove('disabled');
        }

        // Update card toggle UI (mobile)
        const card = document.querySelector(`.pricing-module-card[data-slug="${slug}"]`);
        if (card) {
            const cardCheckbox = card.querySelector('input[type="checkbox"]');
            if (cardCheckbox) {
                cardCheckbox.checked = true;
            }
            card.classList.add('enabled');
        }

        // Update summary bar visibility
        checkEnabledModules();
    }

    // Update button states
    updateStepperButtons(slug, field);
    updateCalculations();
};

window.decrementValue = function (slug, field) {
    const currentValue = state.modules[slug][field];
    const minValue = field === 'users' ? 1 : 0;

    if (currentValue > minValue) {
        const newValue = currentValue - 1;
        state.modules[slug][field] = newValue;

        // Update stepper display
        const valueDisplay = document.getElementById(`value-${slug}-${field}`);
        if (valueDisplay) {
            valueDisplay.textContent = newValue;
        }

        // Update hidden input
        const input = document.querySelector(`input[onchange*="'${slug}', '${field}'"]`);
        if (input) {
            input.value = newValue;
        }

        // Update button states
        updateStepperButtons(slug, field);
        updateCalculations();
    }
};

function updateStepperButtons(slug, field) {
    const currentValue = state.modules[slug][field];
    const minValue = field === 'users' ? 1 : 0;

    // Find the decrement button
    const row = document.querySelector(`tr[data-slug="${slug}"]`);
    if (row) {
        const decrementBtn = row.querySelector(`.input-wrapper:has(#value-${slug}-${field}) .stepper-btn:first-child`);
        if (decrementBtn) {
            if (currentValue <= minValue) {
                decrementBtn.setAttribute('disabled', 'disabled');
                decrementBtn.classList.add('disabled');
            } else {
                decrementBtn.removeAttribute('disabled');
                decrementBtn.classList.remove('disabled');
            }
        }
    }
}

window.toggleBilling = function (checkbox) {
    state.billingCycle = checkbox.checked ? 'yearly' : 'monthly';
    // Update labels
    document.getElementById('lblMonthly').classList.toggle('active', !checkbox.checked);
    document.getElementById('lblYearly').classList.toggle('active', checkbox.checked);

    renderTable(); // Re-render to update unit prices
    renderMobileCards(); // Re-render cards to update unit prices
    updateCalculations();
};

window.setBilling = function (cycle) {
    state.billingCycle = cycle;
    const checkbox = document.getElementById('billingToggle');
    checkbox.checked = (cycle === 'yearly');
    toggleBilling(checkbox);
};

function updateCalculations() {
    let totalUsers = 0;
    let grandTotal = 0;

    modulesData.forEach(module => {
        const modState = state.modules[module.slug];

        // Always calculate/simulate pricing
        const priceUser = state.billingCycle === 'monthly' ? module.price_per_user_monthly : module.price_per_user_yearly;

        const userCost = modState.users * priceUser;
        const modTotal = userCost;

        // Update Row Total UI (Always) - both table and card
        const totalEl = document.getElementById(`total-${module.slug}`);
        if (totalEl) {
            // Check if value changed to animate
            if (totalEl.textContent !== `₹${modTotal.toFixed(2)}`) {
                totalEl.textContent = `₹${modTotal.toFixed(2)}`;
                totalEl.classList.remove('animate-value');
                void totalEl.offsetWidth;
                totalEl.classList.add('animate-value');
            }
        }

        // Update Card Total UI (if card exists)
        const cardTotalEl = document.getElementById(`card-total-${module.slug}`);
        if (cardTotalEl) {
            if (cardTotalEl.textContent !== `₹${modTotal.toFixed(2)}`) {
                cardTotalEl.textContent = `₹${modTotal.toFixed(2)}`;
                cardTotalEl.classList.remove('animate-value');
                void cardTotalEl.offsetWidth;
                cardTotalEl.classList.add('animate-value');
            }
        }

        // Add to Grand Total only if enabled
        if (modState.enabled) {
            totalUsers += modState.users;
            grandTotal += modTotal;
        }
    });

    // Update Header
    updateHeaderValue('headerTotalUsers', totalUsers);
    updateHeaderValue('headerGrandTotal', '₹' + grandTotal.toFixed(2));
}

function updateHeaderValue(id, value) {
    const el = document.getElementById(id);
    if (el && el.textContent !== String(value)) {
        el.textContent = value;
        el.classList.remove('animate-value');
        void el.offsetWidth;
        el.classList.add('animate-value');
    }
}

// ============================================
// Summary Bar Visibility Control
// ============================================

const summaryBar = document.getElementById('pricingSummaryBar');

// Function to check if any modules are enabled
function checkEnabledModules() {
    if (!summaryBar) return;

    // Check if we're in mobile view
    const isMobileView = window.innerWidth <= 768;

    if (isMobileView) {
        // On mobile, always show the summary bar
        summaryBar.classList.remove('hidden');
    } else {
        // On desktop, show only if at least one module is enabled
        const hasEnabledModules = Object.values(state.modules).some(mod => mod.enabled);

        if (hasEnabledModules) {
            summaryBar.classList.remove('hidden');
        } else {
            summaryBar.classList.add('hidden');
        }
    }
}

// Initialize everything after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    renderMobileCards(); // Render mobile cards as well
    updateCalculations();

    // Initialize summary bar state - start hidden
    const bar = document.getElementById('pricingSummaryBar');
    if (bar) {
        // Check if any modules are enabled on load
        checkEnabledModules();
    }
});

// ============================================
// Scroll Logic for Sticky Summary Bar
// ============================================

let pkLastScrollY = window.scrollY;
let scrollThrottleTimer = null;

function handleScrollLogic() {
    const summaryBar = document.getElementById('pricingSummaryBar');

    // Safety check
    if (!summaryBar || summaryBar.classList.contains('hidden')) return;

    // Detect if we're in mobile view (cards) or desktop view (table)
    const isMobileView = window.innerWidth <= 768;

    if (isMobileView) {
        // Mobile: Use the pricing cards container
        const cardsContainer = document.getElementById('pricingMobileCards');
        if (!cardsContainer) return;

        const rect = cardsContainer.getBoundingClientRect();
        const stickyTriggerPoint = window.innerHeight - 16; // 16px margin from bottom (matching card margin)

        // When cards container bottom comes up to trigger point, dock the summary bar
        if (rect.bottom <= stickyTriggerPoint) {
            summaryBar.classList.add('is-docked');
        } else {
            summaryBar.classList.remove('is-docked');
        }
    } else {
        // Desktop: Use the table container (original logic)
        const tableContainer = document.querySelector('.pricing-calculator-section .container');
        if (!tableContainer) return;

        const rect = tableContainer.getBoundingClientRect();
        const stickyTriggerPoint = window.innerHeight - 24; // 24px margin from bottom

        // When container bottom comes up to trigger point, dock the summary bar
        if (rect.bottom <= stickyTriggerPoint) {
            summaryBar.classList.add('is-docked');
        } else {
            summaryBar.classList.remove('is-docked');
        }
    }
}

// Throttled scroll handler to prevent excessive calls
function throttledScrollHandler() {
    if (scrollThrottleTimer) return;

    scrollThrottleTimer = setTimeout(() => {
        handleScrollLogic();
        scrollThrottleTimer = null;
    }, 16); // ~60fps
}

document.addEventListener('scroll', throttledScrollHandler, { passive: true });
window.addEventListener('resize', () => {
    handleScrollLogic();
    checkEnabledModules(); // Update summary bar visibility on resize
});

// Initial check
document.addEventListener('DOMContentLoaded', () => {
    // Run once to set initial state
    setTimeout(handleScrollLogic, 100);
});
