// sound.js
import { soundButtons, currentSoundText, endSound } from "./dom.js";

let selectedSound = "purple-dream"; // Default sound
let currentPlayingSound = null;

// Function to play a sound
export const playSound = (soundId) => {
    if (currentPlayingSound) {
        currentPlayingSound.pause();
        currentPlayingSound.currentTime = 0;
    }

    let sound = document.getElementById(soundId);
    if (sound) {
        currentPlayingSound = sound;
        sound.currentTime = 0;
        sound.play().catch((error) => console.error("Error playing sound: ", error));
    }
};

// Stop currently playing sound
export const stopSound = () => {
    if (currentPlayingSound) {
        currentPlayingSound.pause();
        currentPlayingSound.currentTime = 0;
    }
};

// Play end sound
export const playEndSound = () => {
    playSound("end-sound");
};

// Change selected sound when a button is clicked
soundButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedSound = button.getAttribute("data-sound");
        currentSoundText.textContent = button.textContent;
        playSound(selectedSound); // Play selected sound immediately
    });
});

// Export selected sound so we can use it in timer.js
export { selectedSound };
