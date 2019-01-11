// const flashcard = 

// [
//     {
//       "category": "GameOfThrones",
//       "answer": "Water Dancing",
//       "question": "Arya's fighting style is called?"
//     },
//     {
//       "category": "GameOfThrones",
//       "answer": "The Hound",
//       "question": "Sandor Clegane is known as ..."
//     },
//     {
//       "category": "GameOfThrones",
//       "answer": "Longclaw",
//       "question": "What's the name of Jon Snows's sword?"
//     },
//     {
//       "category": "Geography",
//       "answer": "Amsterdam",
//       "question": "What is the capital city of the Netherlands"
//     },
//     {
//       "category": "Geography",
//       "answer": "Ankara",
//       "question": "What is the capital city of the Turkey"
//     },
//     {
//       "category": "Geography",
//       "answer": "Manilla",
//       "question": "What is the capital city of the Philippines"
//     }
//   ]

let flashcard = []

const delB = document.getElementById('delB')
delB.style.display = "none"

function nextQuestion() {
    h2.style.display = "none";
    delB.style.display = "block"
    let n = Math.floor(Math.random() * flashcard.length)
    document.getElementById('h1').innerHTML = flashcard[n].question
    document.getElementById('h2').innerHTML = flashcard[n].answer
    window.n = n
}

h1.addEventListener("click", nextQuestion);

async function addQuestion() {
    let questionVal = document.getElementById('question').value
    let answerVal = document.getElementById('answer').value
    let categoryVal = document.getElementById('category').value

    if (doesNotPassAllValidations(questionVal, answerVal, categoryVal)) {
        return null
    }

    flashcard.push({
        "question": questionVal, "answer": answerVal,
        "category": categoryVal
    })

    const request = await fetch('https://api.jsonbin.io/b/5c387ca505d34b26f2076228', {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcard)
    })

    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
    document.getElementById('category').value = ''
    alert('Successfully Added!')
}

async function deleteQuestion() {
    let n = window.n
    delete flashcard[n]
    flashcard = flashcard.filter(Boolean);

    const request = await fetch('https://api.jsonbin.io/b/5c387ca505d34b26f2076228', {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcard)
    })

    alert('Successfully Deleted!')
    nextQuestion()
}

function showAnswer() {
    h2.style.display = "block";
}

function doesNotPassAllValidations(questionVal, answerVal, categoryVal) {
    if (!questionVal) {
        alert('You forgot to fill in new question!')
        return true;
    } else if (!answerVal) {
        alert('You forgot to fill in the answer to the question!')
        return true;
    } else if (!categoryVal) {
        alert('You forgot to fill in the category!')
        return true;
    }
    return false
}

const getJson = async function () {
    const request = await fetch('https://api.jsonbin.io/b/5c387ca505d34b26f2076228/latest')
    const json = await request.json()
    flashcard = json

    nextQuestion()
}

getJson()

