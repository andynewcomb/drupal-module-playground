/* Initial skeletone code created by: James Crooke :: http://www.cj-design.com 
 * Requires quiz1.js, quiz2.js, quiz3.js, etc to have more than at least 15 questions.
 * */


var useranswers = new Array();
var answered = 0;
var index;
var thirtyNumIndex;
var questions = new Array();
var choices = new Array();
var answers = new Array();
var pattern;
var thirtyNumbers = new Array();

document.write("<script language='JavaScript' src='./javascript/quiz_questions/quiz1.js' type='text/javascript'></script>");
document.write("<script language='JavaScript' src='./javascript/quiz_questions/quiz2.js' type='text/javascript'></script>");
document.write("<script language='JavaScript' src='./javascript/quiz_questions/quiz3.js' type='text/javascript'></script>");
document.write("<script language='JavaScript' src='./javascript/quiz_questions/quiz4.js' type='text/javascript'></script>");

function renderQuiz(quizNum) {

  /*get the correct quiz questions*/
  if (quizNum == 1) {questions = quiz1.slice(0); choices = choices1.slice(0); answers = answers1.slice(0);}
  if (quizNum == 2) {questions = quiz2.slice(0); choices = choices2.slice(0); answers = answers2.slice(0);}
  if (quizNum == 3) {questions = quiz3.slice(0); choices = choices3.slice(0); answers = answers3.slice(0);}
  if (quizNum == 4) {questions = quiz4.slice(0); choices = choices4.slice(0); answers = answers4.slice(0);}

  /*Create array with index numbers (0,1,2,3... all the way up to as many questions in the quiz)
   * We will randomly pick (and remove) these numbers from this array and use them as the index to randomly chose questions
   * from the questions[] array. This approach allows us to chose a unique question everytime AND keep the questions[] array
   * intact.*/
  for(c=0;c<questions.length;c++) {
	thirtyNumbers[c]=c;
  }

  /*grab 15 questions*/
  for(i=1;i<16;i++) {
    /*grab a random index number*/
    thirtyNumIndex = Math.floor(Math.random() * thirtyNumbers.length);
    /*now grab the number in that index*/
    index = thirtyNumbers[thirtyNumIndex];
    /*remove that number so it won't be used again*/
    thirtyNumbers.splice(thirtyNumIndex,1);

    document.writeln('<p class="question"><b>' + i + '.</b> ' + questions[index] + ' <span id="result_' + index + '"><img src="pics/blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<choices[index].length;j++) {
      document.writeln('<input type="radio" name="answer_' + index + '" value="' + choices[index][j] + '" id="answer_' + index + '_' + j + '" class="question_' + index + '" onclick="submitAnswer(' + index + ', this, \'question_' + index + '\', \'label_' + index + '_' + j + '\')" /><label id="label_' + index + '_' + j + '" for="answer_' + index + '_' + j + '"> ' + choices[index][j] + '</label><br />');
    }

  }
  document.writeln('<p><input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p>');
}


function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Are you sure you want to reset your answers and start from the beginning?"))
      return false;
  document.location = document.location;
}
function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  disableQuestion(classId);
  answered++;
  showResult(questionId, labelId);
}
function showResult(questionId, labelId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="pics/correct.gif" style="border:0" alt="Correct!" /> <b style="color:green">Correct</b>';
    document.getElementById(labelId).style.fontWeight = "bold";
    document.getElementById(labelId).style.color = "green";
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="pics/incorrect.gif" style="border:0" alt="Incorrect!" /> <b style="color:red">Incorrect</b>';
    document.getElementById(labelId).style.color = "red";
    /*indicate correct answer with bold*/
    var btns = document.getElementsByTagName('label');
    for(b=0;b<btns.length;b++) {
      pattern=new RegExp("label_" + questionId + "_");
      if(btns[b].innerHTML==' ' + answers[questionId] && pattern.test(btns[b].id)) {
	btns[b].style.fontWeight = "bold";
      }
    }

    
  }

  if(answered == 15) {
    showScore();
  }
}
function showScore() {

  var response = new Array();
  response[0] = "Nice Work! You know your stuff!";
  response[1] = "Almost perfect!"
  response[2] = "Pretty good.";
  response[3] = "Hmm... you should study up and try again.";
  response[4] = "Wow... you could do better just randomly guessing.";
  response[5] = "Oh boy, you should not be buying a home anytime soon.";
  response[6] = "You are an embarrassment and an epic Failure!";

  questionCount = 15;
  correct = 0;
  incorrect = 0;
  for(i=0;i<30;i++) {
    if (useranswers[i]) {
      if(useranswers[i] == answers[i])
        correct++;
      else 
        incorrect++;
    }
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + '(' + pc + '%)\n\n';
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 80)
    alertMsg += response[2];
  else if(pc > 70)
    alertMsg += response[3];
  else if(pc >= 60)
    alertMsg += response[4];
  else if(pc >= 50)
    alertMsg += response[5];
  else 
    alertMsg += response[6];
  
  alert(alertMsg);
  
}
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}

