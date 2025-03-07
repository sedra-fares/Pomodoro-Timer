# Pomodoro Timer⏲️

## Description
This is a **Pomodoro Timer** built with **JavaScript, HTML, and CSS**. It helps users stay productive using the Pomodoro Technique, which consists of focus sessions followed by short and long breaks. The timer includes sound options and plays a notification sound before time runs out.

## Features🌟
- **Focus, Short Break, and Long Break Modes**
- **Start, Stop, and Reset Timer**
- **Customizable Background Sounds**
- **End Sound Notification** (Plays before time runs out)
- **Responsive Design**
- **Built with ES Modules & Webpack**

## Demo🎥
  ```sh
https://www.loom.com/share/8eeeca4a1c0744f885d03d5a6a607f4a?sid=bf431a27-59fd-4af0-9f40-7ea160b126ad
  ```

## Installation📥
1. Clone this repository:
   ```sh
   git clone https://github.com/sedra-fares/Pomodoro-Timer.git
   ```
2. Navigate into the project folder:
   ```sh
   cd pomodoro-timer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
📂 pomodoro-timer
│── 📁 dist           # Compiled output files
│   ├── 📄 index.html  # Bundled HTML file
│   ├── 📄 bundle.js   # Compiled JavaScript
│── 📁 node_modules    # Dependencies
│── 📁 sounds         # Sound files
│── 📁 src
│   ├── 📁 js
│   │   ├── 📄 index.js  # Main entry file
│   │   ├── 📄 timer.js  # Timer logic
│   │   ├── 📄 sound.js  # Sound management
│   │   ├── 📄 dom.js    # DOM elements
│   │   ├── 📄 utils.js  # Utility functions
│   ├── 📄 style.css    # Stylesheet
│── 📄 index.html       # Main HTML file
│── 📄 package.json     # Project dependencies
│── 📄 webpack.config.js  # Webpack configuration
│── 📄 README.md        # Documentation
```

## Usage👩‍💻
1. **Select a Timer Mode:** Click "Focus", "Short Break", or "Long Break".
2. **Choose a Background Sound:** Click on a sound option to set it.
3. **Start the Timer:** Click the "Start" button to begin.
4. **Stop or Reset:** Use the "Stop" button to pause, and "Reset" to reset the timer.

## Technologies Used⚙️
- **HTML, CSS, JavaScript (ES6)**
- **ES Modules**
- **Webpack**
- **Audio API for sound management**
