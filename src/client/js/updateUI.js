const updateUI = (data) => {
    const heading = document.querySelector('.heading')

    if (data.status.msg === 'OK') {
        const fragment = document.createDocumentFragment()

        const score = getScore(data.score_tag)
        const scoreTag = document.createElement('h1')
        scoreTag.textContent = score.score
        scoreTag.style.color = score.color
        fragment.appendChild(scoreTag)

        const subjectivity = document.createElement('h2')
        subjectivity.innerHTML = `Subjectivity of the text: <span>${data.subjectivity.toLowerCase()}</span>`
        fragment.appendChild(subjectivity)

        const irony = document.createElement('h2')
        irony.textContent = `Irony of the text: ${data.irony.toLowerCase()}`
        fragment.appendChild(irony)

        const confidence = document.createElement('h2')
        confidence.textContent = `Confidence of the sentiment analysis performed on the text: ${data.confidence}%`
        fragment.appendChild(confidence)

        heading.textContent = ''
        heading.appendChild(fragment)

        document.querySelector('.form').reset() // reset the form 
    }
}

/************* Helper Function *************/
const getScore = (score) => {
    switch (score) {
        case 'P+': return { score: 'Strong Positive', color: '#00b38d' }
        case 'P': return { score: 'Positive', color: '#00b38d' }
        case 'NEU': return { score: 'Neutral', color: '#ffa62b' }
        case 'N': return { score: 'Negative', color: '#d4030e' }
        case 'N+': return { score: 'Strong Negative', color: '#d4030e' }
        case 'NONE': return { score: 'Without Sentiment', color: '#ffa62b' }
    }
}

export { updateUI }