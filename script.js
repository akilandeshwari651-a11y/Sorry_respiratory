// Function to move the "No" button randomly
// Function to handle the envelope trigger event
function openLetter() {
    const envelope = document.getElementById('envelopeWrapper');
    const mainCard = document.getElementById('mainContainer');
    const music = document.getElementById('bgMusic');

    // Trigger smooth visual collapse of envelope
    envelope.classList.add('fade-out');

    // Display the core dialogue panel container
    setTimeout(() => {
        envelope.style.display = 'none';
        mainCard.classList.remove('hidden');
        mainCard.classList.add('slide-up');
    }, 400);

    // Initial play sequencing for background music track
    music.volume = 0.4;
    music.play().catch(error => {
        console.log("Browser policy blocked autonomous autoplay; awaiting explicit gesture event.");
    });
}

// Function to calculate and update random coordinates for the "No" button
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    const padding = 25;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    document.getElementById('emoji').innerText = '😰';
}

// Function triggered upon processing the positive acceptance click handle
function accepted() {
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.btn-group').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden-final');
    
    document.getElementById('emoji').innerText = '🥰';

    // Boost audio levels on dynamic response display
    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play();
}
