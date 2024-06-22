# Dynamic Form Levels

This project demonstrates a multi-level dynamic form with conditional rendering and validation. Users can fill out forms at three different levels, and based on their input, they can view a summary of the submitted data.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)

## Demo

A live demo of the application can be accessed [here](https://scintillating-heliotrope-cc5c68.netlify.app).

## Features

- Multi-level forms
- Conditional rendering based on user input
- Form validation
- Dynamic summary generation
- Fetch additional questions from an external API based on the survey topic

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/krishna7054/Dynamic-Form.git
    cd dynamic-form-levels
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```sh
dynamic-form-levels/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Level1Form.js
│ │ ├── Level2Form.js
│ │ ├── Level3Form.js
│ │ ├── Summary.js
│ │ ├── Level2Summary.js
│ │ └── Level3Summary.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md
```

## Components

### `App.js`

The main component that handles the state and renders the appropriate form or summary based on the current form level and form data.

### `Level1Form.js`, `Level2Form.js`, `Level3Form.js`

Form components for levels 1, 2, and 3. Each form includes validation logic and handles form submission.

### `Summary.js`

Summary component for level 1 form data.

### `Level2Summary.js`

Summary component for level 2 form data.

### `Level3Summary.js`

Summary component for level 3 form data and additional questions fetched from an external API.
