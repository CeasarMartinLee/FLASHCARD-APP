// let data = {
//     question: ["Arya's fighting style is called?", "Sandor Clegane is known as ...", "What's the name of Jon Snows's sword?", "What is the only thing that can put out volatile Wildfire?", "The Night King was created using a dagger made of:", "What is the color of sky?"],
//     answer: ["Water Dancing", "The Hound", "Longclaw", "Sand", "Dragonglass", "Blue"],
//     category: ["GameOfThrones", "GameOfThrones", "GameOfThrones", "GameOfThrones", "GameOfThrones", "Nature"]
// }

const flashcard = [
    {
        "question": "Arya's fighting style is called?",
        "answer": "Water Dancing",
        "category": "GameOfThrones"
    },
    {
        "question": "Sandor Clegane is known as ...",
        "answer": "The Hound",
        "category": "GameOfThrones"
    },
    {
        "question": "What's the name of Jon Snows's sword?",
        "answer": "Longclaw",
        "category": "GameOfThrones"
    },
    {
        "question": "What is the capital city of the Netherlands",
        "answer": "Amsterdam",
        "category": "Geography"
    },
    {
        "question": "What is the capital city of the Turkey",
        "answer": "Ankara",
        "category": "Geography"
    },
    {
        "question": "What is the capital city of the Philippines",
        "answer": "Manilla",
        "category": "Geography"
    }
]

const delB = document.getElementById('delB')
delB.style.display = "none"

function nextQuestion() {
    h2.style.display = "none";
    delB.style.display = "block"
    let n = Math.floor(Math.random() * flashcard.length)
    //data.category[n] should be equal to selected data category
    // console.log(n)
    // console.log(data.question[n])
    document.getElementById('h1').innerHTML = flashcard[n].question
    document.getElementById('h2').innerHTML = flashcard[n].answer
    window.n = n
}

h1.addEventListener("click", nextQuestion);

function addQuestion() {
    let questionVal = document.getElementById('question').value
    let answerVal = document.getElementById('answer').value
    let categoryVal = document.getElementById('category').value

    if (doesNotPassAllValidations(questionVal, answerVal, categoryVal)) {
        return null
    }

    flashcard.push({ "question": questionVal, "answer": answerVal, "category": categoryVal })

    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
    document.getElementById('category').value = ''
    alert('Successfully Added!')

    console.log(flashcard)
}

function deleteQuestion() {
    let n = window.n
    delete flashcard[n]
    // data.question.splice(n, 1)
    // data.answer.splice(n, 1)
    // data.category.splice(n, 1)
    console.log(flashcard)
    // console.log(data.question.length)
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

//Category feature
// var uniqueCategory = [...new Set(data.category)]
// var select = document.getElementById("categoryID"); 
// for(var i = 0; i < uniqueCategory.length; i++) {
//     var opt = uniqueCategory[i];
//     select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
// }