
let flashcard = {}

for (var x = 0; x < 5; x++) {
    flashcard[x] = {question: x,
                answer:   x,
                category:  x}

    }
// console.log (flashcard['0'].question)
// console.log (flashcard)

//   console.log (flashcard[4][question])
//   console.log (Object.keys(flashcard))
//   console.log (flashcard[4][question])


let count = Object.keys(flashcard).length 
let keys = Object.keys(flashcard)
console.log (keys)


const delB = document.getElementById('delB')
delB.style.display = "none"

function nextQuestion() {
    console.log (count)
    h2.style.display = "none";
    delB.style.display = "block"
    let n = Math.floor(Math.random() * (count))
    console.log(keys)
    console.log(keys.indexOf([n]))
    if ((keys.indexOf.n) == -1){
        nextQuestion ()
    }
    document.getElementById('h1').innerHTML = flashcard[n].question
    document.getElementById('h2').innerHTML= flashcard[n].answer
    window.n = n
}

h1.addEventListener("click", nextQuestion);

function addQuestion(){
    let questionVal = document.getElementById('question').value
    let answerVal = document.getElementById('answer').value
    let categoryVal = document.getElementById('category').value

    if(doesNotPassAllValidations(questionVal, answerVal, categoryVal)){
        return null
      }
    
    flashcard[count] = {question: questionVal,
                        answer:   answerVal,
                        category:  categoryVal}

    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
    document.getElementById('category').value = ''
    alert('Successfully Added!')
    count++
    console.log (flashcard)
}

function deleteQuestion(){
    n = window.n
    console.log (n)
    console.log (flashcard[n])

    delete flashcard[n]
    console.log (flashcard)
    alert('Successfully Deleted!')
    document.getElementById('h1').innerText = ''
    document.getElementById('h2').innerText = ''

    
}

function showAnswer(){
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