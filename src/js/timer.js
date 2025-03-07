// timer.js
import { startBtn, stopBtn, resetBtn, timerDisplay, focusButton, shortBreakButton, longBreakButton } from "./dom.js";

import { playSound, stopSound, playEndSound, selectedSound } from "./sound.js";
import { appendZero } from "./utils.js";

let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
let hasPlayedEndSound = false;

timerDisplay.textContent = `${minCount + 1}:00`;

// Function to pause timer
export const pauseTimer = () => {
    paused = true;
    clearInterval(set);
};

// Function to reset timer
export const resetTimer = () => {
    pauseTimer();
    hasPlayedEndSound = false; // Reset end sound flag

    switch (active) {
        case "long":
            minCount = 14;
            break;
        case "short":
            minCount = 4;
            break;
        default:
            minCount = 24;
            break;
    }
    count = 59;
    timerDisplay.textContent = `${minCount + 1}:00`;
};

// Start button logic
startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        timerDisplay.textContent = `${appendZero(minCount)}:${appendZero(count)}`;

        playSound(selectedSound); // Play the selected sound when timer starts

        set = setInterval(() => {
            if (minCount === 0 && count <= 12 && count > 0 && !hasPlayedEndSound) {
                playEndSound(); // Play the end sound when there are 12 seconds left
                hasPlayedEndSound = true;
            }

            if (count === 0) {
                if (minCount === 0) {
                    clearInterval(set);
                    return;
                }
                minCount--;
                count = 60;
            }
            count--;
            timerDisplay.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        }, 1000);
    }
});

// Stop button logic
stopBtn.addEventListener("click", () => {
    pauseTimer();
    stopSound(); // Stop playing sound when timer stops
});

// Reset button logic
resetBtn.addEventListener("click", resetTimer);



// Short break button logic
shortBreakButton.addEventListener("click", () => {
  pauseTimer();
  active = "short";
  minCount = 0;
  count = 59;
  timerDisplay.textContent = `${appendZero(minCount + 1)}:00`;
});

// Long break button logic
longBreakButton.addEventListener("click", () => {
  pauseTimer();
  active = "long";
  minCount = 14;
  count = 59;
  timerDisplay.textContent = `${appendZero(minCount + 1)}:00`;
});
// Focus button logic
focusButton.addEventListener("click", () => {
  pauseTimer();
  active = "focus";
  minCount = 24;
  count = 59;
  timerDisplay.textContent = `${appendZero(minCount + 1)}:00`;
});
