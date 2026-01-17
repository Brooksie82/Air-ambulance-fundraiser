// Run times for completed months (format: "mm:ss")
// Add run times here as they are completed
const runTimes = {
    0: "35:27",  // January
    1: null,  // February
    2: null,  // March
    3: null,  // April
    4: null,  // May
    5: null,  // June
    6: null,  // July
    7: null,  // August
    8: null,  // September
    9: null,  // October
    10: null, // November
    11: null  // December
};

// Result links for completed months
// Add result links here as they become available
// If null, the runTime will be displayed as plain text (not a link)
const resultLinks = {
    0: "https://www.parkrun.org.uk/southwickcountrypark/results/677/",  // January - add link when available
    1: null,  // February
    2: null,  // March
    3: null,  // April
    4: null,  // May
    5: null,  // June
    6: null,  // July
    7: null,  // August
    8: null,  // September
    9: null,  // October
    10: null, // November
    11: null  // December
};

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
    
    // Initialize scroll spy for navigation
    initializeScrollSpy();
});

// Progress Tracker
function initializeProgressTracker() {
    // Count completed runs based on runTimes (non-null entries)
    let completedRuns = 0;
    for (let i = 0; i < 12; i++) {
        if (runTimes[i] !== null) {
            completedRuns++;
        }
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
        'Melksham parkrun',
        'Brickfields Park parkrun',
        'Tidworth parkrun',
        'Marlborough Common parkrun',
        'Thoulstone parkrun',
        'Bath Skyline parkrun',
        'Seven Fields parkrun',
        'Chippenham parkrun',
        'Lydiard parkrun',
        'Salisbury parkrun',
        'Quaker\'s Walk parkrun'
    ];
    
    // Image paths for each parkrun (images should be placed in images/parkruns/)
    const parkrunImages = [
        'images/parkruns/southwick-country-park.jpg',
        'images/parkruns/melksham.jpg',
        'images/parkruns/brickfields-park.jpg',
        'images/parkruns/tidworth.jpg',
        'images/parkruns/marlborough-common.jpg',
        'images/parkruns/thoulstone.jpg',
        'images/parkruns/bath-skyline.jpg',
        'images/parkruns/seven-fields.jpg',
        'images/parkruns/chippenham.jpg',
        'images/parkruns/lydiard.jpg',
        'images/parkruns/salisbury.jpg',
        'images/parkruns/quakers-walk.jpg'
    ];
    
    // Specific run dates (format: Date object or null to use first Saturday)
    // If null, will use first Saturday of the month and add 'tbc'
    // If a Date is provided, that specific date will be used
    const runDates = {
        0: new Date(2026, 0, 17),  // January - will use first Saturday
        1: new Date(2026, 1, 14),  // February - will use first Saturday
        2: null,  // March - will use first Saturday
        3: null,  // April - will use first Saturday
        4: null,  // May - will use first Saturday
        5: null,  // June - will use first Saturday
        6: null,  // July - will use first Saturday
        7: null,  // August - will use first Saturday
        8: null,  // September - will use first Saturday
        9: null,  // October - will use first Saturday
        10: null, // November - will use first Saturday
        11: null  // December - will use first Saturday
        // Example: 0: new Date(2026, 0, 10) for January 10th, 2026
    };
    
    // Function to get the first Saturday of a month
    function getFirstSaturday(year, month) {
        const firstDay = new Date(year, month, 1);
        const dayOfWeek = firstDay.getDay(); // 0 = Sunday, 6 = Saturday
        // Calculate days until Saturday (6)
        // If dayOfWeek is 6 (Saturday), daysUntilSaturday = 0
        // Otherwise: (6 - dayOfWeek + 7) % 7
        const daysUntilSaturday = dayOfWeek === 6 ? 0 : (6 - dayOfWeek + 7) % 7;
        const firstSaturday = new Date(year, month, 1 + daysUntilSaturday);
        return firstSaturday;
    }
    
    // Function to format date as "d.m.yy" (e.g., "4.1.26")
    function formatDate(date, isEstimated = false) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
        
        const formatted = `${day}.${month}.${year}`;
        return isEstimated ? `${formatted} tbc` : formatted;
    }
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();
    
    months.forEach((monthName, index) => {
        const monthElement = document.createElement('div');
        monthElement.className = 'calendar-month';
        
        // Get the run date - use specific date if provided, otherwise use first Saturday
        const specificDate = runDates[index];
        let runDate;
        let isEstimated = false;
        
        if (specificDate) {
            runDate = specificDate;
        } else {
            runDate = getFirstSaturday(2026, index);
            isEstimated = true;
        }
        
        const formattedDate = formatDate(runDate, isEstimated);
        
        // Check if the run date has passed
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const runDateCopy = new Date(runDate);
        runDateCopy.setHours(0, 0, 0, 0);
        
        const isPast = today > runDateCopy;
        const isToday = today.getTime() === runDateCopy.getTime();
        const isCurrentMonth = today.getFullYear() === 2026 && today.getMonth() === index;
        const isFuture = today < runDateCopy;
        
        let statusClass = 'pending';
        let statusText = 'Upcoming';
        const runTime = runTimes[index];
        const isCompleted = isPast && runTime !== null;
        
        if (isPast && runTime !== null) {
            statusClass = 'completed';
            statusText = 'Completed';
        } else if (isToday || (isCurrentMonth && !isPast)) {
            statusClass = 'upcoming';
            statusText = 'This Month';
        } else if (isFuture) {
            statusClass = 'pending';
            statusText = 'Upcoming';
        } else if (isPast && runTime === null) {
            statusClass = 'completed';
            statusText = 'Completed';
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
        
        // Build the content HTML
        let contentHTML = `
            <div class="calendar-month-overlay"></div>
            <div class="calendar-month-content">
                <div class="calendar-month-name">${monthName}</div>
                <div class="calendar-parkrun-name">${parkrunName}</div>
                <div class="calendar-month-date">${formattedDate}</div>
        `;
        
        // Display run time or status
        // If runTime exists, show it (as link if resultLink exists, otherwise plain text)
        // Otherwise show the status text ("Upcoming" or "This Month")
        const resultLink = resultLinks[index];
        let statusDisplay = '';
        
        if (runTime !== null) {
            // Show runTime - make it a link if resultLink exists
            if (resultLink) {
                statusDisplay = `<div class="calendar-month-status ${statusClass}"><a href="${resultLink}" target="_blank" rel="noopener noreferrer" class="calendar-status-link">${runTime}</a></div>`;
            } else {
                statusDisplay = `<div class="calendar-month-status ${statusClass}">${runTime}</div>`;
            }
        } else {
            // Show status text ("Upcoming" or "This Month")
            statusDisplay = `<div class="calendar-month-status ${statusClass}">${statusText}</div>`;
        }
        
        contentHTML += statusDisplay + `
            </div>
        `;
        
        monthElement.innerHTML = contentHTML;
        
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

// Scroll Spy - Highlight active navigation item based on scroll position
function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    // Options for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper portion of viewport
        threshold: 0
    };
    
    // Callback for Intersection Observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    // Create Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Handle initial scroll position (if already scrolled on page load)
    const handleInitialScroll = () => {
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    // Check initial scroll position
    handleInitialScroll();
    
    // Also check on scroll (as backup)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleInitialScroll, 100);
    });
}

