// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Initialize progress tracker
    initializeProgressTracker();
    
    // Initialize calendar
    initializeCalendar();
});

// Progress Tracker
function initializeProgressTracker() {
    // Get current date
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11
    
    // Only count months if we're in 2026
    let completedRuns = 0;
    if (currentYear === 2026) {
        // Count months that have passed (0-indexed, so add 1)
        completedRuns = Math.min(currentMonth + 1, 12);
    } else if (currentYear > 2026) {
        // If we're past 2026, all runs are complete
        completedRuns = 12;
    }
    
    const totalRuns = 12;
    const remainingRuns = Math.max(0, totalRuns - completedRuns);
    const progressPercent = Math.round((completedRuns / totalRuns) * 100);
    
    // Update DOM
    const completedElement = document.getElementById('completed-runs');
    const remainingElement = document.getElementById('remaining-runs');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentElement = document.getElementById('progress-percent');
    
    if (completedElement) {
        completedElement.textContent = completedRuns;
    }
    if (remainingElement) {
        remainingElement.textContent = remainingRuns;
    }
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    if (progressPercentElement) {
        progressPercentElement.textContent = progressPercent;
    }
}

// Calendar Initialization
function initializeCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Wiltshire and Bath parkruns (to be re-ordered when planning the schedule)
    const parkruns = [
        'Southwick Country Park parkrun',
        'Brickfields Park parkrun',
        'Chippenham parkrun',
        'Lydiard parkrun',
        'Marlborough Common parkrun',
        'Melksham parkrun',
        'Salisbury parkrun',
        'Seven Fields parkrun',
        'Bath Skyline parkrun',
        'Thoulstone parkrun',
        'Tidworth parkrun',
        'Quaker\'s Walk parkrun'
    ];
    
    // Image paths for each parkrun (images should be placed in images/parkruns/)
    const parkrunImages = [
        'images/parkruns/southwick-country-park.jpg',
        'images/parkruns/brickfields-park.jpg',
        'images/parkruns/chippenham.jpg',
        'images/parkruns/lydiard.jpg',
        'images/parkruns/marlborough-common.jpg',
        'images/parkruns/melksham.jpg',
        'images/parkruns/salisbury.jpg',
        'images/parkruns/seven-fields.jpg',
        'images/parkruns/bath-skyline.jpg',
        'images/parkruns/thoulstone.jpg',
        'images/parkruns/tidworth.jpg',
        'images/parkruns/quakers-walk.jpg'
    ];
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();
    
    months.forEach((monthName, index) => {
        const monthElement = document.createElement('div');
        monthElement.className = 'calendar-month';
        
        const monthDate = new Date(2026, index, 1);
        const isPast = currentYear > 2026 || (currentYear === 2026 && currentMonth > index) || 
                      (currentYear === 2026 && currentMonth === index && currentDate >= 1);
        const isCurrent = currentYear === 2026 && currentMonth === index;
        const isFuture = currentYear < 2026 || (currentYear === 2026 && currentMonth < index);
        
        let statusClass = 'pending';
        let statusText = 'Upcoming';
        
        if (isPast && !isCurrent) {
            statusClass = 'completed';
            statusText = 'Completed';
        } else if (isCurrent) {
            statusClass = 'upcoming';
            statusText = 'This Month';
        } else if (isFuture) {
            statusClass = 'pending';
            statusText = 'Upcoming';
        }
        
        // Get the parkrun name for this month (index-based for now, will be re-ordered later)
        const parkrunName = parkruns[index] || 'TBD';
        const parkrunImage = parkrunImages[index] || '';
        
        // Set background image if available
        if (parkrunImage) {
            monthElement.style.backgroundImage = `url('${parkrunImage}')`;
            monthElement.style.backgroundSize = 'cover';
            monthElement.style.backgroundPosition = 'center';
        }
        
        monthElement.innerHTML = `
            <div class="calendar-month-overlay"></div>
            <div class="calendar-month-content">
                <div class="calendar-month-name">${monthName}</div>
                <div class="calendar-parkrun-name">${parkrunName}</div>
                <div class="calendar-month-status ${statusClass}">${statusText}</div>
            </div>
        `;
        
        calendarGrid.appendChild(monthElement);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

