// ==================== Theme Toggle ====================
document.addEventListener('DOMContentLoaded', () => {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ==================== Form Validation ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const inputs = {
            name: document.getElementById('nameInput'),
            email: document.getElementById('emailInput'),
            subject: document.getElementById('subjectInput'),
            message: document.getElementById('messageInput')
        };
        const responseDiv = document.getElementById('response');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            // Validate name
            if (!inputs.name.value.trim()) {
                showError('nameError', 'Name is required');
                isValid = false;
            }

            // Validate email
            if (!inputs.email.value.trim()) {
                showError('emailError', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(inputs.email.value)) {
                showError('emailError', 'Invalid email format');
                isValid = false;
            }

            // Validate subject
            if (!inputs.subject.value.trim()) {
                showError('subjectError', 'Subject is required');
                isValid = false;
            }

            // Validate message
            if (!inputs.message.value.trim()) {
                showError('messageError', 'Message is required');
                isValid = false;
            }

            if (isValid) {
                responseDiv.textContent = `Thank you, ${inputs.name.value.trim()}! We'll respond within 24 hours.`;
                responseDiv.classList.add('success');
                contactForm.reset();
                setTimeout(() => responseDiv.classList.remove('success'), 5000);
            }
        });

        // Validation helpers
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        
        const showError = (elementId, message) => {
            document.getElementById(elementId).textContent = message;
        };

        const clearErrors = () => {
            document.querySelectorAll('.error').forEach(error => {
                error.textContent = '';
            });
        };
    }

    // ==================== API Integration ====================
    const loadUsersBtn = document.getElementById('loadUsersBtn');
    if (loadUsersBtn) {
        loadUsersBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                const userList = document.getElementById('userList');
                
                userList.innerHTML = users.map(user => `
                    <li>
                        <strong>${user.name}</strong>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                    </li>
                `).join('');
                
            } catch (error) {
                console.error('Error fetching users:', error);
                document.getElementById('userList').innerHTML = `
                    <li class="error">Failed to load team members. Please try again later.</li>
                `;
            }
        });
    }

    // ==================== FAQ Toggle ====================
    document.querySelectorAll('.question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('visible');
            
            // ARIA accessibility
            const isExpanded = answer.classList.contains('visible');
            question.setAttribute('aria-expanded', isExpanded);
            answer.setAttribute('aria-hidden', !isExpanded);
        });
    });

    // ==================== Bonus: Real-time Clock ====================
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const updateClock = () => {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        };
        setInterval(updateClock, 1000);
        updateClock(); // Initial call
    }

    // ==================== Smooth Scrolling ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// ==================== Services Page Interactions ====================
// Add any service-specific interactions here if needed
