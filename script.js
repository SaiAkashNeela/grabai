document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Particle effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 5 + 2; // 2-7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const duration = Math.random() * 5 + 5; // 5-10s
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${Math.random() * 5}s`; // Stagger animations

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Create a few particles initially
    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    // Recreate particles continuously
    setInterval(createParticle, 500);

    // Typing animation for headline (conceptual - requires more complex implementation)
    // For simplicity, we'll just add a subtle pulse to the headline
    const headline = document.querySelector('.headline');
    setInterval(() => {
        headline.style.transform = 'scale(1.01)';
        setTimeout(() => {
            headline.style.transform = 'scale(1)';
        }, 200);
    }, 2000);

    // Simple form submission (for demonstration)
    const emailInput = document.querySelector('.email-input');
    const signupButton = document.querySelector('.signup-button');

    signupButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (email) {
            alert(`Thank you for your interest! We'll notify you at ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });
});