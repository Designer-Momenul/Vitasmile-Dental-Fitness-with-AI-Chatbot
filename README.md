# VitaSmile & Fit — Dental Care & Fitness Landing Page with Python AI Chatbot

A modern, high-converting, and fully responsive landing page designed for a combined **Dental Clinic & Fitness Wellness Center**. Built with clean **HTML5, CSS3, and Vanilla JavaScript**, this project also features a custom **Floating AI Assistant Chatbot** engineered for seamless **Python (FastAPI)** backend integration.

---

## Live Demo
* **Live Website:** View Live Demo on GitHub Pages (`https://yourusername.github.io/vitasmile-dental-fitness/`) *(Replace with your actual GitHub Pages URL)*

---

## Key Features

### Frontend & UI/UX Design
* **Glassmorphism Sticky Navbar:** Smooth hover underline animations, scroll-triggered blur effect, and a responsive mobile hamburger menu.
* **Interactive Dual-Focus Hero Banner:** Visitors can dynamically switch between *Complete Wellness*, *Dental Clinic*, and *Fitness & Gym* modes with animated trust counters.
* **Filterable Dental Care Section:** Category filter tabs (*All Services, General Dentistry, Cosmetic Care, Implants & Ortho*) with a quick appointment booking popup modal.
* **Fitness & Gym Programs Grid:** Modern workout program cards (*Strength, HIIT, Cardio, Yoga, Personal Transformation, CrossFit*) featuring popular plan highlights.
* **Specialists & Trainers Showcase:** Image zoom hover effects, slide-up social overlays, and specialty badges.
* **Flexible Membership Packages:** Clean 3-tier pricing layout (*Bright Smile Plan, Total Wellness VIP Combo, and Active Body Pro*).
* **Interactive Contact & Booking Form:** Department selector pills, automatic date validation, and live confirmation alerts.

### AI Chatbot Integration (Python Ready)
* **Floating AI Chat Widget:** Clean UI with quick-reply suggestion chips and animated typing indicators.
* **Python FastAPI Backend Support:** Connects via `fetch()` REST API to handle real-time user queries about dental treatments, pricing, and gym memberships, complete with an offline fallback mode.

---

## Technologies Used
* **Frontend:** HTML5, CSS3 (Flexbox, CSS Grid, Custom Keyframe Animations), Vanilla JavaScript (ES6+)
* **Backend (AI Integration):** Python 3, FastAPI, Uvicorn, Pydantic

---

## Project Structure

```text
vitasmile-dental-fitness/
│
├── index.html          # Main landing page structure & all sections
├── style.css           # Custom styling, responsive layouts & hover animations
├── script.js           # Interactive filters, modals, counters & AI chat logic
├── backend/
│   └── main.py         # Python FastAPI server for AI Chatbot responses
└── README.md           # Project documentation
```

---

## Getting Started

### 1. Run the Frontend Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/vitasmile-dental-fitness.git
   ```
2. Navigate into the project directory:
   ```bash
   cd vitasmile-dental-fitness
   ```
3. Open `index.html` directly in your browser or run it using **VS Code Live Server**.

### 2. Run the Python AI Chatbot Backend (Optional)
1. Install the required dependencies:
   ```bash
   pip install fastapi uvicorn pydantic
   ```
2. Navigate to the backend folder and start the server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
3. The frontend chatbot will automatically connect to `http://127.0.0.1:8000/chat`.

---

## Freelance & Portfolio
This project was designed and developed as a showcase for **Responsive Web Design** and **Python AI Chatbot Integration**. Available for custom client projects on:

* **Upwork:** Add your Upwork Profile Link
* **Fiverr:** Add your Fiverr Profile Link
* **LinkedIn:** Add your LinkedIn Profile Link

---

## License
This project is licensed under the MIT License.
