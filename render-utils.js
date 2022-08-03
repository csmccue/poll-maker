export function renderPoll(question, optionA, optionB, votesA, votesB) {
    const div = document.createElement('div');
    
    let optionQuestion = question;

    const optionADiv = renderPollOption(optionA, votesA);
    const optionBDiv = renderPollOption(optionB, votesB);

    div.append(optionQuestion, optionADiv, optionBDiv);
    div.classList.add('poll');
    return div;

}

export function renderPollOption(option, votes) {
    const answerDiv = document.createElement('div');
    const optionDiv = document.createElement('p');
    const votesDiv = document.createElement('p');

    optionDiv.textContent = option;
    votesDiv.textContent = votes;

    answerDiv.append(optionDiv, votesDiv);

    return answerDiv;

}

