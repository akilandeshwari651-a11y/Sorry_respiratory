// Step 1 to Step 2 Transition (Forcefully removes hidden layers)
function goToStep2() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const music = document.getElementById('bgMusic');

    // Smooth inline transition overwrite
    step1.style.setProperty('display', 'none', 'important');
    step1.classList.add('hidden');
    
    // Unhide Step 2 text framework
    step2.classList.remove('hidden');

    // Core BGM sequence trigger handle
    music.volume = 0.4;
    music.play().catch(function(error) {
        console.log("Audio pipeline active - playback cached until next interaction click.");
    });
}

// Step 2 to Step 3 Transition
function goToStep3() {
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    
    step2.style.setProperty('display', 'none', 'important');
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
}

// Step 3 to Step 4 Transition (Final Scene)
function goToStep4() {
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    
    step3.style.setProperty('display', 'none', 'important');
    step3.classList.add('hidden');
    step4.classList.remove('hidden');
    
    // Elevate soundtrack experience levels
    const music = document.getElementById('bgMusic');
    music.volume = 0.6;
    music.play().catch(e => console.log("Audio running fine"));
}

// Fixed absolute position mechanics for random jump parameters
function moveButton(btnElement) {
    const padding = 35;
    const maxX = window.innerWidth - btnElement.offsetWidth - padding;
    const maxY = window.innerHeight - btnElement.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    btnElement.style.position = 'fixed';
    btnElement.style.left = randomX + 'px';
    btnElement.style.top = randomY + 'px';
    btnElement.style.zIndex = "999"; // Button hidden layouts mela overlapping varaama thadukka
}
