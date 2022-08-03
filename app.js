// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-poll-container');

const currentQuestionInputEl = document.getElementById('question');
const optionAInputEl = document.getElementById('option-a');
const optionBInputEl = document.getElementById('option-b');

const increaseOptionAButton = document.getElementById('increase-option-a');
const increaseOptionBButton = document.getElementById('increase-option-b');
const decreaseOptionAButton = document.getElementById('decrease-option-a');
const decreaseOptionBButton = document.getElementById('decrease-option-b');
const startPollButton = document.getElementById('start-poll');
const savePollButton = document.getElementById('save-poll');

// let state - done

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;
let pastPolls = [];

startPollButton.addEventListener('click', () => {
    // get the name data from the form
    const questionEl = currentQuestionInputEl.value;
    const optionAEl = optionAInputEl.value;
    const optionBEl = optionBInputEl.value;
    // set the state to this data from the form
    optionA = optionAEl;
    optionB = optionBEl;
    question = questionEl;
    // reset the form values
    //currentQuestionInputEl.value = '';
    //optionAInputEl.value = '';
    //optionBInputEl.value = '';
    // refresh the current game element with new data by calling the appropriate function
    
    refreshCurrentPollEl();

});

increaseOptionAButton.addEventListener('click', () => {
    votesA++;
    console.log(votesA);  
    refreshCurrentPollEl();
});
increaseOptionBButton.addEventListener('click', () => {
    votesB++;
    console.log(votesB);  
    refreshCurrentPollEl();
});
decreaseOptionAButton.addEventListener('click', () => {
    votesA--;
    console.log(votesA);  
    refreshCurrentPollEl();
});
decreaseOptionBButton.addEventListener('click', () => {
    votesB--;
    console.log(votesB);  
    refreshCurrentPollEl();
});

savePollButton.addEventListener('click', () => {
    console.log('save poll button pressed');
    const newPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };

    pastPolls.push(newPoll);
    pastPolls.textContent = '';
    for (let poll of pastPolls) {
        const pollEl = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB);
        currentPollEl.append(pollEl); 

    }
    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;

    currentQuestionInputEl.value = '';
    optionAInputEl.value = '';
    optionBInputEl.value = '';

    refreshCurrentPollEl();
    displayAllPolls();
});




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function refreshCurrentPollEl() {
    // clear the text contest of the question
    currentPollEl.textContent = '';

    currentQuestionInputEl.textContent = question;
    optionAInputEl.textContent = optionA;
    optionBInputEl.textContent = optionB;
    

    const pollEl = renderPoll(question, optionA, optionB, votesA, votesB);
    pollEl.classList.add('current');
    currentPollEl.append(pollEl);

}

//function refreshCurrentQuestion() {
    //currentQuestionEl.textContent = '';
//}
function displayAllPolls() {
    currentPollEl.textContent = '';
    pastPollsEl.textContent = '';
    for (let poll of pastPolls) {
        const pollEl = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB);
        pastPollsEl.append(pollEl);
    } 
}