// typing effect
// Function to move the "No" button randomly when she hovers or tries to click it
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random position within screen bounds
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    // Change style position to fixed to shift dynamically
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    // Change emoji to sad/panicked face
    document.getElementById('emoji').innerText = '😰';
}

// Function executed when she clicks "Manippaya?"
function accepted() {
    // Hide original text and buttons
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.btn-group').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Show the hidden love message
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');
    
    // Change to a loving emoji
    document.getElementById('emoji').innerText = '🥰';

    // Play bg music automatically upon click
    const music = document.getElementById('bgMusic');
    music.volume = 0.5; // Moderate volume
    music.play().catch(error => {
        console.log("Autoplay restriction resolved by direct user click interaction.");
    });
}
