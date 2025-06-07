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
    // Cursor-following particle effect
    function createCursorParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        document.body.appendChild(particle);

        const size = Math.random() * 3 + 1; // 1-4px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Animate particle fading and shrinking
        particle.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 800, // Particle disappears in 0.8 seconds
            easing: 'ease-out',
            fill: 'forwards'
        }).onfinish = () => particle.remove();
    }

    document.addEventListener('mousemove', (e) => {
        createCursorParticle(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            createCursorParticle(e.touches[0].clientX, e.touches[0].clientY);
        }
    });

    // Enhance existing particle system
    // Modify createParticle to have more varied movement and appearance
    const originalCreateParticle = createParticle;
    createParticle = () => {
        originalCreateParticle(); // Call the original particle creation
        const particles = document.querySelectorAll('.particle');
        const lastParticle = particles[particles.length - 1];
        if (lastParticle) {
            // Add more dynamic properties to background particles
            lastParticle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, ${Math.random() * 0.5 + 0.2})`; // Varying blues/cyans
            lastParticle.style.animationDuration = `${Math.random() * 10 + 10}s`; // Longer, more subtle float
            lastParticle.style.animationDelay = `-${Math.random() * 10}s`;
            lastParticle.style.animationName = 'float-subtle';
        }
    };

    // Update the interval for continuous particle creation
    setInterval(createParticle, 300); // Create particles more frequently

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