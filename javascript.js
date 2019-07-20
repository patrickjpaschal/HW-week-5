(function() {
    const myQuestions = [
        {
          question: "Stoicism was one of two principal schools of philosophy of the Hellenistic era, What is the other one?",
          answers: {
            a: "Neo-Platonism",
            b: "The Cynics",
            c: "Epicureanism",
            d: "Aristotelianism"
          },
          correctAnswer: "c"
        },
        {
          question: "Stoicism was founded in what year?",
          answers: {
            a: "5BC",
            b: "414AD",
            c: "313BC",
            d: "5AD",
          },
          correctAnswer: "c"
        },
        {
          question: "Where was Stoicism founded?",
          answers: {
            a: "Antarctica",
            b: "Rome, Roman Empire",
            c: "Corinth, Greece",
            d: "Athens, Greece"
          },
          correctAnswer: "d"
        },
        {
            question: "Who first started Stoicism?",
            answers: {
              a: "Epictetus",
              b: "Zeno",
              c: "Plato",
              d: "Seneca"
            },
            correctAnswer: "b"
          },
          {
            question: "Stoics believed this world was the ______ of all other possible worlds.",
            answers: {
              a: "Easiest",
              b: "Best",
              c: "Hardest",
              d: "Prettiest"
            },
            correctAnswer: "b"
          },
          {
            question: "The Stoics believe the world was once_____ and would become_____ again.",
            answers: {
              a: "Fire",
              b: "Ice",
              c: "Void",
              d: "A Paradise"
            },
            correctAnswer: "a"
          },
          {
            question: "The true Stoic is indifferent to everything except?",
            answers: {
              a: "Wealth",
              b: "Sickness",
              c: "Virtue"
            },
            correctAnswer: "c"
          },
          {
            question: "The Stoics were?",
            answers: {
              a: "Agnostic",
              b: "Pantheistic",
              c: "Polytheistic",
              d: "Monotheistic"
            },
            correctAnswer: "b"
          },
        ];
  
    function buildQuiz() {

      const output = [];
  
 
      myQuestions.forEach((currentQuestion, questionNumber) => {
       
        const answers = [];
  
      
        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
       output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
        quizContainer.innerHTML = output.join("");
    }
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
      let numCorrect = 0;
      myQuestions.forEach((currentQuestion, questionNumber) => {
       
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "lightgreen";
        }
         else {
         answerContainers[questionNumber].style.color = "red";
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    buildQuiz();  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(0);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    function answer(){
    var mydiv = document.getElementById("results");
var aTag = document.createElement('a');
aTag.setAttribute('href',"answersheet.html");
aTag.innerHTML = "Click Here to see the Answer Sheet!!!!";
mydiv.appendChild(aTag);};
    setTimeout(five, 100 * 5);
    function five() {
       
        $("#time-left").append("<h3>Once started you will have 5 minutes to complete. The quiz will time-out and you will have to start over.</h3>");
        // console.log("10 seconds left");
      }
      $("#next").on("click", function() {
        //  Set the button alert's timeout to run three seconds after the function's called.
        delayButtonAlert = setTimeout(function() {
          showResults(); nextButton.style.display = "none";answer();
        }, 1000 * 3);
    });
  })();

   