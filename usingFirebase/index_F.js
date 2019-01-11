
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAepNcf_veTmvDQc2-vZYB3wlThvbpusjQ",
    authDomain: "flashcard-96629.firebaseapp.com",
    databaseURL: "https://flashcard-96629.firebaseio.com",
    projectId: "flashcard-96629",
    storageBucket: "flashcard-96629.appspot.com",
    messagingSenderId: "791707877040"
  };
  firebase.initializeApp(config);


let data = {
    question:["Ayra's fighting style is called?","Sandor Clegane is known as ...","What's the name of Jon Snows's sword?","What is the only thing that can put out volatile Wildfire?","The Night King was created using a dagger made of:"],
    answer:["Water Dancing","The Hound","Longclaw","Sand","Dragonglass"],
    category:["GameOfThrones","GameOfThrones","GameOfThrones","GameOfThrones","GameOfThrones"]
}

console.log(JSON.stringify(data))

const delB = document.getElementById('delB')
delB.style.display = "none"

function nextQuestion() {
    h2.style.display = "none";
    delB.style.display = "block"
    let n = Math.floor(Math.random() * data.question.length)
    // console.log(n)
    // console.log(data.question[n])
    document.getElementById('h1').innerHTML = data.question[n]
    document.getElementById('h2').innerHTML= data.answer[n]
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
    
    data.question.push (questionVal)
    data.answer.push (answerVal)
    data.category.push (categoryVal) 

    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
    document.getElementById('category').value = ''
    alert('Successfully Added!')

    console.log (data)
}

function deleteQuestion(){
    let n = window.n
    data.question.splice(n,1)
    data.answer.splice(n,1)
    data.category.splice(n,1)
    console.log (data)
    console.log (data.question.length)
    alert('Successfully Deleted!')
    nextQuestion()

    
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