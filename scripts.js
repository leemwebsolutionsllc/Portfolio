document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-into-view');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header text animation
    const headerText = document.querySelector('.masthead h1');
    headerText.style.opacity = 0;
    headerText.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        headerText.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        headerText.style.opacity = 1;
        headerText.style.transform = 'translateY(0)';
    }, 500);

    // Fade in effect for section titles
    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(title => {
        title.style.opacity = 0;
        title.style.transition = 'opacity 1s ease-in-out';
        const observerTitle = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                }
            });
        }, {
            threshold: 0.1
        });
        observerTitle.observe(title);
    });
});

// Function to show certificate in a modal
function showCertificate(certificateId) {
    const certificates = {
        certificate1: 'diploma.png',
        certificate2: 'engineering_certification.png',
        certificate3: 'web_dev_certification.png',
        certificate4: 'path/to/certificate4.jpg'
    };
    const certificateImage = document.getElementById('certificateImage');
    certificateImage.src = certificates[certificateId];
    const certificateModal = new bootstrap.Modal(document.getElementById('certificateModal'));
    certificateModal.show();
}
