// Play/Pause Background Music
document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        this.textContent = "Dừng nhạc 🎶";
    } else {
        music.pause();
        this.textContent = "Bài hát khiến em nghĩ đến anh 🎶";
    }
});

// Show Valentine Options when hovering over the question button
document.getElementById("valentineButton").addEventListener("mouseenter", function() {
    document.getElementById("valentineOptions").classList.remove("hidden");
});

// Make 'Hok anh ghét em 😡' button run away
document.getElementById("noButton").addEventListener("mouseover", function() {
    let noButton = document.getElementById("noButton");
    let maxX = window.innerWidth - noButton.clientWidth - 50;
    let maxY = window.innerHeight - noButton.clientHeight - 50;
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
