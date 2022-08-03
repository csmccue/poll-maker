export function renderPoll(question, optionA, optionB, votesA, votesB) {
    const div = document.createElement('div');
    const optionAElDiv = document.createElement('p');
    const optionBElDiv = document.createElement('p');
    let optionQuestion = question;

    optionAElDiv.textContent = `${optionA}: ${votesA}`;
    optionBElDiv.textContent = `${optionB}: ${votesB}`;

    // const optionADiv = renderPollOption(optionA, votesA);
    // const optionBDiv = renderPollOption(optionB, votesB);

    div.append(optionQuestion, optionAElDiv, optionBElDiv);
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

