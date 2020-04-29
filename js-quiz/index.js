
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(array_questions, quizContainer, resultsContainer, submitButton);
let array_questions = [
    {
        question: "which the most hit song of Queen?",
        answer: {
            a: "Killer queen",
            b: "Bohemian Rhapsody",
            c: "radio gaga",

        },
        correctanswer: "b"

    },
    {
        question: "Which song did Bowie collaporate with Queen?",
        answer: {
            a: "Killer queen",
            b: "Under Pressure",
            c: "radio gaga",

        },
        correctanswer: "b"

    },
    {
        question: "Which song was Roger Taylor hit",
        answer: {
            a: "Killer queen",
            b: "I'm in LOve with my car",
            c: "radio gaga",

        },
        correctanswer: "b"

    }
];

function generateQuix(questions, questionsContainer, resultContainer, submitButton) {
    function showQuestion(questions, questionsContainer) {
        var output = [];
        var answer;

        for (var i = 0; i < questions.length; i++) {

            answer = [];
            for (letter in questions[i].answer) {

                answer.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );


            }
        
	
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}






    function showResult(questions, questionsContainer, resultContainer) { 
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
    };
    showQuestion(questions, questionsContainer);

