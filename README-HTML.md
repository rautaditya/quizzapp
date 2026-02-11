# TCS Smart Hiring Quiz App - HTML, CSS, JavaScript

A professional quiz application for **Mahila BCA Mahavidyalaya** - TCS Smart Hiring Preparation Paper No 10.

## 📁 Files Included

- `index.html` - Main HTML structure
- `style.css` - Complete styling
- `script.js` - All quiz functionality

## ✨ Features

✅ **10 TCS-style Questions** with multiple choice options
✅ **45-minute Timer** with auto-submit when time expires
✅ **Question Palette** showing answered, marked, and unattempted questions
✅ **Mark for Review** functionality
✅ **Navigation** between questions (Previous/Next)
✅ **Color-coded Status**:
  - 🟢 Green = Answered
  - 🟠 Orange = Marked for Review
  - 🔵 Blue = Current Question
  - ⚪ Gray = Unattempted
✅ **Detailed Results** with score, percentage, and answer key
✅ **Responsive Design** for mobile and desktop
✅ **No Dependencies** - Pure HTML, CSS, JavaScript

## 🚀 Quick Setup

### Option 1: Direct Use
1. Download all three files (`index.html`, `style.css`, `script.js`)
2. Put them in the same folder
3. Double-click `index.html` to open in browser

### Option 2: With Local Server (Recommended)
```bash
# If you have Python installed:
python -m http.server 8000

# Or if you have Node.js with npx:
npx serve

# Then open: http://localhost:8000
```

## 📝 How to Add More Questions

Open `script.js` and find the `quizData` array. Add questions in this format:

```javascript
{
    id: 11,
    question: "Your question text here?",
    options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    correct: 0  // Index of correct answer (0 = A, 1 = B, 2 = C, 3 = D)
}
```

### Example: Adding Question 11

```javascript
const quizData = [
    // ... existing questions ...
    {
        id: 11,
        question: "What is 2 + 2?",
        options: ["A. 3", "B. 4", "C. 5", "D. 6"],
        correct: 1  // B is correct
    }
];
```

## 🎨 Customization

### Change College Name
In `index.html`, line 14:
```html
<h1>Mahila BCA Mahavidyalaya</h1>
```

### Change Paper Number
In `index.html`, line 15:
```html
<p class="subtitle">TCS Smart Hiring Preparation Paper No 10</p>
```

### Change Timer Duration
In `script.js`, line 125:
```javascript
let timeLeft = 45 * 60; // Change 45 to desired minutes
```

### Change Colors
In `style.css`:
- Primary purple: `#667eea`
- Success green: `#22c55e`
- Warning orange: `#f59e0b`
- Danger red: `#dc2626`

## 🔧 Features Explained

### Timer
- Starts automatically at 45 minutes
- Counts down in MM:SS format
- Auto-submits quiz when time reaches 0:00
- Displayed in red for urgency

### Question Navigation
- Click any question number in the palette to jump directly
- Use Previous/Next buttons for sequential navigation
- Previous button disabled on Question 1
- Next button changes to Submit on last question

### Mark for Review
- Click the star button to mark current question
- Marked questions show orange in the palette
- Click again to unmark

### Answer Selection
- Click any option to select it
- Selected option highlights in purple
- Can change answer anytime before submission

### Results Page
- Shows score as fraction and percentage
- Displays correct/incorrect/unattempted counts
- Full answer key with your selections
- Shows wrong answers in red
- Restart button to retake quiz

### Question Palette Colors
- **Green**: Question has been answered
- **Orange**: Question marked for review
- **Blue Border**: Current question being viewed
- **Gray**: Question not yet attempted

### Stats Sidebar
- Real-time count of answered questions
- Count of marked questions
- Remaining unanswered questions

## 📱 Browser Compatibility

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Opera

Works on:
- Desktop computers
- Laptops
- Tablets
- Mobile phones

## 💡 Tips for Students

1. **Read questions carefully** - TCS questions often have tricky wording
2. **Use Mark for Review** - Mark difficult questions and return to them
3. **Manage time** - Keep an eye on the timer
4. **Answer all questions** - No negative marking in most TCS tests
5. **Review answers** - Use the question palette to quickly review marked questions

## 🎯 Quiz Features Demonstration

### Starting the Quiz
- Quiz starts immediately when page loads
- Timer begins counting down
- First question displays automatically

### During the Quiz
- Select answers by clicking options
- Navigate using Previous/Next or question numbers
- Mark difficult questions for later review
- Monitor answered/remaining questions in sidebar

### Submitting
- Click Submit button on last question
- Or wait for timer to expire (auto-submit)
- Confirmation shows your complete results

### After Submission
- View detailed score breakdown
- Review all correct answers
- See which answers you got wrong
- Restart quiz to practice again

## 📊 Sample Questions Included

The quiz includes 10 sample TCS-style questions covering:
- Arithmetic and Algebra
- Number Series
- Logical Reasoning
- Coding-Decoding
- Speed-Time-Distance
- Set Theory
- Logarithms
- Simple Interest
- LCM/HCF

## 🔐 No Data Storage

This quiz runs entirely in your browser:
- No server required
- No data sent anywhere
- No login needed
- Works offline (after initial load)
- Privacy-friendly

## 🆘 Troubleshooting

**Timer not working?**
- Make sure JavaScript is enabled in your browser

**Questions not showing?**
- Check that all three files are in the same folder
- Check browser console for errors (F12)

**Styles not loading?**
- Verify `style.css` filename matches exactly (case-sensitive)
- Check that CSS file is in same directory as HTML

**Can't click buttons?**
- Try refreshing the page
- Clear browser cache

## 📧 File Structure

```
tcs-quiz/
├── index.html    (Main page)
├── style.css     (All styles)
└── script.js     (Quiz logic)
```

All files must be in the same folder for the quiz to work properly.

## 🎓 Perfect For

- TCS Smart Hiring Preparation
- College exam practice
- Self-assessment
- Group study sessions
- Mock tests
- Interview preparation

---

**Developed for Mahila BCA Mahavidyalaya**  
TCS Smart Hiring Preparation  

**Version:** 1.0  
**Last Updated:** February 2026  
**License:** Free for educational use
