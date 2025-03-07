# Pomodoro Timer

## Description
This is a **Pomodoro Timer** built with **JavaScript, HTML, and CSS**. It helps users stay productive using the Pomodoro Technique, which consists of focus sessions followed by short and long breaks. The timer includes sound options and plays a notification sound before time runs out.

## Features
- **Focus, Short Break, and Long Break Modes**
- **Start, Stop, and Reset Timer**
- **Customizable Background Sounds**
- **End Sound Notification** (Plays before time runs out)
- **Responsive Design**
- **Built with ES Modules & Webpack**

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/pomodoro-timer.git
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
│── 📁 src
│   ├── 📄 index.js  # Main entry file
│   ├── 📄 timer.js  # Timer logic
│   ├── 📄 sound.js  # Sound management
│   ├── 📄 dom.js    # DOM elements
│   ├── 📄 utils.js  # Utility functions
│── 📁 sounds        # Sound files
│── 📁 styles        # CSS files
│── 📄 index.html    # Main HTML file
│── 📄 README.md     # Documentation
│── 📄 package.json  # Project dependencies
│── 📄 webpack.config.js  # Webpack configuration
```

## Usage
1. **Select a Timer Mode:** Click "Focus", "Short Break", or "Long Break".
2. **Choose a Background Sound:** Click on a sound option to set it.
3. **Start the Timer:** Click the "Start" button to begin.
4. **Stop or Reset:** Use the "Stop" button to pause, and "Reset" to reset the timer.

## Technologies Used
- **HTML, CSS, JavaScript (ES6)**
- **ES Modules**
- **Webpack**
- **Audio API for sound management**
