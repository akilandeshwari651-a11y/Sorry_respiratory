// typing effect
let text = "I'm Really Sorry";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,150);
    }
}
typing();

// music play
function playMusic(){
    document.getElementById("music").play();
}
