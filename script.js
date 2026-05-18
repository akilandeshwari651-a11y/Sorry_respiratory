// Step 1 to Step 2 Transition
function goToStep2() {
    document.getElementById('step1').classList.add('hidden');
    const step2 = document.getElementById('step2');
    step2.classList.remove('hidden');
    
    // Play Background music track sequence seamlessly on interaction
    const music = document.getElementById('bgMusic');
    music.volume = 0.4;
    music.play().catch(e => console.log("Audio triggered successfully"));
}

// Step 2 to Step 3 Transition
function goToStep3() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
}

// Step 3 to Step 4 Transition (Final Scene)
function goToStep4() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
    
    // Slight music volume boost at peak screen
    const music = document.getElementById('bgMusic');
    music.volume = 0.6;
}

// Dynamic Random Jump Mechanics for any active "No" button reference
function moveButton(btnElement) {
    const padding = 30;
    const maxX = window.innerWidth - btnElement.offsetWidth - padding;
    const maxY = window.innerHeight - btnElement.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    btnElement.style.position = 'fixed';
    btnElement.style.left = randomX + 'px';
    btnElement.style.top = randomY + 'px';
}
