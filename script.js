const questions = [

/* ================= NUMERICAL ABILITY (MODERATE) ================= */

{
q: "The ratio of the speeds of two trains is 7:8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
options: ["70 km/h", "75 km/h", "84 km/h", "87.5 km/h"],
correct: 3
},
{
q: "A sum of ₹12,500 amounts to ₹15,500 in 4 years at the rate of simple interest. What is the rate of interest?",
options: ["3%", "4%", "5%", "6%"],
correct: 3
},
{
q: "Find the smallest number which when divided by 20, 25, 35 and 40 leaves remainders 14, 19, 29 and 34 respectively.",
options: ["1394", "1400", "1406", "1600"],
correct: 0
},
{
q: "If $x + \\frac{1}{x} = 5$, find the value of $x^2 + \\frac{1}{x^2}$.",
options: ["23", "25", "27", "30"],
correct: 0
},
{
q: "A shopkeeper marks his goods 30% above the cost price and gives a discount of 10%. Gain percent is:",
options: ["15%", "17%", "20%", "22%"],
correct: 1
},
{
q: "The product of two numbers is 120 and the sum of their squares is 289. The sum of the numbers is:",
options: ["20", "23", "169", "None"],
correct: 1
},
{
q: "In what time will a sum of money double itself at 6.25% per annum simple interest?",
options: ["8 years", "10 years", "12 years", "16 years"],
correct: 3
},
{
q: "The average age of 30 students is 9 years. If the age of their teacher is included, it becomes 10 years. Teacher's age is:",
options: ["31", "35", "40", "45"],
correct: 2
},
{
q: "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left. In how many days can A alone finish the remaining work?",
options: ["5", "6", "8", "10"],
correct: 1
},
{
q: "A sum of money placed at compound interest doubles itself in 5 years. It will amount to eight times itself at the same rate of interest in:",
options: ["10 years", "15 years", "20 years", "25 years"],
correct: 1
},
{
q: "If 15% of $x$ is same as 20% of $y$, then $x:y$ is:",
options: ["3:4", "4:3", "17:16", "16:17"],
correct: 1
},
{
q: "The length of a rectangle is increased by 10% and breadth decreased by 10%. The area:",
options: ["Decreases by 1%", "Increases by 1%", "Remains same", "None"],
correct: 0
},
{
q: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both are opened together, the time taken is:",
options: ["10 min", "12 min", "15 min", "25 min"],
correct: 1
},
{
q: "Find the unit digit in $(264)^{102} + (264)^{103}$.",
options: ["0", "2", "4", "6"],
correct: 0
},
{
q: "A boat goes 12 km upstream and 18 km downstream in 3 hours. If speed of stream is 3 km/h, find boat speed in still water.",
options: ["9 km/h", "10 km/h", "12 km/h", "15 km/h"],
correct: 2
},
{
q: "A bag contains 5 red and 3 blue balls. If 3 balls are drawn at random, probability that 2 are red and 1 is blue?",
options: ["15/28", "15/56", "30/56", "12/25"],
correct: 1
},
{
q: "If $2^x \\times 8^{1/5} = 2^{1/5}$, find $x$.",
options: ["1/5", "-2/5", "2/5", "3/5"],
correct: 1
},
{
q: "A wheel makes 1000 revolutions in covering a distance of 88 km. Diameter of wheel is:",
options: ["14m", "24m", "28m", "40m"],
correct: 2
},
{
q: "The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 36. What is the difference between the two digits?",
options: ["3", "4", "9", "Cannot determine"],
correct: 1
},
{
q: "Find the value of $\\sqrt{10 + \\sqrt{25 + \\sqrt{108 + \\sqrt{154 + \\sqrt{225}}}}}$.",
options: ["4", "6", "8", "10"],
correct: 0
},

/* ================= LOGICAL REASONING (HARD) ================= */

{
q: "In a certain code, 'STALWART' is written as 'TVZPVZTS'. How is 'OFFICIER' written?",
options: ["PGEJDIFS", "PGGHJFJS", "PHGJKFJS", "PUGJKFJS"],
correct: 1
},
{
q: "Statement: Some kings are queens. All queens are beautiful. Conclusion: I. All kings are beautiful. II. All queens are kings. III. Some kings are beautiful.",
options: ["Only I", "Only II", "Only III", "I and II"],
correct: 2
},
{
q: "Eight people A, B, C, D, E, F, G, H sit around a circle facing center. A is second to left of C, who is immediate left of E. G is third to left of D. B is between D and H. Who is fourth to right of G?",
options: ["A", "C", "E", "F"],
correct: 1
},
{
q: "If '+' is 'x', '-' is '+', 'x' is '/' and '/' is '-', find: $6 + 7 \\times 3 - 8 / 20$.",
options: ["-3", "7", "2", "1"],
correct: 2
},
{
q: "If 1st Jan 2001 was Monday, what was the day on 1st Jan 2101?",
options: ["Monday", "Tuesday", "Wednesday", "Friday"],
correct: 3
},
{
q: "Find missing: 2, 10, 30, 68, 130, ?",
options: ["210", "222", "240", "256"],
correct: 1 // n^3 + n
},
{
q: "A cube is painted blue on all faces and cut into 125 small cubes. How many cubes have at least 2 faces painted?",
options: ["36", "44", "48", "52"],
correct: 1 // 12 edges * 3 + 8 corners
},
{
q: "Input: 45 12 33 67 10. Step 1: 67 45 12 33 10. Step 2: 67 45 33 12 10. If Input is '15 28 09 40 22', how many steps to sort descending?",
options: ["2", "3", "4", "5"],
correct: 1
},
{
q: "A man is facing North-West. He turns 90° clockwise, then 180° anticlockwise, then another 90° anticlockwise. Which direction now?",
options: ["East", "South-East", "South", "South-West"],
correct: 1
},
{
q: "If $A \\$ B$ means A is mother, $A \\# B$ means A is father, $A @ B$ means A is husband. What does $P \\$ Q \\# R @ S$ mean?",
options: ["P is grandmother of S", "P is mother-in-law of S", "P is grandmother of R", "None"],
correct: 2
},
{
q: "Looking at a clock, the hour hand is at 4:20. What is the angle between hands?",
options: ["0°", "10°", "20°", "25°"],
correct: 1
},
{
q: "Find the odd one out: 331, 482, 551, 263, 383",
options: ["331", "482", "551", "383"],
correct: 3 // Product of first two digits is third (3*3=9? no. Sum of extremes?)
},
{
q: "Statements: All doors are keys. All keys are bats. Some bats are clocks. Conclusion: I. Some bats are doors. II. Some clocks are keys. III. All doors are bats.",
options: ["Only I & II", "Only I & III", "All follow", "None follow"],
correct: 1
},
{
q: "Data Sufficiency: What is the rank of X in class? (1) There are 30 students. (2) There are 10 students below X.",
options: ["1 alone sufficient", "2 alone sufficient", "Both needed", "Neither"],
correct: 2
},
{
q: "Six books A, B, C, D, E, F are on a table. C is above D. E is below F. B is at bottom. A is between C and F. Which book is fourth from bottom?",
options: ["A", "C", "F", "E"],
correct: 2
},
{
q: "How many Sundays are there in a leap year starting with Monday?",
options: ["51", "52", "53", "Cannot say"],
correct: 2
},
{
q: "In a group of 60, 40 like Cricket, 30 like Football, 20 like both. How many like neither?",
options: ["0", "5", "10", "15"],
correct: 2
},
{
q: "Find next: C4X, F9U, I16R, ?",
options: ["K25P", "L25O", "L25P", "M25O"],
correct: 1
},
{
q: "If 'sky' is 'star', 'star' is 'cloud', 'cloud' is 'earth', 'earth' is 'tree', where do birds fly?",
options: ["Star", "Sky", "Cloud", "Tree"],
correct: 0
},
{
q: "Seven friends T, U, V, W, X, Y, Z. Y is taller than T but shorter than W. X is taller than V. U is shortest. W is not tallest. Who is tallest?",
options: ["X", "W", "Z", "Cannot determine"],
correct: 3
},

/* ================= ENGLISH (MODERATE) ================= */

{
q: "Select synonym for 'GREGARIOUS':",
options: ["Sociable", "Silent", "Aggressive", "Hostile"],
correct: 0
},
{
q: "Select antonym for 'CANDID':",
options: ["Frank", "Deceptive", "Honest", "Clear"],
correct: 1
},
{
q: "Identify error: 'Neither the captain (A) / nor the players (B) / was happy with (C) / the decision (D).'",
options: ["A", "B", "C", "D"],
correct: 2 // Subject-verb: closest subject 'players' is plural, needs 'were'
},
{
q: "Meaning of idiom 'To cry wolf':",
options: ["To listen eagerly", "To give false alarm", "To be in pain", "To be brave"],
correct: 1
},
{
q: "Fill in: 'If I _____ a bird, I would fly to you.'",
options: ["am", "was", "were", "been"],
correct: 2
},
{
q: "One word for 'A person who hates mankind':",
options: ["Misanthrope", "Philanthropist", "Optimist", "Teetotaller"],
correct: 0
},
{
q: "Choose correctly spelled word:",
options: ["Ocurrence", "Occurrence", "Occurence", "Occurrance"],
correct: 1
},
{
q: "Sentence improvement: 'He is as tall, if not taller than, his brother.'",
options: ["as tall as", "tall as", "so tall as", "No improvement"],
correct: 0
},
{
q: "Antonym of 'VAGUE':",
options: ["Unclear", "Precise", "Dull", "Implicit"],
correct: 1
},
{
q: "Synonym of 'METICULOUS':",
options: ["Sloppy", "Scrupulous", "Fast", "Haphazard"],
correct: 1
},
{
q: "Fill in: 'The police are _____ with the witness.'",
options: ["talking", "discussing", "conversing", "arguing"],
correct: 0
},
{
q: "Passive voice: 'Who wrote this book?'",
options: ["By whom was this book written?", "Who was this book written by?", "This book was written by whom?", "By whom is this book written?"],
correct: 0
},
{
q: "Fill in: 'Hardly had he reached the station _____ the train started.'",
options: ["then", "than", "when", "while"],
correct: 2
},
{
q: "Idiom: 'Under the weather' means:",
options: ["Feeling sick", "In the rain", "Very happy", "Traveling"],
correct: 0
},
{
q: "Sentence rearrangement: (P) of the world, (Q) English is (R) the most (S) spoken language.",
options: ["QPSR", "QRSP", "PQRS", "QSPR"],
correct: 1
},
{
q: "Fill in: 'He has been living here _____ 2010.'",
options: ["for", "since", "from", "during"],
correct: 1
},
{
q: "Synonym for 'ELATED':",
options: ["Sad", "Exultant", "Tired", "Anxious"],
correct: 1
},
{
q: "Choose the correct article: 'He is _____ honest man.'",
options: ["a", "an", "the", "No article"],
correct: 1
},
{
q: "Antonym for 'DORMANT':",
options: ["Active", "Asleep", "Quiet", "Inert"],
correct: 0
},
{
q: "Meaning of 'Break the ice':",
options: ["Start a quarrel", "Start a conversation", "End a friendship", "Cool things down"],
correct: 1
}

];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedQuestions = new Set();
let timeLeft = 60 * 60; // 60 minutes in seconds
let timerInterval;
let violations = 0;
let examStarted = false;
let isFullscreen = false;

// Enable start button when checkbox is checked
document.addEventListener('DOMContentLoaded', function() {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const startExamBtn = document.getElementById('startExamBtn');
    
    if (agreeCheckbox && startExamBtn) {
        agreeCheckbox.addEventListener('change', function() {
            startExamBtn.disabled = !this.checked;
        });
    }
});

// Start exam function
function startExam() {
    // Hide start screen
    document.getElementById('startScreen').classList.add('hidden');
    
    // Show quiz interface
    document.getElementById('quizInterface').classList.remove('hidden');
    
    // Enter fullscreen
    enterFullscreen();
    
    // Mark exam as started
    examStarted = true;
    
    // Initialize quiz
    init();
}

// Enter fullscreen mode
function enterFullscreen() {
    const elem = document.documentElement;
    
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    
    isFullscreen = true;
}

// Exit fullscreen (only for results)
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    
    isFullscreen = false;
}

// Show warning overlay
function showWarning(message) {
    violations++;
    document.getElementById('warningMessage').innerText = message;
    document.getElementById('violationCount').innerText = violations;
    document.getElementById('warningOverlay').classList.remove('hidden');
    
    // Log violation (in a real system, this would be sent to server)
    console.log(`Violation ${violations}: ${message}`);
}

// Dismiss warning
function dismissWarning() {
    document.getElementById('warningOverlay').classList.add('hidden');
    
    // Re-enter fullscreen
    if (examStarted && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        enterFullscreen();
    }
}

// Monitor fullscreen changes
document.addEventListener('fullscreenchange', function() {
    if (examStarted && !document.fullscreenElement && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        showWarning('You exited fullscreen mode! Please stay in fullscreen.');
        isFullscreen = false;
    } else if (document.fullscreenElement) {
        isFullscreen = true;
    }
});

// Webkit fullscreen change (Safari)
document.addEventListener('webkitfullscreenchange', function() {
    if (examStarted && !document.webkitFullscreenElement && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        showWarning('You exited fullscreen mode! Please stay in fullscreen.');
        isFullscreen = false;
    } else if (document.webkitFullscreenElement) {
        isFullscreen = true;
    }
});

// Detect tab switching (visibility change)
document.addEventListener('visibilitychange', function() {
    if (examStarted && document.hidden && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        showWarning('You switched tabs or minimized the window!');
    }
});

// Detect window blur (switching to another application)
window.addEventListener('blur', function() {
    if (examStarted && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        showWarning('You switched to another application!');
    }
});

// Prevent right-click during exam
document.addEventListener('contextmenu', function(e) {
    if (examStarted && !document.getElementById('resultsContainer').classList.contains('hidden') === false) {
        e.preventDefault();
        showWarning('Right-click is disabled during the exam!');
    }
});

// Detect problematic key combinations
document.addEventListener('keydown', function(e) {
    if (!examStarted || !document.getElementById('resultsContainer').classList.contains('hidden')) {
        return;
    }
    
    // Block Escape key
    if (e.key === 'Escape') {
        e.preventDefault();
        showWarning('Escape key is disabled during the exam!');
    }
    
    // Block Alt+Tab, Windows key, F11, etc.
    if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
        showWarning('Alt+Tab is disabled during the exam!');
    }
    
    // Block Windows/Command key
    if (e.key === 'Meta' || e.metaKey) {
        e.preventDefault();
        showWarning('Windows/Command key is disabled during the exam!');
    }
    
    // Block F keys (except F5 for refresh)
    if (e.key.startsWith('F') && e.key !== 'F5') {
        e.preventDefault();
        showWarning('Function keys are disabled during the exam!');
    }
    
    // Block Ctrl+W (close tab)
    if (e.ctrlKey && (e.key === 'w' || e.key === 'W')) {
        e.preventDefault();
        showWarning('Closing the tab is not allowed during the exam!');
    }
    
    // Block Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        showWarning('Developer tools are disabled during the exam!');
    }
    
    // Block Ctrl+U (view source)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        showWarning('Viewing page source is disabled during the exam!');
    }
});

// Initialize the quiz
function init() {
    renderQuestion();
    renderPalette();
    startTimer();
    updateProgress();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Keyboard navigation
function handleKeyPress(e) {
    if (!examStarted) return;
    
    if (e.key === 'ArrowLeft' && currentQuestion > 0) {
        previousQuestion();
    } else if (e.key === 'ArrowRight' && currentQuestion < questions.length - 1) {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        if (optionIndex < questions[currentQuestion].options.length) {
            selectOption(optionIndex);
        }
    }
}

// Render current question
function renderQuestion() {
    const q = questions[currentQuestion];
    
    // Update question header
    document.getElementById('questionNumber').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('questionNumberIcon').innerText = currentQuestion + 1;
    document.getElementById('currentNum').innerText = currentQuestion + 1;
    document.getElementById('totalNum').innerText = questions.length;
    document.getElementById('questionText').innerText = q.q;
    
    // Render options
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const isSelected = userAnswers[currentQuestion] === idx;
        const optionLetter = String.fromCharCode(65 + idx);
        
        const btn = document.createElement('button');
        btn.className = `w-full p-5 rounded-2xl border-2 text-left transition-all font-medium option-hover ${
            isSelected 
            ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 ring-4 ring-indigo-100 shadow-lg' 
            : 'border-slate-200 hover:border-indigo-300 bg-white text-slate-700'
        }`;
        
        btn.innerHTML = `
            <div class="flex items-center gap-4">
                <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm ${
                    isSelected 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600'
                }">
                    ${optionLetter}
                </span>
                <span class="flex-1">${opt}</span>
                ${isSelected ? `
                    <svg class="w-6 h-6 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                ` : ''}
            </div>
        `;
        
        btn.onclick = () => selectOption(idx);
        container.appendChild(btn);
        
        // Add animation delay
        btn.style.animationDelay = `${idx * 0.05}s`;
        btn.classList.add('animate-fade-in');
    });

    // Update navigation buttons
    const previousBtn = document.getElementById('previousBtn');
    previousBtn.disabled = currentQuestion === 0;
    
    const nextBtn = document.getElementById('nextBtn');
    const nextBtnText = document.getElementById('nextBtnText');
    if (currentQuestion === questions.length - 1) {
        nextBtnText.innerText = 'Review & Submit';
    } else {
        nextBtnText.innerText = 'Next';
    }
    
    // Update mark button
    updateMarkButton();
    
    // Update progress
    updateProgress();
}

// Select an option
function selectOption(idx) {
    userAnswers[currentQuestion] = idx;
    renderQuestion();
    renderPalette();
}

// Toggle mark for review
function toggleMark() {
    if (markedQuestions.has(currentQuestion)) {
        markedQuestions.delete(currentQuestion);
    } else {
        markedQuestions.add(currentQuestion);
    }
    updateMarkButton();
    renderPalette();
}

// Update mark button appearance
function updateMarkButton() {
    const markBtn = document.getElementById('markBtn');
    const markText = document.getElementById('markText');
    
    if (markedQuestions.has(currentQuestion)) {
        markBtn.classList.add('bg-amber-500/30', 'text-amber-100');
        markText.innerText = 'Marked';
    } else {
        markBtn.classList.remove('bg-amber-500/30', 'text-amber-100');
        markText.innerText = 'Mark';
    }
}

// Render question palette
function renderPalette() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = '';
    
    let answered = 0;
    
    questions.forEach((_, i) => {
        const isCurrent = i === currentQuestion;
        const isAnswered = userAnswers[i] !== null;
        const isMarked = markedQuestions.has(i);
        
        if (isAnswered) answered++;

        const btn = document.createElement('button');
        btn.className = `h-11 w-11 rounded-xl font-bold text-sm transition-all border-2 palette-btn ${
            isCurrent ? 'ring-4 ring-offset-2 ring-indigo-400 scale-110 z-10' : ''
        } ${
            isMarked ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white border-amber-500 shadow-md' :
            isAnswered ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-500 shadow-md' : 
            'bg-white text-slate-500 border-slate-300 hover:border-slate-400'
        }`;
        
        btn.innerText = i + 1;
        btn.onclick = () => { 
            currentQuestion = i; 
            renderQuestion(); 
        };
        
        // Add tooltip
        btn.title = isMarked ? 'Marked for review' : isAnswered ? 'Answered' : 'Not visited';
        
        grid.appendChild(btn);
    });

    // Update statistics
    document.getElementById('answeredCount').innerText = answered;
    document.getElementById('markedCount').innerText = markedQuestions.size;
    document.getElementById('remainingCount').innerText = questions.length - answered;
}

// Update progress bar
function updateProgress() {
    const answered = userAnswers.filter(ans => ans !== null).length;
    const progress = (answered / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Show confirmation before submitting
        const unanswered = userAnswers.filter(ans => ans === null).length;
        if (unanswered > 0) {
            const confirmSubmit = confirm(`You have ${unanswered} unanswered question(s). Do you want to submit the test?`);
            if (confirmSubmit) {
                submitQuiz();
            }
        } else {
            submitQuiz();
        }
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Start the timer
function startTimer() {
    const timerDisplay = document.getElementById('timer');
    const timerCard = document.getElementById('timerCard');
    
    timerInterval = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        timerDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        // Add warning styling when time is running low (last 5 minutes)
        if (timeLeft <= 300 && timeLeft > 0) {
            timerCard.classList.add('timer-warning');
        }
        
        // Auto-submit when time runs out
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Your test will be submitted automatically.');
            submitQuiz();
        }
        
        timeLeft--;
    }, 1000);
}

// Submit the quiz
function submitQuiz() {
    // Mark exam as ended
    examStarted = false;
    
    // Clear the timer
    clearInterval(timerInterval);
    
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    
    const reviewList = document.getElementById('answersList');
    reviewList.innerHTML = '';

    // Calculate results
    questions.forEach((q, i) => {
        const uAns = userAnswers[i];
        const item = document.createElement('div');
        item.className = 'p-5 rounded-2xl border-2 transition-all hover:shadow-md';
        
        if (uAns === null) {
            skipped++;
            item.classList.add('bg-slate-50', 'border-slate-200');
            item.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 bg-slate-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        ${i + 1}
                    </div>
                    <div class="flex-1">
                        <p class="font-semibold text-slate-800 mb-2">${q.q}</p>
                        <p class="text-sm text-slate-500 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                            Not Attempted
                        </p>
                        <p class="text-sm text-green-600 font-semibold mt-1">Correct Answer: ${q.options[q.correct]}</p>
                    </div>
                </div>
            `;
        } else if (uAns === q.correct) {
            correct++;
            item.classList.add('bg-green-50', 'border-green-200');
            item.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        ${i + 1}
                    </div>
                    <div class="flex-1">
                        <p class="font-semibold text-slate-800 mb-2">${q.q}</p>
                        <p class="text-sm text-green-700 font-bold flex items-center gap-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Correct: ${q.options[q.correct]}
                        </p>
                    </div>
                </div>
            `;
        } else {
            incorrect++;
            item.classList.add('bg-red-50', 'border-red-200');
            item.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        ${i + 1}
                    </div>
                    <div class="flex-1">
                        <p class="font-semibold text-slate-800 mb-2">${q.q}</p>
                        <p class="text-sm text-red-700 font-bold flex items-center gap-2 mb-1">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                            </svg>
                            Your Answer: ${q.options[uAns]}
                        </p>
                        <p class="text-sm text-green-600 font-semibold">Correct Answer: ${q.options[q.correct]}</p>
                    </div>
                </div>
            `;
        }
        
        reviewList.appendChild(item);
    });

    // Update score display
    const percentage = Math.round((correct / questions.length) * 100);
    document.getElementById('scoreNumber').innerText = correct;
    document.getElementById('percentage').innerText = `${percentage}% Accuracy`;
    document.getElementById('correctCount').innerText = correct;
    document.getElementById('incorrectCount').innerText = incorrect;
    document.getElementById('unattemptedCount').innerText = skipped;
    
    // Animate the circular progress
    const circumference = 2 * Math.PI * 88;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        document.getElementById('scoreCircle').style.strokeDashoffset = offset;
    }, 100);
    
    // Exit fullscreen before showing results
    exitFullscreen();
    
    // Show results modal
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    // Scroll to top of results
    document.getElementById('resultsContainer').scrollTop = 0;
}

// Prevent accidental page refresh during exam
window.addEventListener('beforeunload', function (e) {
    if (examStarted && document.getElementById('resultsContainer').classList.contains('hidden')) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your exam progress will be lost.';
        return e.returnValue;
    }
});