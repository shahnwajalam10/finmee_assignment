# ntwist-frontend-assignment

This is a multi-page frontend project built using **vanilla HTML, CSS, and JavaScript**, without any libraries or frameworks. It demonstrates form validation, DOM manipulation, responsive design, and CSS-only UI components.

---

## 📁 Folder Structure
```text
ntwist-frontend-assignment/
├── index.html             # Page 1 – Responsive Form with Validation
├── sort.html              # Page 2 – Sortable List Viewer with custom JavaScript sorting
├── faq.html               # Page 3 – FAQ Accordion built using only HTML and CSS
├── assets/
│   ├── css/
│   │   └── style.css      # Common styling for all pages
│   └── js/
│       └── script.js      # JavaScript logic for form interaction and sorting
└── README.md              # Project documentation

---

## 📄 Pages Implemented

### ✅ Page 1: Responsive Form with Validation (`index.html`)
- **Fields:** Name, Email, Message  
- **Validation:**  
  - All fields use `required`  
  - Email uses `type="email"`  
  - Name may use a `pattern` attribute for custom validation  
- **Features:**  
  - Tracks time from first input focus to form submission  
  - Shows confirmation message on successful submit  
  - Clears the form after submission  
  - Responsive layout using Flexbox/Grid  
  - Fixed-width sidebar and scrollable content  
  - No layout shift on hover/focus  

---

### ✅ Page 2: Sortable List Viewer (`sort.html`)
- **Features:**  
  - Hardcoded unordered list of names  
  - Button sorts list alphabetically using JavaScript (no reload)  
  - DOM manipulation only—no external libraries  
  - Responsive layout with scrollable sidebar  

---

### ✅ Page 3: FAQ Accordion (No JavaScript) (`faq.html`)
- **Implemented using:**  
  - `<details>` and `<summary>` for native accordion behavior  
- **Features:**  
  - 100% CSS/HTML—no JavaScript  
  - Fully accessible and semantic  
  - Responsive layout with minimalist design  

---

### ⭐ Bonus: Star Rating Widget (Optional)
- Allows user to select 1–5 stars  
- Built using only HTML, CSS, and JavaScript  
- Responsive, accessible, and reusable  

---

## 🎨 Styling & Responsiveness

- Mobile responsive design  
- Uses **Flexbox** and **CSS Grid** for layouts  
- Fixed-width sidebar (on pages 1 & 2)  
- Minimalist, clean, and modern UI  
- Prevents layout shifts on hover/focus  

---

## ✅ Features Summary

| Feature                                      | Implemented |
|---------------------------------------------|-------------|
| Semantic HTML markup                        | ✅          |
| HTML5 form validations (`required`, `type`) | ✅          |
| Timer tracking user form interaction        | ✅          |
| Sortable list with vanilla JS               | ✅          |
| CSS-only FAQ accordion                      | ✅          |
| Mobile responsiveness                       | ✅          |
| Use of CSS Flexbox and Grid                 | ✅          |
| No use of any JS libraries/frameworks       | ✅          |
| Scrollable sidebar layout                   | ✅          |
| Optional star rating component              | ✅          |

---

## 🧪 How to Run Locally

1. **Clone the repository**
   ```bash
   https://github.com/shahnwajalam10/finmee_assignment/tree/main

2. **Navigate into the project folder**
cd ntwist-frontend-assignment

3. **Open the files in your browser**
   index.html – Form Page
   sort.html – Sortable List Page
   faq.html – FAQ Accordion Page
   
🛠️ Tools Used
  HTML5
  CSS3
  JavaScript (Vanilla)

🔗 GitHub Repository

👨‍💻 Author

    Name: Shahnwaj Alam
    
    Email: shahnwajalam10@gmail.com


---

Let me know if you'd like this README customized with your real GitHub username, name, and email—or exported as a downloadable `.md` file.


