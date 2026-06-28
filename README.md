# Little Lemon Mediterranean Restaurant

A modern, responsive web application for the **Little Lemon Mediterranean Restaurant**, featuring an interactive table booking system. This project serves as the final Capstone Project for the **Meta Front-End Developer Professional Certificate** on Coursera.

---

## 🚀 Live Features

1. **Table Reservation System**:
   - Integrates React's `useReducer` to dynamically fetch and display available reservation times based on the date selected.
   - HTML5 form validation ensuring proper guest counts, dates, and times.
   - Redirects to a clean booking confirmation screen upon successful form submission.
2. **Interactive Specials Menu**:
   - Showcases weekly specials with images, descriptions, and prices.
   - Includes custom integration with **SweetAlert2** to handle "Order Now" alerts with smooth popup confirmations.
3. **Responsive Navigation Layout**:
   - Desktop navigation with interactive hover states.
   - Mobile-first slide-out drawer menu for screens under `768px`.
4. **Authentic Typography & Styling**:
   - Adheres to the official Little Lemon design guidelines, utilizing **Markazi Text** (headings) and **Karla** (body text) Google Fonts.
   - Premium modern aesthetics built using custom Vanilla CSS cards, transitions, and layout structures.

---

## 🛠️ Technology Stack

* **Frontend Library**: React (v18)
* **Routing**: React Router DOM (v6)
* **Styling**: Vanilla CSS (Custom tokens, Grid, Flexbox)
* **Popups/Modals**: SweetAlert2
* **Testing**: Jest & React Testing Library
* **Build tool**: Create React App (react-scripts)

---

## 📂 Project Structure

```text
Capstone-project/
├── public/                 # Static assets and index.html template
└── src/
    ├── components/         # React Components
    │   ├── Booking.js          # Wrapper layout component for reservations
    │   ├── BookingForm.js      # Interactive form with date/time state validation
    │   ├── ConfirmedBooking.js # Booking confirmation screen
    │   ├── Footer.js           # Restaurant links and contact info footer
    │   ├── Header.js           # Banner & hero call to action
    │   ├── Main.js             # Route configurations & core state management
    │   ├── Menu.js             # Weekly specials cards
    │   └── Nav.js              # Fully responsive navigation bar
    ├── images/             # Local images and logo SVG files
    ├── App.css             # Main stylesheet for layout & responsive components
    ├── App.js              # Application root element
    ├── App.test.js         # Jest testing configuration & integration test suite
    ├── index.css           # Global typography & baseline CSS styles
    ├── index.js            # Entrypoint file
    └── recipes.js          # Mock menu database
```

---

## 📦 Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sahilpreet13/final-project.git
   cd Capstone-project
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm start
   ```
   *The application will launch automatically in your browser at `http://localhost:3000/`.*

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🧪 Running Unit & Integration Tests

The project includes Jest and React Testing Library suites to ensure reliability of our core flows:

```bash
npm test -- --watchAll=false
```

### Verified Test Cases:
* **Header Rendering**: Validates that the hero banner renders correctly and user clicks successfully navigate to the table booking page.
* **Initialize Times Dropdown**: Asserts that `availableTimes` are correctly loaded into the select options when mounting the booking component.
* **Update Times State Changes**: Tests that updating the reservation date input successfully triggers state updates and populates the time dropdown with appropriate options.

---

## 🛡️ License

This project was built during the Meta Front-End Developer Coursera Course and is intended for educational purposes.
