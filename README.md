
# 📝 Sentence Construction Test App

A React-based sentence construction test application that challenges users to fill in the blanks in sentences using a set of options. Includes a timer, automatic question progression, and a detailed result summary.

---

## 🚀 Features

- ⏱ 15-second timer per question with auto-progress.
- 🧠 Fill-in-the-blank logic with interactive options.
- ✅ Instant answer validation and scoring.
- 📊 Summary view with correct/incorrect answer indicators.
- 🎯 Circular progress score indicator.
- 🖱 Intuitive UI using Tailwind CSS and React Icons.

---

## 📁 Project Structure

```
/your-project-root
├── /public
├── /src
│   ├── /components
│   │   └── ResultCard.jsx        # Displays individual question result
│   ├── /pages
│   │   └── TestPage.jsx          # Main test logic and interface
│   ├── /data
│   │   └── mockData.js           # Sample questions and answers
│   ├── App.jsx                   # Renders the main route
│   └── index.js                  # React root
├── package.json
└── README.md                     # You're reading it!
```

---

## 🧱 Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Icons**: [react-icons](https://react-icons.github.io/react-icons/)
- **Progress Bar**: [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/sentence-construction-test.git
cd sentence-construction-test
npm install
npm run dev
```

---

## 🧩 Components

### `TestPage.jsx`

The core of the app. Handles:
- Timer logic
- Blank filling with user interaction
- Navigation between questions
- Storing user answers
- Final score and summary display

Props:
- `questions` (Array): Contains questions, options, and correct answers.

### `ResultCard.jsx`

Displays the status of a single question in the result summary.

Props:
- `questions`: All question data
- `index`: Current question index
- `status`: 'correct' | 'incorrect' | 'not answered'
- `response`: User's selected answer

---

## 🧪 Sample Data Format

```js
[
  {
    questionId: 1,
    question: "The quick ___________ fox jumps over the ___________ dog.",
    options: ["brown", "lazy"],
    correctAnswer: ["brown", "lazy"]
  },
  ...
]
```

---

## 🧠 How It Works

1. The test starts with the first question and a 15-second countdown.
2. Users click on options to fill blanks in order.
3. Timer expiry triggers automatic submission of the current question.
4. Once all questions are done, a score and summary are shown.
5. Users can review each question with feedback.

---

## ✅ To-Do / Improvements

- Add backend for tracking user performance.
- Add user authentication.
- Add more dynamic animations.
- Enable question skipping and revisit.
- Internationalization support.

---

## 📄 License

MIT License. Feel free to use and modify for personal or commercial use.
