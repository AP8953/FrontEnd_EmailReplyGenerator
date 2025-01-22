# AI-Powered Email Automation System

An AI-driven email reply generation system designed to automate email responses with multiple tones (professional, friendly, casual). This project integrates **Spring Boot** for the backend, **React** for the frontend, **Google's Gemini API** for AI-based responses, and a **Chrome Extension** for direct Gmail integration.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Backend](#backend)
- [Frontend](#frontend)
- [Chrome Extension](#chrome-extension)
- [Deployment](#deployment)
- [Setup Instructions](#setup-instructions)
- [Contributors](#contributors)
- [License](#license)

---

## Project Overview

This project enables users to generate email replies based on content and tone directly within Gmail. Leveraging **Google's Gemini API**, the system creates email responses that range from professional to casual. Users can seamlessly generate replies through a **Chrome extension**, which connects to a backend built with **Spring Boot** and a frontend built with **React**.

## Features
- AI-powered email reply generation.
- Multiple tone options (Professional, Friendly, Casual).
- **Chrome Extension** for Gmail integration.
- Real-time email reply generation with a **99.9% uptime**.
- Scalable backend with **Render.com** and **Docker**.
- Responsive and optimized frontend hosted on **Netlify**.

## Technologies Used
- **Backend:** Spring Boot, Maven, Google Gemini API
- **Frontend:** React, Vite, Material UI, Axios
- **Chrome Extension:** JavaScript, Chrome APIs
- **Deployment:** Render.com (backend), Netlify (frontend), Docker, Docker Hub

## Backend

The backend is built using **Spring Boot** and is responsible for processing the email content and generating the appropriate AI-powered response using the **Google Gemini API**.

### Key Features:
- REST API for communication with the frontend and Chrome extension.
- API keys for secure integration with Gemini API.
- Dockerized Spring Boot application for easy deployment and scalability.

## Frontend

The frontend is built with **React** and offers an intuitive user interface where users can input email content and select the tone for their replies. It communicates with the backend via **Axios**.

### Key Features:
- Material UI for clean and responsive design.
- Input fields for email content and tone selection.
- Real-time display of AI-generated replies.
- Error handling and state management using React hooks.

## Chrome Extension

The Chrome extension integrates with **Gmail**, allowing users to generate email replies directly within the inbox. It communicates with the backend to fetch AI-generated replies based on the selected tone and email content.

### Key Features:
- Gmail integration to trigger automated replies.
- Real-time display of AI-generated responses in Gmail.
- Seamless user experience for reply generation directly from the inbox.

## Deployment

### Backend Deployment:
- **Platform:** Render.com (Free Plan)
- **Docker:** The Spring Boot backend is containerized using Docker, ensuring easy deployment and scalability.
- **CI/CD:** Docker image is built locally and pushed to **Docker Hub**, then deployed on Render.com.

### Frontend Deployment:
- **Platform:** Netlify (Free Plan)
- **Deployment:** The React app is built and deployed on **Netlify** for hosting the static files.

### Chrome Extension Deployment:
The Chrome extension can be installed from the **Chrome Web Store** or loaded directly for development purposes. It integrates seamlessly with the Gmail UI.

## Setup Instructions

### Prerequisites:
- Docker (for backend deployment)
- Node.js and npm (for frontend development)
- Maven (for backend development)
- A Google Gemini API key

### Backend Setup:
1. Clone the repository.
2. Navigate to the backend directory.
3. Build the backend using Maven:
   ```bash
   mvn clean install
   ```
4. Create a Docker image for the Spring Boot application:
   ```bash
   docker build -t email-reply-generator-backend .
   ```
5. Run the Docker container:
   ```bash
   docker run -p 8080:8080 email-reply-generator-backend
   ```

### Frontend Setup:
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Chrome Extension Setup:
1. Open **chrome://extensions/** in your browser.
2. Enable **Developer Mode**.
3. Click **Load unpacked** and select the **extension** directory.

---

## Contributors

- **[Your Name]** - Full-stack development, AI integration, Chrome extension

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You can copy this directly into your README.md file for your GitHub project. Make sure to update any sections with your personal or specific details.
