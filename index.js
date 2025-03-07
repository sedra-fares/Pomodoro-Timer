let focusButton = document.getElementById("focus");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let timerDisplay = document.getElementById("timer");

// Sound selection
let selectedSound = "purple-dream";  // Default sound
let soundButtons = document.querySelectorAll(".sound-btn");
let currentSoundText = document.getElementById("current-sound");

// Variable to hold the currently playing sound element
let currentPlayingSound = null;
let hasPlayedEndSound = false; // Flag to check if the end sound has already been played

// Function to play the selected sound
const playSound = (soundId) => {
    if (currentPlayingSound) {
        currentPlayingSound.pause(); // Pause any currently playing sound
        currentPlayingSound.currentTime = 0; // Reset the current sound
    }

    let sound = document.getElementById(soundId);
    if (sound) {
        currentPlayingSound = sound; // Store the reference to the currently playing sound
        sound.currentTime = 0; // Restart the sound
        sound.play().catch((error) => {
            console.error("Error playing sound: ", error);
        });
    }
};

// Change selected sound when a button is clicked
soundButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedSound = button.getAttribute("data-sound");
        currentSoundText.textContent = button.textContent;
        playSound(selectedSound); // Play the selected sound immediately
    });
});

// Function to play the end sound before the timer finishes
const playEndSound = () => {
    if (!hasPlayedEndSound) { // Check if the end sound has already been played
        playSound("end-sound"); // Play the timer end sound
        hasPlayedEndSound = true; // Set the flag to true so the sound doesn't play again
    }
};

// Modify timer to play sound just before it ends
startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        timerDisplay.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        playSound(selectedSound); // Play the selected sound when the timer starts
        set = setInterval(() => {
            // Play the end sound when there are 12 seconds remaining
            if (minCount === 0 && count <= 12 && count > 0) {
                playEndSound(); // Play the end sound when there are 12 seconds left
            }

            if (count === 0) {
                if (minCount === 0) {
                    clearInterval(set);
                    return; // End the timer
                }
                minCount--;
                count = 60;
            }
            count--;
            timerDisplay.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        }, 1000);
    }
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
    if (currentPlayingSound) {
        currentPlayingSound.pause(); // Stop any sound that is playing
        currentPlayingSound.currentTime = 0; // Reset sound to start
    }
    clearInterval(set); // Stop the timer
    paused = true;
    hasPlayedEndSound = false; // Reset the end sound flag so it can play again next time
});


let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;

timerDisplay.textContent = `${minCount + 1}:00`;

const appendZero = (value) => (value < 10 ? `0${value}` : value);

const removeFocus = () => {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  active = "focus";
  minCount = 24;
  count = 59;
  timerDisplay.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  active = "short";
  minCount = 0;
  count = 59;
  timerDisplay.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  active = "long";
  minCount = 14;
  count = 59;
  timerDisplay.textContent = `${minCount + 1}:00`;
});

const pauseTimer = () => {
  paused = true;
  clearInterval(set);
};

stopBtn.addEventListener("click", () => {
  pauseTimer();
});

resetBtn.addEventListener("click", () => {
  pauseTimer();
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
});

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    timerDisplay.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
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


