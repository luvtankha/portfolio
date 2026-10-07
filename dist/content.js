'use strict';
// Edit this file to update the portfolio. See ../EDITING.md for entry templates.
// Array order controls display order. Project/certificate numbers are automatic.
window.portfolioContent={
  "updatedOn": "2026-10-08",
  "profile": {
    "name": "Luv Tankha",
    "wordmarkTop": "LUV",
    "wordmarkBottom": "TANKHA",
    "identity": "FULL-STACK · INDIA",
    "headline": "Full-Stack Developer",
    "bio": "Aspiring AI Engineer · Third-year B.Tech Data Science student building full-stack software, intelligent systems and automation.",
    "location": "India · IST",
    "timeZone": "Asia/Kolkata",
    "email": "luvtankha06@gmail.com",
    "phone": "+918178185449",
    "phoneLabel": "+91 81781 85449",
    "githubUrl": "https://github.com/luvtankha",
    "linkedinUrl": "https://www.linkedin.com/in/luv-tankha-aa9532324",
    "portrait": "assets/portrait.jpg",
    "pageTitle": "Luv Tankha — Full-Stack Developer",
    "pageDescription": "Luv Tankha — Full-Stack Developer and Aspiring AI Engineer. Projects, hackathons and contact information."
  },
  "github": {
    "username": "luvtankha",
    "publicRepositories": 4,
    "followers": 2,
    "since": "2023"
  },
  "projects": [
    {
      "id": "captain",
      "title": "CAPTAIN",
      "category": "Browser automation / Privacy",
      "description": "A browser extension and local companion that observe webpages, mask sensitive context, request consent and validate browser actions before execution.",
      "technologies": [
        "Manifest V3",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Tesseract.js",
        "ONNX Runtime Web"
      ],
      "sourceUrl": "https://github.com/luvtankha/captain",
      "liveUrl": null,
      "liveLabel": "Live site & demo ↗",
      "role": "CAPTAIN development",
      "period": "30 September 2026",
      "cover": "cover-grid",
      "hackathonId": "sih-2026",
      "status": "SIH 2026 Final Round · Development prototype",
      "overview": "CAPTAIN is a privacy-first browser agent developed for Smart India Hackathon 2026 problem statement SIH26171: On-device Visual Perception for Light-weight Browser Agents. It combines local webpage observation, sensitive-context masking, consent gates and validated actions.",
      "development": "A Manifest V3 extension works with an authenticated local companion service. The project uses DOM inspection, OCR and vision tools to prepare sanitized context and check browser actions. It remains a development prototype, with OCR and UI-vision readiness work still in progress."
    },
    {
      "id": "helios",
      "title": "HELIOS",
      "category": "Healthcare / Voice AI",
      "description": "Hindi and Hinglish voice patient intake using Gemini Live, with symptom-specific follow-ups, structured records and specialization routing.",
      "technologies": [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 3",
        "Java 21",
        "Spring Boot 4.1.1",
        "Python 3.12",
        "FastAPI",
        "Gemini Live",
        "PostgreSQL",
        "Flyway"
      ],
      "sourceUrl": "https://github.com/luvtankha/HELIOS",
      "liveUrl": null,
      "liveLabel": "Live site & demo ↗",
      "role": "Team Leader & Tech Lead · Six-member team",
      "period": "7 October 2026",
      "cover": "cover-orbits",
      "hackathonId": "sih-2026",
      "status": "SIH Internal Round Qualified · Engineering prototype",
      "overview": "HELIOS began as a Smart India Hackathon 2026 healthcare project led by Luv Tankha as Team Leader & Tech Lead. The current implementation uses Hindi and Hinglish native voice intake, symptom-specific follow-up questions, structured records and specialization routing.",
      "development": "The current stack combines Next.js and React, Gemini Live audio, Java and Spring Boot APIs, a Python FastAPI voice service, and PostgreSQL. The former doctor dashboard has been removed. HELIOS organizes patient-provided information; it does not provide a validated diagnosis or treatment. The repository-listed Codespaces demo is currently unavailable."
    },
    {
      "id": "temper",
      "title": "TEMPER",
      "category": "Android / On-device ML",
      "description": "An Android conversation overlay with a movable avatar, on-device emotion estimates and conversation-direction cues for supported visible chats.",
      "technologies": [
        "Android",
        "Java",
        "ONNX Runtime Android",
        "RoBERTa / GoEmotions"
      ],
      "sourceUrl": "https://github.com/luvtankha/Temper",
      "liveUrl": "https://luvtankha.github.io/Temper/",
      "liveLabel": "Live site & demo ↗",
      "role": "Independent project",
      "period": "7 October 2026",
      "cover": "cover-signal",
      "hackathonId": null,
      "status": "Android development candidate · Live project site",
      "overview": "TEMPER is an Android conversation overlay with a movable avatar, on-device emotion estimates and conversation-direction cues for supported visible chats. The current Android candidate uses explicit consent and an ON/OFF control.",
      "development": "The Android implementation uses Java and ONNX Runtime Android. Its public project site includes a fictional interface demo with predefined sample conversations and scores. The website does not run live inference on visitor input, and no public APK or Play Store release is listed."
    },
    {
      "id": "personal-portfolio",
      "title": "Personal Portfolio",
      "category": "Web / Portfolio",
      "description": "A responsive portfolio with animated timelines, horizontal project shelves and a minimal green-and-black interface.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "sourceUrl": "https://github.com/luvtankha/portfolio",
      "liveUrl": "https://luvtankha.github.io/portfolio/",
      "liveLabel": "View portfolio ↗",
      "role": "Personal portfolio",
      "period": "8 October 2026",
      "cover": "cover-stack",
      "hackathonId": null,
      "status": "Deployed portfolio",
      "overview": "A portfolio built with HTML, CSS and vanilla JavaScript, using the supplied Spotify palette and a minimal layout. It brings together the profile, hackathon history, current projects and contact links.",
      "development": "Hackathon chapters expand to show their projects. Project shelves support arrows, touch scrolling, mouse dragging and keyboard navigation. Motion can be paused, and the interface respects reduced-motion preferences."
    }
  ],
  "certifications": [],
  "experience": [],
  "hackathons": [
    {
      "id": "sih-2026",
      "year": "2026",
      "dateLabel": "SIH",
      "title": "Smart India Hackathon",
      "subtitle": "CAPTAIN · Final Round / HELIOS · Internal Round Qualified",
      "description": "CAPTAIN was selected for the Final Round under SIH26171. HELIOS qualified in the Internal Round, with Luv Tankha serving as Team Leader & Tech Lead in a six-member team."
    }
  ],
  "repositories": [
    {
      "name": "HELIOS",
      "url": "https://github.com/luvtankha/HELIOS",
      "language": "TypeScript",
      "updated": "2026-10-07"
    },
    {
      "name": "TEMPER",
      "url": "https://github.com/luvtankha/Temper",
      "language": "Java",
      "updated": "2026-10-07"
    },
    {
      "name": "CAPTAIN",
      "url": "https://github.com/luvtankha/captain",
      "language": "JavaScript",
      "updated": "2026-09-30"
    }
  ]
};
