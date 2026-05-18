// Function to move the "No" button randomly
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Mobile or Desktop screen bounds calculation
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    // Generate random coordinates within safe limits
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    // Apply new positions
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Change emoji to scared/teasing face
    document.getElementById('emoji').innerText = '😰';
}

// Function executed when she clicks "Manippaya?"
function accepted() {
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.btn-group').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');
    
    document.getElementById('emoji').innerText = '🥰';

    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play().catch(error => {
        console.log("Autoplay handled after click.");
    });
}
